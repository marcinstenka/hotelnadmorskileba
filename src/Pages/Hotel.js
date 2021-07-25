import Navbar from './../components/Navbar/Navbar';
import useMobile from '../CustomHooks/useMobile';
const Hotel = () => {
	const isMobile = useMobile();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container'>
				<h1>Hotel Nadmorski Łeba</h1>
			</div>
		</>
	);
};

export default Hotel;
