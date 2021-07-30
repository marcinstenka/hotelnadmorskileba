import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import ForKidsImage1 from '../assets/forKids1.jpg';
import ForKidsImage2 from '../assets/forKids2.jpg';
import ForKidsImage3 from '../assets/forKids3.jpg';
const ForKids = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container ">
        <div className="slider">
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 3500 }}
          >
            <SwiperSlide>
              <img src={ForKidsImage1} alt="Hotel przyjazny dzieciom" />
              <div className="slider-text">
                <h2>Hotel</h2>
                <h2>Przyjazny dziecom</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ForKidsImage2} alt="Przeróżne atrakcje" />
              <div className="slider-text">
                <h2>Przeróżne</h2>
                <h2>Atrakcje</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ForKidsImage3} alt="Sala zabaw dla najmłodszych" />
              <div className="slider-text">
                <h2>Sala zabaw</h2>
                <h2>dla najmłodszych</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">
          <strong>Hotel Nadmorski</strong> to miejsce przyjazne rodzinom z
          dziećmi. Specjalnie z myślą o naszych milusińskich na terenie hotelu
          funkcjonuje „Kids Club” – pokój zabaw dla dzieci. Na jego terenie
          dostępny jest między innymi kącik dla miłośników kolorowania,
          telewizor z dziecięcymi kanałami w języku polskim, małpi gaj z
          przeszkodami i basenem z kolorowymi piłeczkami.
        </p>
        <p className="text">
          Dodatkowo, na życzenie rodziców bezpłatnie udostępniamy: wanienki,
          łóżeczka turystyczne, krzesełka do karmienia.
        </p>
        <p className="text">
          W ofercie restauracji znajduje się specjalne menu dla dzieci.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ForKids;
