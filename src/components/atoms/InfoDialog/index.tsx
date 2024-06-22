import { FC } from "react";
import { InfoDialogProps } from "./index.types";

const InfoDialog: FC<InfoDialogProps> = ({ backDesc, preview }) => {
	return (
		<>
			<div className="grid mb-2">
				<div className="mx-10 mt-4">
					<p className="text-sm font-semibold text-center uppercase whitespace-pre-line">
						{backDesc}
					</p>
				</div>
			</div>
			<div className="w-[80%] mx-auto h-[2px] bg-black/20" />
			<div className="grid py-2 mx-10 tablet:my-6">
				{preview.map((content, i) => (
					<div className="mt-3" key={i}>
						<p className="text-sm font-semibold whitespace-pre-line">
							{content}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default InfoDialog;
