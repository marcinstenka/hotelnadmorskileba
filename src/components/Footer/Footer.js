import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faGooglePlusSquare,
	faTripadvisor,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer>
			<div className='footer-links'>
				<div className='footer-link'>
					<h1>{t('footer1')}</h1>
					<div className='footer-line'></div>
					<div className='social-icons'>
						<div className='social-icon'>
							<a href='https://www.facebook.com/hotelnadmorskileba/?_rdc=1&_rdr'>
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
						</div>
						<div className='social-icon'>
							<a href='https://www.google.com/search?client=firefox-b-ab&q=Hotel+Nadmorski+%C5%81eba&stick=H4sIAAAAAAAAAONgecSYyy3w8sc9YamUSWtOXmOM4-IKzsgvd80rySypFArgYoOyVLgEpXj10_UNDdNMyssysgwMNRik-LlQhaQUlLh4d7UuURC1cKnk0hLi1GQT17Ko-Ocm-PSteeVRu8D_PABMZmNRcgAAAA&sa=X&ved=0ahUKEwjgxK-P3e_bAhWQGewKHSNsCtUQ6RMIzgEwCw&biw=1920&bih=976'>
								<FontAwesomeIcon icon={faGooglePlusSquare} />
							</a>
						</div>
						<div className='social-icon'>
							<a href='https://www.tripadvisor.com/Hotel_Review-g274730-d1737330-Reviews-Nadmorski_Hotel-Leba_Pomerania_Province_Northern_Poland.html'>
								<FontAwesomeIcon icon={faTripadvisor} />
							</a>
						</div>
					</div>
				</div>
				<div className='footer-link'>
					<h1>{t('footer2')}</h1>
					<div className='footer-line'></div>
					<p>
						HOTEL NADMORSKI <br /> UL. NADMORSKA 9 C <br />
						84-360 ŁEBA <br />
						<a href='tel:+48 59 866 23 55'>TEL. +48 59 866 23 55</a>
						<br />
						<a href='tel:+48 791 247 201'>KOM. +48 791 247 201</a>
						<br />
						<a href='mailto:recepcja@hotelnadmorskileba.pl'>
							recepcja@hotelnadmorskileba.pl
						</a>
					</p>
				</div>
				<div className='footer-link'>
					<h1>{t('footer3')}</h1>
					<div className='footer-line'></div>
					<Link to='/cennik'>{t('footer4')}</Link>
					<Link to='/imprezy-zorganizowane'>{t('footer5')}</Link>
					<Link to='/kontakt'>{t('footer6')}</Link>
					<Link to='/bezpieczny-hotel'>{t('footer7')}</Link>
					<Link to='/warunki-rezerwacji'>{t('footer8')}</Link>
					<Link to='/polityka-prywatnosci'>{t('footer9')}</Link>
					<Link to='/cookies'>COOKIES</Link>
				</div>
				<div className='footer-link'>
					<h1>{t('footer10')}</h1>
					<div className='footer-line'></div>
					<a href='https://lebapark.pl/'>{t('footer11')}</a>
					<a href='http://slowinski.parknarodowy.com/'>{t('footer12')}</a>
					<a href='https://leba.eu/pl/'>{t('footer13')}</a>
				</div>
			</div>
			<p className='footer-copyright'>
				Copyright 2018 - 2021 by HOTEL NADMORSKI
			</p>
		</footer>
	);
};

export default Footer;
