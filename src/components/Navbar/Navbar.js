import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navbar = ({ isMobile }) => {
	// scroll restoration
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default Navbar;
