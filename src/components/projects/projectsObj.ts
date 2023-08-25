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
  //  img: '',
  // 	imgAlt: 'NFT Decentralized Exchange',
  // 	github: 'https://github.com/codeonblocks/NFT-Exchange'
  //  demo: ''
  // },
  {
    name: "NFT Staking Contracts w/ REST API",
    description:
      "This NFT staking and trading platform enables users to stake their NFTs and earn rewards in ERC20 tokens. The platform supports NFTs only from a specific contract I created, and users can trade their staked NFTs with other users in the marketplace using ERC20 tokens. This project includes a backend API that captures events from the smart contracts and saves data to MongoDB, which can be retrieved and used in a frontend application in order to save gas. The project has several deliverables, including the ability to set the fee percentage, change the fee receiver address, whitelist NFT addresses, show NFTs for sale, allow sellers to cancel listings, transfer NFTs to buyers, and show recent NFTs sold. Overall, this project provides a secure and efficient platform for staking, trading, and earning rewards using NFTs and ERC20 tokens.",
    tools: [
      "Solidity",
      "Ethers.js",
      "Hardhat",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose.js",
      "ERC1155",
      "ERC20",
      "Ethereum"
    ],
    img: "/nft-staking-code.png",
    imgAlt: "CoinFlip Game",
    github: "https://github.com/codeonblocks/nft-staking",
    demo: "https://github.com/codeonblocks/nft-staking"
  },
  {
    name: "Ethereum CoinFlip Game",
    description:
      "A decentralized game on the Ethereum blockchain that allows two players to bet an ERC20 token I created. The game is a simple coin flip, with the winner taking the entire bet amount. The game is provably fair, with the outcome determined by the smart contract. Players can withdraw their winnings at any time to their wallet, and MetaMask is required to participate.",
    tools: [
      "Solidity",
      "TypeScript",
      "React",
      "Hardhat",
      "Ethers.js",
      "ERC20",
      "Next.js",
      "Tailwind CSS",
      "Mocha",
      "Chai",
      "Waffle",
      "Ethereum",
      "MetaMask"
    ],
    img: "/coinflip.webp",
    imgAlt: "CoinFlip Game",
    github: "https://github.com/codeonblocks/CoinFlip.eth",
    demo: "https://coinflip-eth.vercel.app/"
  },
  {
    name: "DeFi Liquidation Calculator",
    description:
      "This financial calculator is designed to help investors manage their risk when investing in cryptocurrencies on the Ethereum blockchain. The calculator extracts real-time cryptocurrency prices using CoinGecko's API and is specifically tailored to support the protocol Venus (similar to Compound), where users can borrow or supply cryptocurrencies. The calculator provides crucial information to help users avoid liquidation risks, allowing them to manage their investments with confidence. The project leverages cutting-edge technology to provide reliable and up-to-date information and ensures the security and privacy of user data. Overall, this project provides an essential tool for investors looking to maximize their returns while minimizing their risks.",
    tools: ["JavaScript", "API", "CSS3", "HTML5", "Google Analytics"],
    img: "/xvscalculator.webp",
    imgAlt: "DeFi Liquidation Calculator",
    github: "https://github.com/codeonblocks/DeFi-Calculator",
    demo: "https://deficalculator.netlify.app/"
  },
  {
    name: "Luxury Only Cattery",
    description:
      "I built this site from scratch for a client to showcase their cat breeding business and attract new customers. It features a clean, modern design and is fully responsive on all devices. Using my front-end development skills, I created an engaging and user-friendly experience for visitors to learn about the cattery's services and see their adorable cats. In exchange for my work, the client gave me a kitten, making this project a truly special collaboration.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    img: "/luxury-only.png",
    imgAlt: "One of the Kings of the Cattery",
    github: "https://github.com/codeonblocks/british-shorthair",
    demo: "https://www.luxuryonlykittens.com"
  },
  {
    name: "eCommerce Store",
    description:
      "I built and designed this eCommerce website completely from scratch using Commerce.js's REST API to handle the population of the products. To store the state of the shopping cart, saved items, and render the proper UI components based on the user's actions, I utilized Redux. Through this project, I was able to showcase my expertise in designing, building, and deploying robust eCommerce solutions that meet the needs of modern online businesses.",
    tools: [
      "React",
      "Redux",
      "JavaScript",
      "Material UI",
      "API",
      "CSS",
      "React-Router",
      "Reselect",
      "Commerce.js"
    ],
    img: "/ecommerce.webp",
    imgAlt: "eCommerce Website",
    github: "https://github.com/codeonblocks/eCommerce-Store",
    demo: "https://techecommerce.netlify.app/"
  },
  {
    name: "My Portfolio Site",
    description:
      "My portfolio website is a testament to my front-end development skills. I designed and built it from scratch without using any templates, with the goal of creating an elegant and minimalist user experience. The website showcases my work and expertise in web development, featuring a clean and intuitive design that draws attention to my projects and highlights my skill set. I utilized Next.js to build the website, allowing for a fast and responsive browsing experience for visitors. Through this project, I demonstrated my ability to design and develop high-quality websites that not only look great but also provide a seamless user experience.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "CSS",
      "React-Spring",
      "Google Analytics"
    ],
    img: "/myportfolio.webp",
    imgAlt: "My Portfolio Website",
    github: "https://github.com/codeonblocks/MyPortfolio-Site",
    demo: "https://adriandelgado.dev"
  },
  {
    name: "Vanilla Calculator",
    description:
      "It's a colorful calculator built & designed from scratch that computes basic arithmetic. ",
    tools: ["JavaScript", "CSS", "HTML"],
    img: "/Calculator.webp",
    imgAlt: "Vanilla Calculator",
    github: "https://github.com/codeonblocks/Calculator",
    demo: "https://codeonblocks.github.io/Calculator/"
  }
];
