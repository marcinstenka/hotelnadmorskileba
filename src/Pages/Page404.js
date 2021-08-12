import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Page404 = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container page404-container">
        <h2>{t('404page1')}</h2>
        <br />
        <Link to="/">{t('404page2')}</Link>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
