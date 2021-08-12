import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import ForKidsImage1 from '../assets/forKids1.webp';
import ForKidsImage2 from '../assets/forKids2.webp';
import ForKidsImage3 from '../assets/forKids3.webp';
const ForKids = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
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
                <h2>{t('forKids1')}</h2>
                <h2>{t('forKids2')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ForKidsImage2} alt="Przeróżne atrakcje" />
              <div className="slider-text">
                <h2>{t('forKids3')}</h2>
                <h2>{t('forKids4')}</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ForKidsImage3} alt="Sala zabaw dla najmłodszych" />
              <div className="slider-text">
                <h2>{t('forKids5')}</h2>
                <h2>{t('forKids6')}</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">
          <strong>{t('forKids7')}</strong>
          {t('forKids8')}
        </p>
        <p className="text">{t('forKids9')}</p>
        <p className="text">{t('forKids10')}</p>
      </div>
      <Footer />
    </>
  );
};

export default ForKids;
