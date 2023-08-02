"use client";
import React, { useState } from "react";
import Result from "./Result";
import Spinner from "./Spinner";

const NEXT_PUBLIC_OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const Form = () => {
	const [result, setResult] = useState("");
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isButtonActive, setIsButtonActive] = useState(true);

	const handleSubmit = async (event) => {
		event.preventDefault();
		// event.currentTarget.classList.add("pointer-events-none");
		if (input.length === 0) {
			alert("Enter some Code");
			return;
		}
		setIsLoading(true);
		setIsButtonActive(false);

		const prompt =
			input +
			"on the top of the file in simple 1 line describe what the entire code do. add few comments and very few suitable emojis to the code"; // Replace with your desired prompt

		// console.log("clicked");
		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${NEXT_PUBLIC_OPENAI_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",
				messages: [
					{
						role: "system",
						content: "You are an expert in writing comments to the code",
					},
					{
						role: "user",
						content: prompt,
					},
				],
				temperature: 1,
				max_tokens: 500,
				top_p: 0.3, // TODO: Try various values
				frequency_penalty: 0,
				presence_penalty: 0,
			}),
		};

		try {
			const response = await fetch(
				"https://chimeragpt.adventblocks.cc/api/v1/chat/completions",
				requestOptions
			);
			const data = await response.json();
			const resp = data?.choices[0]?.message?.content;
			console.log("resp", resp);
			setResult(resp);
		} catch (error) {
			console.error("Error:", error);
		}
		setIsLoading(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="block">
				<textarea
					className="w-full bg-slate-200 focus:outline rounded-lg mb-4 p-2 font-mono"
					name=""
					id=""
					type="text"
					placeholder="Enter your code here..."
					cols="30"
					rows="10"
					onChange={(e) => setInput(e.target.value)}
				></textarea>
				<div className="text-center">
					{isButtonActive ? (
						<button
							type="submit"
							className="` text-white bg-violet-900 hover:bg-gradient-to-br from-purple-600 to-blue-500  font-medium rounded-md text-xl px-5 py-2.5 text-center mr-2 mb-2`"
						>
							Submit
						</button>
					) : null}
				</div>
			</form>
			{isLoading ? <Spinner /> : null}
			{result ? (
				<div>
					<div className="text-2xl py-2.5 text-center">
						Modified code is given below 👇
					</div>
					<Result result={result} />
				</div>
			) : null}
		</div>
	);
};

export default Form;
