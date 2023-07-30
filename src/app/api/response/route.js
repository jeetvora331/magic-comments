export default async function handler(req, res) {
	const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

	const apiUrl = "https://chimeragpt.adventblocks.cc/v1/completions";
	const prompt = req.body.prompt; // Assuming the prompt is passed in the request body

	const requestOptions = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${OPENAI_API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			model: "text-davinci-003",
			max_tokens: 500,
			temperature: 0.3,
			prompt: prompt,
		}),
	};

	try {
		// const response = await fetch(apiUrl, requestOptions);
		// const responseData = await response.json();
		res.status(200).json({greeting : prompt });
	} catch (error) {
		console.error("Error:", error.message);
		res.status(500).json({ error: "Something went wrong" });
	}
}
