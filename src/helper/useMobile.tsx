import { useState, useEffect } from 'react';

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(true);

	// Checks if screen size is mobile on load.
	useEffect(() => {
		window.innerWidth <= 709 ? setIsMobile(true) : setIsMobile(false);
	}, []);

	// Checks for mobile size.
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 709) setIsMobile(true);
			else setIsMobile(false);
		});
		return () => {
			window.removeEventListener('resize', () => {});
		};
	});

	return { isMobile };
};

export default useMobile;
