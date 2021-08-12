import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import MobileMenuScript from './MobileMenuScript';

import Logo from '../../assets/logo.png';
import PlIcon from './../../assets/pl-icon.png';
import GbIcon from './../../assets/gb-icon.png';
import DeIcon from './../../assets/de-icon.png';

const NavbarMobile = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar-mobile">
      <div className="mobile__hamburger">
        <div className="hamburger__line hamburger__line-top"></div>
        <div className="hamburger__line hamburger__line-mid"></div>
        <div className="hamburger__line hamburger__line-bottom"></div>
      </div>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>

      <input type="checkbox" className="navbar__checkbox" />
      <div className="mobile-menu">
        <ul>
          <li>
            <Link to="/">{t('nav1')}</Link>
          </li>
          <li>
            <Link to="/pokoje">{t('nav2')}</Link>
          </li>
          <li>
            <Link to="/restauracja">{t('nav3')}</Link>
          </li>
          <li>
            <Link to="/dla-dzieci">{t('nav4')}</Link>
          </li>
          <li>
            <Link to="/spa">{t('nav5')}</Link>
          </li>
          <li>
            <Link to="/cennik">{t('nav6')}</Link>
          </li>
          <li>
            <Link to="/kontakt">{t('nav7')}</Link>
          </li>
        </ul>
        <div className="translation-icons">
          <div
            className="translation-icon"
            onClick={() => i18next.changeLanguage('pl')}
          >
            <img src={PlIcon} alt="Polska wersja językowa stony" />
          </div>
          <div
            className="translation-icon"
            onClick={() => i18next.changeLanguage('en')}
          >
            <img src={GbIcon} alt="English language version of the website" />
          </div>
          <div
            className="translation-icon"
            onClick={() => i18next.changeLanguage('de')}
          >
            <img src={DeIcon} alt="Deutsche Sprachversion der Website" />
          </div>
        </div>
        <div className="menu-logo">
          <img src={Logo} alt="Hotel Nadmorski Łeba" />
        </div>
      </div>
      <MobileMenuScript />
    </nav>
  );
};

export default NavbarMobile;
