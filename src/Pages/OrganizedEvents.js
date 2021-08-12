import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OrganizedEventsImage1 from '../assets/organizedEvents1.jpg';
import OrganizedEventsImage2 from '../assets/organizedEvents2.jpg';
import OrganizedEventsImage3 from '../assets/organizedEvents3.jpg';
const OrganizedEvents = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();

  //logic for collapsible
  useEffect(() => {
    const collapsible = document.querySelectorAll('.collapsible');
    collapsible.forEach(coll => {
      coll.addEventListener('click', () => {
        coll.classList.toggle('active');
        const content = coll.nextElementSibling;
        content.style.maxHeight
          ? (content.style.maxHeight = null)
          : (content.style.maxHeight = content.scrollHeight + 'px');
      });
    });
  }, []);
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
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
              <img
                src={OrganizedEventsImage1}
                alt="Obsługa konferencji do 80 osób"
              />
              <div className="slider-text">
                <h2>{t('events1')}</h2>
                <h2>{t('events2')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OrganizedEventsImage2}
                alt="Obsługa konferencji do 80 osób"
              />
              <div className="slider-text">
                <h2>{t('events3')}</h2>
                <h2>{t('events4')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OrganizedEventsImage3}
                alt="Planujesz weselę? Sprawdź naszą ofertę"
              />
              <div className="slider-text">
                <h2>{t('events5')}</h2>
                <h2>{t('events6')}</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="events-section">
          <h2>{t('events7')}</h2>
          <p className="text">
            {t('events8')}
            <br />
            {t('events9')}
            <br />
            {t('events10')}
          </p>
          <p className="text">{t('events11')}</p>
          <p className="text">{t('events12')}</p>
          <p className="text">{t('events13')}</p>
          <p className="text">
            {t('events14')}
            <br />
            <a href="tel:+48 48 791 247 201">tel. + 48 791 247 201</a>
            <br />
            <a href="mailto:recepcja@hotelnadmorskileba.pl">
              e-mail: recepcja@hotelnadmorskileba.pl
            </a>
          </p>
        </div>
        <div className="events-section">
          <button type="button" className="collapsible">
            {t('events15')}
          </button>
          <div className="event-info">
            <p className="text">{t('events16')}</p>
            <p className="text">{t('events17')}</p>
            <p className="text">{t('events18')}</p>
            <p className="text">{t('events19')}</p>
            <p className="text">{t('events20')}</p>
            <p className="text">{t('events21')}</p>
            <p className="text">{t('events22')}</p>
          </div>
          <button type="button" className="collapsible">
            {t('events23')}
          </button>
          <div className="event-info">
            <p className="text">{t('events24')}</p>
            <p className="text">{t('events25')}</p>
          </div>
          <button type="button" className="collapsible">
            {t('events26')}
          </button>
          <div className="event-info">
            <p className="text">{t('events27')}</p>
            <p className="text">{t('events28')}</p>
            <p className="text">
              {t('events29')}
              <br />
              {t('events30')}
              <br />
              {t('events31')}
              <br />
              {t('events32')}
              <br />
              {t('events33')}
            </p>
            <p className="text">
              {t('events34')}
              <br />
              {t('events35')}
              <br />
              {t('events36')}
              <br />
              {t('events37')}
              <br />
            </p>
            <p className="text">
              {t('events38')}
              <br />
              {t('events39')}
              <br />
              {t('events40')}
            </p>
            <p className="text">
              {t('events41')}
              <br />
              {t('events42')}
            </p>
            <p className="text">
              {t('events43')}
              <br />
              <a href="tel:+48 791 247 201">tel. +48 791 247 201</a>
            </p>
            <div className="text">{t('events44')}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizedEvents;
