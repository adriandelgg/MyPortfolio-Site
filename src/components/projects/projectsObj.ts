import xvsCalculator from '../../img/xvscalculator.webp';
import calculator from '../../img/Calculator.webp';
import reactQuiz from '../../img/reactquiz.webp';
import myPortfolio from '../../img/myportfolio.webp';
import ecommerce from '../../img/ecommerce.webp';
import coinflip from '../../img/coinflip.webp';

export const projectsList = [
	// {
	// 	name: 'NFT Decentralized Exchange',
	// 	description:
	// 		'A decentralized exchange DApp that lets you mint new ERC-721 NFTs (Non-Fungible Tokens). These new minted NFTs are then uploaded to IPFS to store its metadata and keep gas costs low by not saving them on the blockchain directly. The DEx also intelligently keeps track of who puts an NFT up for sale for others to buy & at what price. Once a buyer purchases an NFT, the DEx knows which seller originally put the NFT up for sale as is able to pay them properly, as well as takes a commission for the service.',
	// 	tools: [
	// 		'Solidity',
	// 		'NFTs/ERC-721',
	// 		'React',
	// 		'Web3.js',
	// 		'Truffle',
	// 		'Next.js',
	// 		'JavaScript',
	// 		'Tailwind CSS',
	// 		'Mocha',
	// 		'Chai',
	// 		'Ethereum'
	// 	],
	//  img: dex,
	// 	imgAlt: 'NFT Decentralized Exchange',
	// 	github: 'https://github.com/adriandelgg/NFT-Exchange'
	//  demo: ''
	// },
	{
		name: 'Ethereum CoinFlip Game',
		description:
			'An Ethereum blockchain dApp game where 2 players can bet an ERC20 token I created (FLIP) with each other. The winner of the randomized coin flip wins the whole bet amount and can withdraw their earnings at any time to their wallet. MetaMask is required to use.',
		tools: [
			'Solidity',
			'TypeScript',
			'React',
			'Hardhat',
			'Ethers.js',
			'ERC20',
			'Next.js',
			'Tailwind CSS',
			'Mocha',
			'Chai',
			'Waffle',
			'Ethereum',
			'MetaMask'
		],
		img: coinflip,
		imgAlt: 'CoinFlip Game',
		github: 'https://github.com/adriandelgg/CoinFlip.eth',
		demo: 'https://coinflip-eth.vercel.app/'
	},
	{
		name: 'DeFi Liquidation Calculator',
		description:
			"A financial calculator built for a client that extracts real time cryptocurrency prices using CoinGecko's API. The purpose of this calculator is to help with risk management when investing in certain crypto assets on the Ethereum blockchain network using protocols like Compound or Venus. It's a liquidation calculator to make sure the user isn't going to get liquidated when borrowing money while also supplying.",
		tools: ['JavaScript', 'API', 'CSS3', 'HTML5', 'Google Analytics'],
		img: xvsCalculator,
		imgAlt: 'DeFi Liquidation Calculator',
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
			'CSS',
			'React-Router',
			'Reselect',
			'Commerce.js'
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
		tools: ['React', 'TypeScript', 'Material UI', 'CSS', 'Google Analytics'],
		img: myPortfolio,
		imgAlt: 'My Portfolio Website',
		github: 'https://github.com/adriandelgg/MyPortfolio-Site',
		demo: 'https://adriandelgado.dev'
	},
	{
		name: 'Vanilla Calculator',
		description:
			"The very first project I ever created! It's a colorful calculator built & designed from scratch that computes basic arithmetic. ",
		tools: ['JavaScript', 'CSS', 'HTML'],
		img: calculator,
		imgAlt: 'Vanilla Calculator',
		github: 'https://github.com/adriandelgg/Calculator',
		demo: 'https://adriandelgg.github.io/Calculator/'
	},
	{
		name: 'React Trivia Game',
		description:
			"A fun trivia game created with React & Open Trivia's API. It gives you 10 random questions from the category of your choice.",
		tools: ['React.js', 'REST API', 'CSS', 'HTML'],
		img: reactQuiz,
		imgAlt: 'Trivia Game',
		github: 'https://github.com/adriandelgg/React-API-Quiz-App',
		demo: 'https://reactquizapi.netlify.app/'
	}
];
