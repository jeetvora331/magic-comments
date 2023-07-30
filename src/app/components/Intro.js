import Link from "next/link";
import React from "react";

const Intro = ({ setIsTutorialOpen, isTutorialOpen }) => {
	return (
		<div className="flex flex-col transition-opacity">
			<ul className="bg-slate-200 text-2xl p-4 rounded-lg flex flex-col gap-6 list-disc pl-8 ">
				<li className="">
					This is a cool AI based tool which adds comments and emojis 🚀 to your
					code.
				</li>
				<li>Please add small chunks of code for the magic to work.</li>
				<li>
					For example, copy the solution of
					<Link
						href={"https://leetcode.com/problems/two-sum/solution/"}
						target="_blank"
					>
						<span className="text-indigo-600">
							{" "}
							this standard LeetCode problem.
						</span>
					</Link>
				</li>
			</ul>
			<button
				onClick={() => setIsTutorialOpen(false)}
				className="text-white bg-violet-900 hover:bg-gradient-to-br from-purple-600 to-blue-500  font-medium rounded-md text-xl px-5 py-2.5 text-center mt-5"
			>
				Ok, Start the Magic 🚀
			</button>
		</div>
	);
};

export default Intro;
