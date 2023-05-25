import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ParticlesLight from './components/background/ParticlesComponentLight';
import ParticlesDark from './components/background/ParticlesComponentDark';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSpring, animated } from "react-spring";

function App() {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	const properties = {
	  sun: {
		r: 9,
		transform: "rotate(40deg)",
		cx: 12,
		cy: 4,
		opacity: 0
	  },
	  moon: {
		r: 5,
		transform: "rotate(90deg)",
		cx: 30,
		cy: 0,
		opacity: 1
	  },
	  springConfig: { mass: 4, tension: 250, friction: 35 }
	};

	const { r, transform, cx, cy, opacity } = (theme === 'dark')
	  ? properties["moon"]
	  : properties["sun"];
	const svgContainerProps = useSpring({
	  transform,
	  config: properties.springConfig
	});

	const centerCircleProps = useSpring({ r, config: properties.springConfig });
	
	const maskedCircleProps = useSpring({
	  cx,
	  cy,
	  config: properties.springConfig
	});

	const linesProps = useSpring({ opacity, config: properties.springConfig });
  

  return (
	<>
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{ ...svgContainerProps, cursor: "pointer" }}
			onClick={handleThemeSwitch}
			className="fixed z-10 sm:right-3 sm:top-3 right-2 top-2 bg-stone-300 hover:bg-stone-400 hover:dark:bg-stone-300 dark:bg-white text-lg p-1 rounded-md"
		>
			<mask id="mask">
			<rect x="0" y="0" width="100%" height="100%" fill="white" />
			<animated.circle
				style={maskedCircleProps}
				cx="12"
				cy="4"
				r="9"
				fill="black"
			/>
				</mask>
			<animated.circle
				style={centerCircleProps}
				fill="black"
				cx="12"
				cy="12"
				r="9"
				mask="url(#mask)"
			/>

			<animated.g style={linesProps} fill="currentColor">
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
			</animated.g>
		</animated.svg>
		<Router>
			<Navbar />
			<div className="text-stone-900 dark:text-white min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
						<Routes>
							<Route exact path="/GiridharPortfolio" element={<Intro />} />
							<Route path="/GiridharPortfolio/Projects" element={<Projects />} />
							<Route path="/GiridharPortfolio/Contact" element={<Contact />} />
							<Route path="/GiridharPortfolio/Timeline" element={<Timeline />} />
						</Routes>
					{theme === 'light' ? 
						<ParticlesLight />
					: <ParticlesDark />}
				</div>
				<Footer />
			</div>
		</Router>
	 </>
  )
}

export default App