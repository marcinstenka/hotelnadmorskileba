import { useEffect, useState } from 'react';

function MobileMenuScript() {
	const [lorem, setLorem] = useState('');
	useEffect(() => {
		const nav = document.querySelector('.navbar-mobile');
		const menu = document.querySelector('.mobile-menu');
		const hamburger = document.querySelector('.mobile__hamburger');
		const input = document.querySelector('input');
		const handleToggle = () => {
			setLorem(''); // it's making that this component renders only one after resizing window and then click on hamburger
			// this component is rendering multiple times when resizing window
			hamburger.classList.toggle('active');
			menu.classList.toggle('active');
			nav.classList.toggle('active');
		};

		input.addEventListener('click', handleToggle);
	}, [lorem]);
	return null;
}
export default MobileMenuScript;
