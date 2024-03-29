import React, { useEffect, useState } from 'react';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
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
	<div className='h-screen scrollbar-hide'>
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
			className="fixed z-10 sm:right-3 sm:top-3 right-3 top-3 bg-stone-300 hover:bg-stone-400 hover:dark:bg-stone-300 dark:bg-white text-lg p-1 rounded-md"
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
			<div className="dark:bg-stone-900 text-stone-900 dark:text-white min-h-screen font-inter">
				<div className="w-full mx-auto">
					<Routes>
						<Route exact path="/" element={<Intro />} />
						<Route path="/Projects" element={<Projects />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Timeline" element={<Timeline />} />
					</Routes>

				</div>
			</div>
		</Router>
	 </div>
  )
}

export default App