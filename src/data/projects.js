export default [
   {
      id: 1,
      title: 'CodeTogether',
      imgUrl: './CodeTogetherPreview.png',
      stack: ['React.js', 'Node.js', 'Docker'],
      link: 'https://github.com/GiridharRNair/CodeTogether',
      details: [
			{
				id: 1,
				info: "- Developed a web-based collaborative code editor supporting 74 programming languages, leveraging Microsoft's Monaco editor for efficient syntax highlighting via the monaco-editor/react node package"
			}, 
			{	id: 2,
				info: '- Integrated real-time document update propagation using Y-Webrtc, an open-source back-end solution enabling appends of up to 6000 characters in just 1 ms, deployed thorugh Heroku'
			},
			{	id: 3,
				info: '- Utilized Axios to send HTTP requests to the JDoodle REST API for code compilation, attaining an average latency of 1,508ms'
			},
			{
				id: 4,
				info: '- Achieved 93\% performance and 99\% structure ratings from GTmetrix, a reputable online website auditing tool',
			},
		]
   },
   {
	id: 2,
	title: 'Pong Game AI',
	imgUrl: './PongGameAI.gif',
	stack: ['Python'],
	link: 'https://github.com/GiridharRNair/PongGameAI',
	details: [
		  {
			  id: 1,
			  info: '- Utilized NEAT (NeuroEvolution of Augmenting Topologies) algorithm installed via the neat-python library to train AI agents to playing the game of Pong'
		  }, 
		  {
			  id: 2,
			  info: '- Implemented 3 difficulty levels with varying AI configurations and training generations, including a hard difficulty that underwent 50 generations of the NEAT algorithm, with a fitness threshold of 300',
		  },
		  {	id: 3,
			  info: '- Utilized Pygame to create an interactive version of Pong and provided instructions and information for selecting different difficulty levels via the command line'
		  }
	  ]
 	},
   {
      id: 3,
      title: 'A* Algorithm Visualizer',
      imgUrl: './AStarVisualizer.gif',
      stack: ['Java'],
      link: 'https://github.com/GiridharRNair/A-Star-Algorithm-Visualizer',
      details: [
			{
				id: 1,
				info: '- Visualized the A* algorithm on a 15 by 11 grid using a single thread executor'
			}, 
			{
				id: 2,
				info: '- Amplified visualizer functionality by incorporating 4 features: adjustable speed, interactive obstacle integration, start/stop/pause controls, and sound effects utilizing Java.awt, Javax, and Java Swing libraries',
			},
			{	id: 3,
				info: '- Enhanced UI by implementing the FlatLaf dark mode theme, an open-source cross-platform Look and Feel library for Java Swing, with a lightweight file size of 800 KB'
			}
		]
   },
   {
      id: 4,
      title: 'Sudoku Solver',
      imgUrl: './SudokuSolverDemo.gif',
      stack: ['Java'],
      link: 'https://github.com/GiridharRNair/SudokuSolver',
      details: [
			{
				id: 1,
				info: '- Implemented a recursive backtracking algorithm to solve Sudoku puzzles with an adjustable speed, achieving a solve time of under 2 ms on the fastest setting'
			}, 
			{
				id: 2,
				info: '- Expanded solver capabilities by incorporating a dynamic Sudoku puzzle generation that produces puzzles of varying difficulties',
			},
		]
   },

]