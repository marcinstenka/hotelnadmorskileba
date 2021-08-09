import { useEffect } from 'react';
import useMobile from './CustomHooks/useMobile';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hotel from './Pages/Hotel';
import Rooms from './Pages/Rooms';
import Restaurant from './Pages/Restaurant';
import ForKids from './Pages/ForKids';
import Spa from './Pages/Spa';
import PriceList from './Pages/PriceList';
import Contact from './Pages/Contact';
import OrganizedEvents from './Pages/OrganizedEvents';
import TermsOfReservation from './Pages/TermsOfReservation';
import SafeHotel from './Pages/SafeHotel';
import Page404 from './Pages/Page404';

import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';

import Aos from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([Navigation, Autoplay, EffectFade]);

function App() {
	const isMobile = useMobile();
	useEffect(() => {
		if (isMobile) {
			Aos.init();
		} else {
			Aos.init({ offset: 250 });
		}
	}, [isMobile]);
	return (
		<BrowserRouter basename='/hotelnadmorskileba'>
			<Switch>
				<Route exact path='/' component={Hotel} />
				<Route exact path='/pokoje' component={Rooms} />
				<Route exact path='/restauracja' component={Restaurant} />
				<Route exact path='/dla-dzieci' component={ForKids} />
				<Route exact path='/spa' component={Spa} />
				<Route exact path='/cennik' component={PriceList} />
				<Route exact path='/kontakt' component={Contact} />
				<Route
					exact
					path='/imprezy-zorganizowane'
					component={OrganizedEvents}
				/>
				<Route
					exact
					path='/warunki-rezerwacji'
					component={TermsOfReservation}
				/>
				<Route exact path='/bezpieczny-hotel' component={SafeHotel} />
				<Route component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
