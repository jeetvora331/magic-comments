import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mobile from "./components/Mobile";

export default function Home() {
	return (
		<div className="min-h-screen  h-full relative bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-950  to-slate-950">
			<div className="h-12 w-12 z-30 top-60 left-40 absolute rounded-full bg-purple-400 animate-pulse blur-xl "></div>
			<div className="h-12 w-12 z-30 right-64 blur-xl bottom-52 absolute rounded-full bg-purple-400 animate-pulse"></div>
			<div className="md:block hidden p-6 sm:z-40 relative ">
				<Hero />
			</div>
			<div className="block md:hidden">
				<Mobile />
			</div>
			<Footer />
		</div>
	);
}
