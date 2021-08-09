import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import SpaImage1 from '../assets/spa1.jpg';
import SpaImage2 from '../assets/spa2.jpg';
import SpaImage3 from '../assets/spa3.jpg';
import SpaImage4 from '../assets/spa4.jpg';
import SpaImage5 from '../assets/spa5.jpg';
import SpaImage6 from '../assets/spa6.jpg';
import SpaImage7 from '../assets/spa7.jpg';
const Spa = () => {
	const isMobile = useMobile();
	const { t } = useTranslation();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container spa-container'>
				<div className='slider'>
					<Swiper
						effect='fade'
						fadeEffect={{ crossFade: true }}
						spaceBetween={20}
						slidesPerView={1}
						navigation
						loop
						autoplay={{ delay: 2500 }}
					>
						<SwiperSlide>
							<img src={SpaImage1} alt='Pokój relaksu' />
							<div className='slider-text'>
								<h2>{t('spa1')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage2} alt='Pokój relaksu' />
							<div className='slider-text'>
								<h2>{t('spa1')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage3} alt='Sauna sucha' />
							<div className='slider-text'>
								<h2>{t('spa2')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage4} alt='Sauna sucha' />
							<div className='slider-text'>
								<h2>{t('spa2')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage5} alt='Sauna sucha' />
							<div className='slider-text'>
								<h2>{t('spa2')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage6} alt='Sauna sucha' />
							<div className='slider-text'>
								<h2>{t('spa2')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={SpaImage7} alt='Gabinet masażu' />
							<div className='slider-text'>
								<h2>{t('spa3')}</h2>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<h1>SPA – Hotel Nadmorski Łeba</h1>
				<p className='text'>{t('spa4')}</p>
				<h3 className='spa-header'>{t('spa5')}</h3>
				<p className='text'>{t('spa6')}</p>
				<h3 className='spa-header'>{t('spa7')}</h3>
				<p className='text'>{t('spa8')}</p>
				<h3 className='spa-header'>{t('spa9')}</h3>
				<p className='text'>{t('spa10')}</p>
				<h3 className='spa-header'>{t('spa11')}</h3>
				<p className='text'>{t('spa12')}</p>
			</div>
			<Footer />
		</>
	);
};

export default Spa;
