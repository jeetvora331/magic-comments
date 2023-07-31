import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<Link href="https://jeet-dev.vercel.app/" target="_blank">
			<div className="absolute bottom-0 w-full p-1 text-center text-gray-100 opacity-40 hover:opacity-100  hover:bg-zinc-800 ">
				Made with ❤️ by Jeet in India
			</div>
		</Link>
	);
};

export default Footer;
