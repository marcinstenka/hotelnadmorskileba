import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Cookies = () => {
	const { t } = useTranslation();
	const isMobile = useMobile();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container cookies-container'>
				<ol className='cookies-list'>
					<li>{t('cookies1')}</li>
					<li>{t('cookies2')}</li>
					<li>{t('cookies3')}</li>
					<li>
						{t('cookies4')}
						<ul className='cookies-sublist'>
							<li>{t('cookies5')}</li>
							<li>{t('cookies6')}</li>
							<li>{t('cookies7')}</li>
						</ul>
					</li>
					<li>{t('cookies8')}</li>
					<li>
						{t('cookies9')}
						<ul className='cookies-sublist'>
							<li>{t('cookies10')}</li>
							<li>{t('cookies11')}</li>
							<li>{t('cookies12')}</li>
							<li>{t('cookies13')}</li>
							<li>{t('cookies14')}</li>
						</ul>
					</li>
					<li>{t('cookies15')}</li>
					<li>{t('cookies16')}</li>
					<li>{t('cookies17')}</li>
				</ol>
				<h6>{t('cookies18')}</h6>
				<p className='text'>
					{t('cookies19')}
					<br />
					{t('cookies20')}
					<br />
					{t('cookies21')}
					<br />
					{t('cookies22')}
				</p>
				<p className='text'>{t('cookies23')}</p>
				<p className='text'>
					<strong>{t('cookies24')}</strong>
					<br />
					{t('cookies25')}
				</p>
				<p className='text'>
					<strong>Google Chrome</strong>
					<br />
					{t('cookies26')}
				</p>
				<ul className='cookies-browser-list'>
					<li>{t('cookies27')}</li>
					<li>{t('cookies28')}</li>
					<li>{t('cookies29')}</li>
					<li>{t('cookies30')}</li>
					<li>{t('cookies31')}</li>
					<li>{t('cookies32')}</li>
				</ul>
				<p className='text'>
					<strong>Mozilla Firefox</strong>
					<br />
					{t('cookies33')}
				</p>
				<ul className='cookies-browser-list'>
					<li>{t('cookies34')}</li>
					<li>{t('cookies35')}</li>
					<li>{t('cookies36')}</li>
					<li>{t('cookies37')}</li>
				</ul>
				<p className='text'>
					<strong>Opera</strong>
					<br />
					{t('cookies38')}
				</p>
				<ul className='cookies-browser-list'>
					<li>{t('cookies39')}</li>
					<li>{t('cookies40')}</li>
					<li>{t('cookies41')}</li>
					<li>{t('cookies42')}</li>
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default Cookies;
