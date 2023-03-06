<<<<<<< HEAD
import MenuMobile from './MenuMobile';
import IsMobile from '../../helper/useMobile';
import NavItems from './NavItems';

const Navbar = () => {
	const { isMobile } = IsMobile();

	return <nav>{!isMobile ? <NavItems /> : <MenuMobile />}</nav>;
};

export default Navbar;
=======
import { MenuMobile } from './MenuMobile';
import { useMobile } from '../../helper/useMobile';
import { NavItems } from './NavItems';

export const Navbar = () => {
	const { isMobile } = useMobile();

	return <nav>{!isMobile ? <NavItems /> : <MenuMobile />}</nav>;
};
>>>>>>> master
