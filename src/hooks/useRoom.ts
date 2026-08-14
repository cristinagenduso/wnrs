import { useCallback, useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import {
	ref,
	set,
	onValue,
	update,
	remove,
	get,
	onDisconnect,
} from "firebase/database";
import { generateRoomCode } from "../util/gameUtils";

export interface RoomState {
	code: string;
	hostName: string;
	guestName: string;
	selectedDecks: string[];
	seed: number;
	currentCardIndex: number;
	currentLevelIndex: number;
	currentPlayerIndex: number;
	started: boolean;
	createdAt: number;
}

interface UseRoomReturn {
	roomCode: string | null;
	roomState: RoomState | null;
	isHost: boolean;
	isConnected: boolean;
	error: string | null;
	createRoom: (hostName: string, selectedDecks: string[]) => Promise<string>;
	joinRoom: (code: string, guestName: string) => Promise<boolean>;
	updateGameState: (updates: Partial<RoomState>) => Promise<void>;
	startGame: () => Promise<void>;
	leaveRoom: () => void;
}

export function useRoom(): UseRoomReturn {
	const [roomCode, setRoomCode] = useState<string | null>(null);
	const [roomState, setRoomState] = useState<RoomState | null>(null);
	const [isHost, setIsHost] = useState(false);
	const [isConnected, setIsConnected] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const unsubscribeRef = useRef<(() => void) | null>(null);

	// Clean up listener on unmount
	useEffect(() => {
		return () => {
			if (unsubscribeRef.current) {
				unsubscribeRef.current();
			}
		};
	}, []);

	const subscribeToRoom = useCallback((code: string) => {
		const roomRef = ref(db, `rooms/${code}`);
		const unsubscribe = onValue(
			roomRef,
			(snapshot) => {
				if (snapshot.exists()) {
					setRoomState(snapshot.val() as RoomState);
					setIsConnected(true);
				} else {
					setRoomState(null);
					setIsConnected(false);
				}
			},
			(err) => {
				setError(`Connection error: ${err.message}`);
				setIsConnected(false);
			}
		);
		unsubscribeRef.current = unsubscribe;
	}, []);

	const createRoom = useCallback(
		async (hostName: string, selectedDecks: string[]): Promise<string> => {
			try {
				setError(null);
				const code = generateRoomCode();
				const seed = Math.floor(Math.random() * 2147483647);

				const roomData: RoomState = {
					code,
					hostName,
					guestName: "",
					selectedDecks,
					seed,
					currentCardIndex: 0,
					currentLevelIndex: 0,
					currentPlayerIndex: 0,
					started: false,
					createdAt: Date.now(),
				};

				const roomRef = ref(db, `rooms/${code}`);
				await set(roomRef, roomData);

				// Set up auto-cleanup on disconnect
				onDisconnect(roomRef).remove();

				setRoomCode(code);
				setIsHost(true);
				subscribeToRoom(code);

				return code;
			} catch (err) {
				const message = err instanceof Error ? err.message : "Failed to create room";
				setError(message);
				throw err;
			}
		},
		[subscribeToRoom]
	);

	const joinRoom = useCallback(
		async (code: string, guestName: string): Promise<boolean> => {
			try {
				setError(null);
				const upperCode = code.toUpperCase();
				const roomRef = ref(db, `rooms/${upperCode}`);
				const snapshot = await get(roomRef);

				if (!snapshot.exists()) {
					setError("Room not found. Check the code and try again.");
					return false;
				}

				const data = snapshot.val() as RoomState;
				if (data.guestName) {
					setError("Room is full.");
					return false;
				}

				await update(roomRef, { guestName });

				setRoomCode(upperCode);
				setIsHost(false);
				subscribeToRoom(upperCode);

				return true;
			} catch (err) {
				const message = err instanceof Error ? err.message : "Failed to join room";
				setError(message);
				return false;
			}
		},
		[subscribeToRoom]
	);

	const updateGameState = useCallback(
		async (updates: Partial<RoomState>): Promise<void> => {
			if (!roomCode) return;
			try {
				const roomRef = ref(db, `rooms/${roomCode}`);
				await update(roomRef, updates);
			} catch (err) {
				const message = err instanceof Error ? err.message : "Failed to update";
				setError(message);
			}
		},
		[roomCode]
	);

	const startGame = useCallback(async (): Promise<void> => {
		if (!roomCode || !isHost) return;
		await updateGameState({ started: true });
	}, [roomCode, isHost, updateGameState]);

	const leaveRoom = useCallback(() => {
		if (unsubscribeRef.current) {
			unsubscribeRef.current();
			unsubscribeRef.current = null;
		}
		if (roomCode) {
			if (isHost) {
				// Host leaving destroys the room
				remove(ref(db, `rooms/${roomCode}`));
			} else {
				// Guest leaving clears the guest name
				update(ref(db, `rooms/${roomCode}`), { guestName: "" });
			}
		}
		setRoomCode(null);
		setRoomState(null);
		setIsHost(false);
		setIsConnected(false);
		setError(null);
	}, [roomCode, isHost]);

	return {
		roomCode,
		roomState,
		isHost,
		isConnected,
		error,
		createRoom,
		joinRoom,
		updateGameState,
		startGame,
		leaveRoom,
	};
}
