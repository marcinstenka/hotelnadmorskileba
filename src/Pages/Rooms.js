import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import RoomsImage1 from '../assets/rooms1.webp';
import RoomsImage2 from '../assets/rooms2.webp';
import RoomsImage3 from '../assets/rooms3.webp';
import RoomsImage4 from '../assets/rooms4.webp';
import RoomsImage5 from '../assets/rooms5.webp';
import RoomsImage6 from '../assets/rooms6.webp';
import RoomsImage7 from '../assets/rooms7.webp';
import { useTranslation } from 'react-i18next';

const Rooms = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();

  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        <div className="rooms-slider">
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
                src={RoomsImage1}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage2}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage3}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage4}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage5}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage6}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RoomsImage7}
                alt="Pokoje w naszym hotelu są przestronne"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text">
          <strong>{t('rooms1')}</strong>
          {t('rooms2')}
        </p>
        <p className="text">{t('rooms3')}</p>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
