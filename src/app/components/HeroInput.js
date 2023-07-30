"use client";
import { useState } from "react";
import Form from "./Form";
import Intro from "./Intro";

const HeroInput = () => {
	const [isTutorialOpen, setIsTutorialOpen] = useState(true);
	return (
		<>
			<div className="max-w-3xl  mx-auto bg-slate-50  p-12 rounded-lg ">
				{isTutorialOpen ? (
					<h1 className="text-4xl text-center mb-4">
						Tutorial on how to use the Magic
					</h1>
				) : (
					<h1 className="text-4xl text-center mb-4">Enter Your Code here</h1>
				)}

				{isTutorialOpen ? (
					<Intro
						isTutorialOpen={isTutorialOpen}
						setIsTutorialOpen={setIsTutorialOpen}
					/>
				) : (
					<Form />
				)}
			</div>
		</>
	);
};

export default HeroInput;
