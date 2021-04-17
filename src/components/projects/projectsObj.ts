import xvsCalculator from '../../img/xvscalculator.png';
import calculator from '../../img/Calculator.png';
import reactQuiz from '../../img/reactquiz.png';
import matebook from '../../img/matebook.png';
import myPortfolio from '../../img/myportfolio.png';

const Projects = [
	{
		name: 'Crypto Liquidation Calculator',
		description:
			"A financial calculator that extracts real time cryptocurrency prices using CoinGecko's API. The purpose of this calculator is to help with risk management when investing in certain crypto assets. It's a liquidation calculator to make sure the user isn't going to lose money when investing.",
		tools: ['JavaScript', 'API', 'CSS3', 'HTML5'],
		img: xvsCalculator,
		imgAlt: 'Crypto Liquidation Calculator',
		github: 'https://github.com/adriandelgg/Crypto-Calculator',
		demo: 'https://www.xvscalculator.com'
	},
	{
		name: 'My Portfolio Site',
		description:
			'Hey! This looks familiar! This website was created to show case some of my front-end skills while providing an elegant & minimalist UX design.',
		tools: ['React', 'TypeScript', 'Material UI', 'CSS3'],
		img: myPortfolio,
		imgAlt: 'My Portfolio Website',
		github: 'https://github.com/adriandelgg/MyPortfolio-Site',
		demo: 'https://adriandelgado.dev'
	},
	{
		name: 'Vanilla Calculator',
		description:
			'A colorful calculator built from scratch that computes basic arithmetic. ',
		tools: ['JavaScript', 'CSS3', 'HTML5'],
		img: calculator,
		imgAlt: 'Vanilla Calculator',
		github: 'https://github.com/adriandelgg/Calculator',
		demo: 'https://adriandelgg.github.io/Calculator/'
	},
	{
		name: 'Matebook X Pro Landing Page',
		description:
			"A mock landing page created for Huawei's flagship laptop. Non-responsive, built for the design & simplicity.",
		tools: ['CSS3', 'HTML5'],
		img: matebook,
		imgAlt: 'Matebook X Pro Site',
		github: 'https://github.com/adriandelgg/Matebook-Pro',
		demo: 'https://adriandelgg.github.io/Matebook-Pro'
	},
	{
		name: 'React Trivia Game',
		description:
			"A fun trivia game created with React & Open Trivia's API to play a quiz with 10 random questions from different categories.",
		tools: ['React.js', 'REST API', 'CSS3', 'HTML5'],
		img: reactQuiz,
		imgAlt: 'Trivia Game',
		github: 'https://github.com/adriandelgg/React-API-Quiz-App',
		demo: 'https://reactquizapi.netlify.app/'
	}
];

export default Projects;
