import xvsCalculator from '../../img/xvscalculator.png';
import calculator from '../../img/Calculator.png';
import reactQuiz from '../../img/reactquiz.png';
import matebook from '../../img/matebook.png';

const Projects = [
	{
		name: 'Crypto Liquidation Calculator',
		description:
			"A financial calculator that extracts real time cryptocurrency prices using CoinGecko's API. The purpose of this calculator is to help with risk management when investing in certain crypto assets. It's a liquidation calculator to make sure that the user isn't going to lose money when investing.",
		tools: ['Vanilla JavaScript', 'CSS3', 'HTML5', 'API'],
		img: xvsCalculator,
		imgAlt: 'Crypto Liquidation Calculator',
		github: 'https://github.com/adriandelgg/Crypto-Calculator',
		demo: 'https://www.xvscalculator.com'
	},
	{
		name: 'Vanilla Calculator',
		description:
			'A colorful calculator built from scratch that computes basic arithmetic.',
		tools: ['Vanilla JavaScript', 'CSS3', 'HTML5'],
		img: calculator,
		imgAlt: 'Vanilla Calculator',
		github: 'https://github.com/adriandelgg/Calculator',
		demo: 'https://adriandelgg.github.io/Calculator/'
	},
	{
		name: 'React Trivia Game',
		description:
			'A trivia game created with React & a trivia API to get 10 random questions from different categories. ',
		tools: ['React.js', 'API', 'CSS3', 'HTML5'],
		img: reactQuiz,
		imgAlt: 'Trivia Game',
		github: 'https://github.com/adriandelgg/React-API-Quiz-App',
		demo: 'https://reactquizapi.netlify.app/'
	},
	{
		name: 'Matebook X Pro Landing Page',
		description: '',
		tools: ['CSS3', 'HTML5'],
		img: matebook,
		imgAlt: 'Matebook X Pro Site',
		github: 'https://github.com/adriandelgg/Matebook-Pro',
		demo: 'https://adriandelgg.github.io/Matebook-Pro'
	}
];

export default Projects;
