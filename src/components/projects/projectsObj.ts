import xvsCalculator from '../../img/xvscalculator.webp';
import calculator from '../../img/Calculator.webp';
import reactQuiz from '../../img/reactquiz.webp';
import matebook from '../../img/matebook.webp';
import myPortfolio from '../../img/myportfolio.webp';
import ecommerce from '../../img/ecommerce.webp';

const Projects = [
	{
		name: 'Crypto Liquidation Calculator',
		description:
			"A financial calculator built for a client that extracts real time cryptocurrency prices using CoinGecko's API. The purpose of this calculator is to help manage risk when investing in certain crypto assets. It's a liquidation calculator to make sure the user isn't going to lose money from leveraging when investing.",
		tools: ['JavaScript', 'API', 'CSS3', 'HTML5', 'Google Analytics'],
		img: xvsCalculator,
		imgAlt: 'Crypto Liquidation Calculator',
		github: 'https://github.com/adriandelgg/Crypto-Calculator',
		demo: 'https://xvscalculator.com'
	},
	{
		name: 'eCommerce Store',
		description:
			"An eCommerce website built & designed completely from scratch using Commerce.js's REST API to handle the population of the products. I used Redux to store the state of the shopping cart, saved items, & render the proper UI components based on the user's actions.",
		tools: [
			'React',
			'Redux',
			'JavaScript',
			'Material UI',
			'API',
			'CSS3',
			'React-Router',
			'Reselect'
		],
		img: ecommerce,
		imgAlt: 'eCommerce Website',
		github: 'https://github.com/adriandelgg/eCommerce-Store',
		demo: 'https://techecommerce.netlify.app/'
	},
	{
		name: 'My Portfolio Site',
		description:
			'Hey, this looks familiar! This website was created & designed from scratch without templates to showcase some of my front-end skills by providing an elegant & minimalist UX design.',
		tools: ['React', 'TypeScript', 'Material UI', 'CSS3', 'Google Analytics'],
		img: myPortfolio,
		imgAlt: 'My Portfolio Website',
		github: 'https://github.com/adriandelgg/MyPortfolio-Site',
		demo: 'https://adriandelgado.dev'
	},
	{
		name: 'Vanilla Calculator',
		description:
			"The very first project I ever created! It's a colorful calculator built & designed from scratch that computes basic arithmetic. ",
		tools: ['JavaScript', 'CSS3', 'HTML5'],
		img: calculator,
		imgAlt: 'Vanilla Calculator',
		github: 'https://github.com/adriandelgg/Calculator',
		demo: 'https://adriandelgg.github.io/Calculator/'
	},
	{
		name: 'React Trivia Game',
		description:
			"A fun trivia game created with React & Open Trivia's API. It gives you 10 random questions from the category of your choice.",
		tools: ['React.js', 'REST API', 'CSS3', 'HTML5'],
		img: reactQuiz,
		imgAlt: 'Trivia Game',
		github: 'https://github.com/adriandelgg/React-API-Quiz-App',
		demo: 'https://reactquizapi.netlify.app/'
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
	}
];

export default Projects;
