import { MenuMobile } from './MenuMobile';
import { useMobile } from '../../helper/useMobile';
import { NavItems } from './NavItems';

export const Navbar = () => {
	const { isMobile } = useMobile();

	return <nav>{isMobile ? <MenuMobile /> : <NavItems />}</nav>;
};
