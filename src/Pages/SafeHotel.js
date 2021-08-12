import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SafeHotelIamge from '../assets/safe-hotel.webp';
const SafeHotel = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />

      <div className="container safe-hotel-container">
        <div className="safe-hotel-hero">
          <div className="hero-content">
            <h1>{t('safeHotel-header')}</h1>
            <div className="safe-hotel-image">
              <img src={SafeHotelIamge} alt="Bezpieczny hotel!" />
            </div>
          </div>
        </div>
        <p className="text">{t('safeHotel1')}</p>
        <ul>
          <li>{t('safeHotel2')}</li>
          <li>{t('safeHotel3')}</li>
          <li>{t('safeHotel4')}</li>
          <li>{t('safeHotel5')}</li>
          <li>{t('safeHotel6')}</li>
          <li>{t('safeHotel7')}</li>
          <li>{t('safeHotel8')}</li>
          <li>{t('safeHotel9')}</li>
          <li>{t('safeHotel10')}</li>
          <li>{t('safeHotel11')}</li>
        </ul>
        <p className="text">
          {t('safeHotel12')}
          <br />
          {t('safeHotel13')}
          <br />
          <strong>{t('safeHotel14')}</strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SafeHotel;
