import { CodeBlock, atomOneDark, dracula } from "react-code-blocks";

const Result = ({ result }) => {
	return (
		<div className="">
			<div className="bg-violet-950 text-white h-fit max-h-96 rounded-lg  my-6 overflow-auto ">
				<pre className="text-sm  rounded-md font-mono">
					<CodeBlock
						text={result}
						showLineNumbers={true}
						theme={atomOneDark}
						wrapLines
					/>
				</pre>
			</div>
			<div>
				<button
					onClick={() => {
						if ("clipboard" in navigator) {
							navigator.clipboard.writeText(result);
						}
					}}
					className="bg-slate-200 px-2 py-1 rounded-md text-sm hover:bg-violet-300"
				>
					Copy to clipboard
				</button>
			</div>
		</div>
	);
};

export default Result;
