import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import useMobile from '../CustomHooks/useMobile';

import HotelImage1 from '../assets/hotel1.jpg';
import HotelImage2 from '../assets/hotel2.jpg';
import HotelImage3 from '../assets/hotel3.jpg';
import HotelImage4 from '../assets/hotel4.jpg';
import HotelImage5 from '../assets/hotel5.jpg';
import HotelImage6 from '../assets/hotel6.jpg';
import HotelImage7 from '../assets/hotel7.jpg';

const Hotel = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        <div className="hotel-slider">
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
              <img src={HotelImage1} alt="Hotel Nadmorski Łeba" />
              <div className="slider-text">
                <h2>Witaj</h2>
                <h2>W Hotelu Nadmorskim</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage2} alt="Pokój Hotelu Nadmorski Łeba" />
              <div className="slider-text">
                <h2>Mamy dla Ciebie</h2>
                <h2>Przestronne pokoje</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage3}
                alt="Restauracja Hotelu Nadmorskiego Łeba"
              />
              <div className="slider-text">
                <h2>Restauracja</h2>
                <h2>Czynna od 8:00 do 20:00</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage4}
                alt="Bardzo bliska odległość do plaży z Hotelu"
              />
              <div className="slider-text">
                <h2>Tworzymy</h2>
                <h2>"Pakiety Specjalne"</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage5}
                alt="Hotel Nadmorski jest przystosowany do potrzeb dzieci"
              />
              <div className="slider-text">
                <h2>Organizujemy</h2>
                <h2>"Animacje dla dzieci"</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage6} alt="Hotel Nadmorski Łeba z lotu ptaka" />
              <div className="slider-text">
                <h2>Zapytaj o</h2>
                <h2>Ofertę weselną</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage7} alt="Recepcja Grand Łeba" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">
          Hotel Nadmorski w Łebie to obiekt położony niespełna 150 metrów od
          pięknej, szerokiej bałtyckiej plaży. W ofercie znajda państwo
          apartamenty, pokoje jedno-, dwu- oraz trzy osobowe.
        </p>
        <p className="text">
          Dysponujemy własną restauracją oraz zapleczem parkingowym, z myślą o
          najmłodszych gościach Naszego hotelu, przygotowaliśmy szereg
          udogodnień – kids club, dodatkowe łóżeczka dla dzieci, krzesełka do
          karmienia czy specjalnie przygotowywane menu.
        </p>
        <p className="text">
          Hotel Nadmorski – obiekt nowoczesny, oferujący wysoki standard usług w
          przystępnej cenie jest doskonałą propozycją na weekendowy wyjazd,
          rodzinne wczasy konferencje czy kameralne przyjęcie weselne. Nasz
          doświadczony zespół dokłada wszelkich starań, aby czas spędzony w
          Naszym hotelu był czasem niezapomnianym.
        </p>
        <p className="text">
          Zapraszamy, jesteśmy pewni iż pobyt w Naszym hotelu przyczyni się do
          przeżycia niezapomnianych chwil nad naszym pięknym polskim morzem.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
