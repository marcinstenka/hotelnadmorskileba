import { useEffect } from 'react';
import useMobile from './CustomHooks/useMobile';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hotel from './Pages/Hotel';

// swiper.js initialization
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
  }, []);
  return (
    <BrowserRouter basename="/hotelnadmorskileba">
      <Switch>
        <Route exact path="/" component={Hotel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
