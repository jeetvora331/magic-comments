"use client";
import { useState } from "react";

const FormComponent = () => {
	const [username, setUsername] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch("/api/greeting", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username }),
		});

		const data = await response.json();

		alert(data.greeting);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default FormComponent;
