import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
import { Swiper, SwiperSlide } from 'swiper/react';

import RoomsImage1 from '../assets/rooms1.jpg';
import RoomsImage2 from '../assets/rooms2.jpg';
import RoomsImage3 from '../assets/rooms3.jpg';
import RoomsImage4 from '../assets/rooms4.jpg';
import RoomsImage5 from '../assets/rooms5.jpg';
import RoomsImage6 from '../assets/rooms6.jpg';
import RoomsImage7 from '../assets/rooms7.jpg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Rooms = () => {
	const isMobile = useMobile();
	const { t } = useTranslation();

	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container'>
				<div className='rooms-slider'>
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
							<img
								src={RoomsImage1}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage2}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage3}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage4}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage5}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage6}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={RoomsImage7}
								alt='Pokoje w naszym hotelu są przestronne'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<button onClick={() => i18next.changeLanguage('pl')}>pl</button>
				<button onClick={() => i18next.changeLanguage('en')}>en</button>
				<button onClick={() => i18next.changeLanguage('de')}>de</button>
				<p className='text'>
					<strong>
						Pokoje w Hotelu Nadmorskim w Łebie są przestronne i wygodne
					</strong>
					, każdy wyposażony jest we własną łazienkę z kabiną prysznicową.
					Pokoje jedno, dwu i trzyosobowe posiadają balkony. W liście
					wyposażenia znajdują się między innymi sejf, czajnik, ręczniki oraz
					parawan plażowy. Dodatkowo, każdą z łazienek wyposażyliśmy w suszarkę
					do włosów. Na terenie hotelu realizujemy bezpłatny dostęp do
					internetu.
				</p>
				<p className='text'>
					Dodatkowo, w ofercie hotelu znajdują się wygodne apartamenty. W skład
					każdego z nich wchodzą sypialnia, pokoju dzienny oraz łazienka.
					Dodatkowo, w każdym pokoju zainstalowaliśmy oddzielny system
					klimatyzacji. Nasze apartamenty określane są często jako „doskonała
					oferta wakacyjna dla rodzin z dziećmi”.
				</p>
			</div>
			<Footer />
		</>
	);
};

export default Rooms;
