import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import RestaurantImage1 from '../assets/restaurant1.jpg';
import RestaurantImage2 from '../assets/restaurant2.jpg';
import RestaurantImage3 from '../assets/restaurant3.jpg';
import RestaurantImage4 from '../assets/restaurant4.jpg';
import RestaurantMenu from '../assets/menu.pdf';
const Restaurant = () => {
	const isMobile = useMobile();
	const { t } = useTranslation();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container restaurant-container'>
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
							<img src={RestaurantImage1} alt='B&B w cenie pobytu' />
							<div className='slider-text'>
								<h2>{t('restaurant1')}</h2>
								<h2>{t('restaurant2')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RestaurantImage2}
								alt='Śniadania w formie stołu szweckiego'
							/>
							<div className='slider-text'>
								<h2>{t('restaurant3')}</h2>
								<h2>{t('restaurant4')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={RestaurantImage3} alt='Restauracja i drinkbar' />
							<div className='slider-text'>
								<h2>{t('restaurant5')}</h2>
								<h2>{t('restaurant6')}</h2>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img src={RestaurantImage4} alt='Ogródek letni' />
							<div className='slider-text'>
								<h2>{t('restaurant7')}</h2>
								<h2>{t('restaurant8')}</h2>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<p className='text'>
					<strong>{t('restaurant9')}</strong> {t('restaurant10')}
				</p>
				<p className='text'>
					{t('restaurant11')}
					10:30
				</p>
				<p className='text'>{t('restaurant12')}</p>
				<p className='text'>{t('restaurant13')}</p>
				<p className='text'>{t('restaurant14')}</p>
				<div className='button'>
					<a href={RestaurantMenu} download='Menu Hotel Nadmorski Łeba'>
						MENU
					</a>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Restaurant;
