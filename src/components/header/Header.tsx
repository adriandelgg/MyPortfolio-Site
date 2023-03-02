import Navbar from './Navbar';
import { RiCodeSSlashFill } from 'react-icons/ri';

const Header = () => (
	<header>
		<RiCodeSSlashFill className="logo" size="2em" color="#f7bb50" />
		<Navbar />
	</header>
);

export default Header;
