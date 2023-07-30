import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Magic Comments",
	description: "Add comments to your code, magically !",
	icons: {
		icon: "https://cdn.icon-icons.com/icons2/564/PNG/512/Fantasy_icon-icons.com_54181.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
