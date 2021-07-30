import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import RestaurantImage1 from '../assets/restaurant1.jpg';
import RestaurantImage2 from '../assets/restaurant2.jpg';
import RestaurantImage3 from '../assets/restaurant3.jpg';
import RestaurantImage4 from '../assets/restaurant4.jpg';
import RestaurantMenu from '../assets/menu.pdf';
const Restaurant = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container restaurant-container">
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
              <img src={RestaurantImage1} alt="B&B w cenie pobytu" />
              <div className="slider-text">
                <h2>B&B</h2>
                <h2>W cenie pobytu</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RestaurantImage2}
                alt="Śniadania w formie stołu szweckiego"
              />
              <div className="slider-text">
                <h2>Śniadania w formie</h2>
                <h2>Stołu szweckiego</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={RestaurantImage3} alt="Restauracja i drinkbar" />
              <div className="slider-text">
                <h2>Zapraszamy do</h2>
                <h2>Restauracji i drinkbaru</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={RestaurantImage4} alt="Ogródek letni" />
              <div className="slider-text">
                <h2>Odwiedź nasz</h2>
                <h2>Ogródek letni</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">
          <strong>Restauracja hotelowa</strong> prowadzi obsługę gości
          hotelowych jak i osób niezameldowanych w hotelu. Nasz szef kuchni
          realizuje zamówienia w oparciu o dostępną w restauracji kartę dań, na
          którą składa się oferta kuchni polskiej rozszerzona o ofertę bogatą w
          potrawy z ryb morza bałtyckiego. Dodatkowo dostępna jest karta win i
          lekkich alkoholi.
        </p>
        <p className="text">
          W okresie letnim, obsługa kelnerska realizowana jest również przed
          restauracją w nasłonecznionym ogródku letnim. Śniadania w formie
          szwedzkiego bufetu serwowane są codziennie w godzinach od 8:00 do
          10:30
        </p>
        <p className="text">
          Restauracja w okresie letnim czynna jest od godziny 12:00 do 20:00.
          Oferta drink baru dostępna jest do godziny 22:00.
        </p>
        <p className="text">
          Bieżąca oferta restauracji dostępna jest w okresie od 20 czerwca do 31
          sierpnia.
        </p>
        <p className="text">Zapraszamy do zapoznania się z naszym menu.</p>
        <div className="button">
          <a href={RestaurantMenu} download="Menu Hotel Nadmorski Łeba">
            MENU
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
