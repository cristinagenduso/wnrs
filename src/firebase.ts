import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCIfUWYSv6cUX450yZL12aow6A0nwfDpPg",
	authDomain: "wnrs-20db0.firebaseapp.com",
	projectId: "wnrs-20db0",
	storageBucket: "wnrs-20db0.firebasestorage.app",
	messagingSenderId: "746878280253",
	appId: "1:746878280253:web:35838ae7927fafd916c054",
	measurementId: "G-P36048KM9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
