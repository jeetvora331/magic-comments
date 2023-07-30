"use client";
import React, { useState } from "react";

const Accordion = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="max-w-3xl mx-auto  border rounded-lg m-2 overflow-hidden">
			<button
				onClick={toggleAccordion}
				className="flex justify-between w-full px-4 py-2 font-semibold bg-purple-300 hover:bg-gray-300"
			>
				Click for Tutorial
				<span className="transform transition-transform">
					{isOpen ? "-" : "+"}
				</span>
			</button>
			{isOpen && (
				<div className="p-4 bg-gray-100 ">
					{/* Your accordion content goes here */}
					<p>This is the content of the accordion.</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;
