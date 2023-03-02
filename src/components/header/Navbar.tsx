import MenuMobile from './MenuMobile';
import IsMobile from '../../helper/useMobile';
import NavItems from './NavItems';

const Navbar = () => {
	const { isMobile } = IsMobile();

	return <nav>{/* {!isMobile ? <NavItems /> : <MenuMobile />} */}</nav>;
};

export default Navbar;
