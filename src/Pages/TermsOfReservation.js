import useMobile from '../CustomHooks/useMobile';
import { useTranslation } from 'react-i18next';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const TermsOfReservation = () => {
	const isMobile = useMobile();
	const { t } = useTranslation();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container terms-container'>
				<h4>{t('terms1')}</h4>
				<ol>
					<li>
						{t('terms2')} <a href='tel:+48 59 866 23 55'>+48 59 866 23 55</a>,{' '}
						<a
							href='tel:+48 791
            247 201'
						>
							+48 791 247 201
						</a>
						{t('terms3')}{' '}
						<a href='mailto:recepcja@hotelnadmorskileba.pl'>
							recepcja@hotelnadmorskileba.pl
						</a>
					</li>
					<li>{t('terms4')}</li>
					<li>{t('terms5')}</li>
					<li>{t('terms6')}</li>
					<li>{t('terms7')}</li>
				</ol>
				<h4>{t('terms8')}</h4>
				<ol>
					<li>{t('terms9')}</li>
					<li>{t('terms10')}</li>
					<li>{t('terms11')}</li>
					<li>{t('terms12')}</li>
					<li>{t('terms13')}</li>
					<li>{t('terms14')}</li>
				</ol>
				<h4>{t('terms15')}</h4>
				<p className='text'>
					<strong>{t('terms16')}</strong>
					<br />
					“OLMAR” Aleksander Becker
					<br />
					ul. Nadmorska 9<br />
					84-360 Łeba
					<br />
					PKO BP, {t('terms17')} 80 1020 4649 0000 7402 0128 6772
					<br />
					SWIFT : BPKOPLPW
					<br />
					IBAN: PL 80 1020 4649 0000 7402 0128 6772
					<br />
				</p>
			</div>
			<Footer />
		</>
	);
};

export default TermsOfReservation;
