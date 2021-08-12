import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMobile from '../CustomHooks/useMobile';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import HotelImage1 from '../assets/hotel1.jpg';
import HotelImage2 from '../assets/hotel2.jpg';
import HotelImage3 from '../assets/hotel3.jpg';
import HotelImage4 from '../assets/hotel4.jpg';
import HotelImage5 from '../assets/hotel5.jpg';
import HotelImage6 from '../assets/hotel6.jpg';
import HotelImage7 from '../assets/hotel7.jpg';
import { useTranslation } from 'react-i18next';

const Hotel = () => {
  const { t } = useTranslation();
  const isMobile = useMobile();
  const [cookies, setCookie] = useCookies(['CookiesHotelNadmorskiLeba']);
  const handleCookie = () => {
    setCookie('CookiesHotelNadmorskiLeba', 'CookiesAccepted', { path: '/' });
  };

  useEffect(() => {
    if (!cookies.CookiesHotelNadmorskiLeba) {
      const cookiesBtn = document.querySelector('.cookies button');
      cookiesBtn.addEventListener('click', () => {
        cookiesBtn.parentElement.style.display = 'none';
      });
    }
  }, [cookies.CookiesHotelNadmorskiLeba]);

  return (
    <>
      <Navbar isMobile={isMobile} />
      {!cookies.CookiesHotelNadmorskiLeba && (
        <div className="cookies">
          <p>{t('cookies')}</p> <button onClick={handleCookie}>X</button>
        </div>
      )}
      <div className="container">
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
              <img src={HotelImage1} alt="Hotel Nadmorski Łeba" />
              <div className="slider-text">
                <h2>{t('hero1')}</h2>
                <h2>{t('hero2')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage2} alt="Pokój Hotelu Nadmorski Łeba" />
              <div className="slider-text">
                <h2>{t('hero3')}</h2>
                <h2>{t('hero4')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage3}
                alt="Restauracja Hotelu Nadmorskiego Łeba"
              />
              <div className="slider-text">
                <h2>{t('hero5')}</h2>
                <h2>{t('hero6')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage4}
                alt="Bardzo bliska odległość do plaży z Hotelu"
              />
              <div className="slider-text">
                <h2>{t('hero7')}</h2>
                <h2>{t('hero8')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HotelImage5}
                alt="Hotel Nadmorski jest przystosowany do potrzeb dzieci"
              />
              <div className="slider-text">
                <h2>{t('hero9')}</h2>
                <h2>{t('hero10')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage6} alt="Hotel Nadmorski Łeba z lotu ptaka" />
              <div className="slider-text">
                <h2>{t('hero11')}</h2>
                <h2>{t('hero12')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HotelImage7} alt="Recepcja Grand Łeba" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">{t('hero13')}</p>
        <p className="text">{t('hero14')}</p>
        <p className="text">{t('hero15')}</p>
        <p className="text">{t('hero16')}</p>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
