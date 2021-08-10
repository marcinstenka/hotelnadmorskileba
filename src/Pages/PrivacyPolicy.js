import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const PrivacyPolicy = () => {
	const { t } = useTranslation();
	const isMobile = useMobile();
	return (
		<>
			<Navbar isMobile={isMobile} />
			<div className='container privacy-policy-contanier'>
				<h6>§.1 {t('privacyPolicy1')}</h6>
				<ol>
					<li>{t('privacyPolicy2')}</li>
					<li>{t('privacyPolicy3')}</li>
					<li>{t('privacyPolicy4')}</li>
					<li>{t('privacyPolicy5')}</li>
					<li>{t('privacyPolicy6')}</li>
				</ol>
				<h6>§.2 {t('privacyPolicy7')}</h6>
				<ol>
					<li>{t('privacyPolicy8')}</li>
					<li>{t('privacyPolicy9')}</li>
					<li>{t('privacyPolicy10')}</li>
					<li>{t('privacyPolicy11')}</li>
					<li>{t('privacyPolicy12')}</li>
					<li>{t('privacyPolicy13')}</li>
					<li>{t('privacyPolicy14')}</li>
					<li>{t('privacyPolicy15')}</li>
					<li>{t('privacyPolicy16')}</li>
					<li>{t('privacyPolicy17')}</li>
					<li>{t('privacyPolicy18')}</li>
				</ol>
			</div>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
