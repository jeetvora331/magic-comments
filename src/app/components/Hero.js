import React from "react";
import HeroInput from "./HeroInput";
import HeroText from "./HeroText";

const Hero = () => {
	return (
		<>
			<div className="mx-auto max-w-7xl justify-between flex-col mb-6 ">
				<HeroText />
				{/* <Accordion /> */}
				<HeroInput />
			</div>
		</>
	);
};

export default Hero;
