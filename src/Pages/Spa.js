import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import SpaImage1 from '../assets/spa1.jpg';
import SpaImage2 from '../assets/spa2.jpg';
import SpaImage3 from '../assets/spa3.jpg';
import SpaImage4 from '../assets/spa4.jpg';
import SpaImage5 from '../assets/spa5.jpg';
import SpaImage6 from '../assets/spa6.jpg';
import SpaImage7 from '../assets/spa7.jpg';
const Spa = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container spa-container">
        <div className="slider">
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 2500 }}
          >
            <SwiperSlide>
              <img src={SpaImage1} alt="Pokój relaksu" />
              <div className="slider-text">
                <h2>Pokój relaksu</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage2} alt="Pokój relaksu" />
              <div className="slider-text">
                <h2>Pokój relaksu</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage3} alt="Sauna sucha" />
              <div className="slider-text">
                <h2>Sauna sucha</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage4} alt="Sauna sucha" />
              <div className="slider-text">
                <h2>Sauna sucha</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage5} alt="Sauna sucha" />
              <div className="slider-text">
                <h2>Sauna sucha</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage6} alt="Sauna sucha" />
              <div className="slider-text">
                <h2>Sauna sucha</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={SpaImage7} alt="Gabinet masażu" />
              <div className="slider-text">
                <h2>Gabinet masażu</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1>SPA – Hotel Nadmorski Łeba</h1>
        <p className="text">
          Z myślą o zapewnieniu jeszcze lepszych warunków do wypoczynku Hotel
          Nadmorski w Łebie rozszerzył swoją ofertę o usługi SPA.
          Przygotowaliśmy dla Państwa:
        </p>
        <h3 className="spa-header">GABINET MASAŻU</h3>
        <p className="text">
          Aby umówić się na masaż prosimy o kontakt z recepcją hotelu.
        </p>
        <h3 className="spa-header">POKÓJ RELAKSU</h3>
        <p className="text">
          To wyjątkowe miejsce do odpoczynku. Wygodne leżaki, stała temperatura
          i wilgotność, a przede wszystkim powietrze wypełnione biopierwiastkami
          wydatnie wpłyną na naszą formę fizyczną i psychiczną. Czyste
          zjonizowane powietrze wzmacnia system immunologiczny, poprawia ogólną
          kondycję, a w niektórych przypadkach wspomaga leczenie. Wpływa
          korzystnie na schorzenia górnych dróg oddechowych.
        </p>
        <h3>SAUNA SUCHA (FIŃSKA)</h3>
        <p className="text">
          Seans w saunie suchej to świetny sposób na odprężenie i relaks. Wysoka
          temperatura i niska wilgotność działają oczyszczająco na organizm. Już
          kilkunastominutowy pobyt w saunie łagodzi napięcia mięśniowe i
          poprawia metabolizm. Z sauny najlepiej korzystać wieczorem. Optymalny
          czas jednorazowego pobytu od 8 do 15 minut. Po opuszczeniu sauny
          należy pamiętać o uzupełnieniu płynów.
        </p>
        <h3>SAUNA INFRARED</h3>
        <p className="text">
          To doskonała opcja dla osób, które z wielu przyczyn nie mogą korzystać
          z sauny suchej lub mokrej. Sauna ta oddziałuje ciepłem za pomocą
          promieni podczerwonych, oddziałując bezpośrednio na nasze ciało. Aż
          80% energii cieplnej, wnika w głąb naszego organizmu, docierająca
          energia rozgrzewa podskórną tkankę tłuszczową, mięśnie oraz narządy
          wewnętrzne. Wewnątrz sauny panuje niższa temperatura niż w saunie
          suchej, przez co seans może trwać dłużej. Regularne korzystanie z
          sauny infrared poprawia samopoczucie, sprzyja redukcji tkanki
          tłuszczowej oraz poprawia metabolizm.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Spa;
