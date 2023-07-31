import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Magic Comments",
	description: "Add comments to your code, magically !",
	icons: {
		icon: "https://img.icons8.com/?size=512&id=xKAfx2KN4Ea6&format=png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
