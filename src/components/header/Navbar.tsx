import { MenuMobile } from './MenuMobile';
import { useMobile } from '../../helpers/useMobile';
import { NavItems } from './NavItems';

export const Navbar = () => {
	const isMobile = useMobile();
	return <nav>{!isMobile ? <NavItems /> : <MenuMobile />}</nav>;
};

