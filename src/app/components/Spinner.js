import React from "react";

const Spinner = () => {
	return (
		<div>
			<div className="flex justify-center items-center ">
				<div className="relative inline-flex">
					<div className="w-80 h-1 bg-violet-300 rounded-full pulse"></div>
					<div className="w-80 h-1 bg-violet-700 rounded-full absolute top-0 left-0 animate-ping"></div>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
