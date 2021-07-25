import { useState, useEffect } from 'react';

const useMobile = () => {
	function debounce(fn, ms) {
		let timer;
		return _ => {
			clearTimeout(timer);
			timer = setTimeout(_ => {
				timer = null;
				fn.apply(this, arguments);
			}, ms);
		};
	}
	// handling resize to put good components on mobile or desktop devices

	const [width, setWidth] = useState(window.innerWidth);
	const [isMobile, setIsMobile] = useState(null);
	useEffect(() => {
		const debouncedHandleResize = debounce(function handleResize() {
			setWidth(window.innerWidth);
		}, 50);
		window.addEventListener('resize', debouncedHandleResize);
		if (width >= 1000) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
		return () => window.removeEventListener('resize', debouncedHandleResize);
	}, [width]);
	return isMobile;
};
export default useMobile;
