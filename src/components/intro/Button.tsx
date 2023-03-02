import ChatIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
// import { Animated } from 'react-animated-css';

// const useStyles = makeStyles({
// 	root: {
// 		backgroundColor: '#181c3a',
// 		borderColor: '#f7bb50',
// 		color: '#f7bb50',
// 		marginBottom: '2.5em'
// 	}
// });

const ButtonMail = () => {
	// const styles = useStyles();
	return (
		// <Animated
		// 	animationInDelay={3200}
		// 	animationIn="fadeInUp"
		// 	animationOut="fadeOut"
		// 	animationInDuration={1000}
		// 	animationOutDuration={1000}
		// 	isVisible={true}
		// >
		<Button
			// classes={{ root: styles.root }}
			className="resume-btn"
			href="mailto:adriandelgado.tech@gmail.com"
			variant="outlined"
			endIcon={<ChatIcon />}
		>
			Let&apos;s chat!
		</Button>
		// </Animated>
	);
};

export default ButtonMail;
