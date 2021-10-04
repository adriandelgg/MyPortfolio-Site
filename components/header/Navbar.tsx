import useMobileCheck from '@components/helper/useMobileCheck';
import MenuMobile from './MenuMobile';
import NavItems from './NavItems';

const Navbar = () => {
	const { isMobile } = useMobileCheck();

	return <nav>{!isMobile ? <NavItems /> : <MenuMobile />}</nav>;
};

export default Navbar;
