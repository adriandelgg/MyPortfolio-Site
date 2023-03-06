import ChatIcon from '@mui/icons-material/Chat';
import { animated, useSpring } from '@react-spring/web';
import { Button } from '@mui/material';

export const ButtonMail = () => {
	const styles = useSpring({
		from: { y: 30, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 2400
	});

	const AnimatedButton = animated(Button);
	return (
		<AnimatedButton
			sx={{
				backgroundColor: '#181c3a',
				borderColor: '#f7bb50',
				color: '#f7bb50',
				marginBottom: '2.5em'
			}}
			style={styles}
			className="resume-btn"
			href="mailto:adriandelgado.tech@gmail.com"
			variant="outlined"
			endIcon={<ChatIcon />}
		>
			Let&apos;s chat!
		</AnimatedButton>
	);
};
