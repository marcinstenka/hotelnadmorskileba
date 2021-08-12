import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import Logo from './../../assets/logo.webp';
import PlIcon from './../../assets/pl-icon.png';
import GbIcon from './../../assets/gb-icon.png';
import DeIcon from './../../assets/de-icon.png';

const NavbarDesktop = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Hotel Nadmorski Łeba" />
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
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-nav-link">
            {t('nav1')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokoje" exact activeClassName="active-nav-link">
            {t('nav2')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/restauracja" exact activeClassName="active-nav-link">
            {t('nav3')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dla-dzieci" exact activeClassName="active-nav-link">
            {t('nav4')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/spa" exact activeClassName="active-nav-link">
            {t('nav5')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/cennik" exact activeClassName="active-nav-link">
            {t('nav6')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/kontakt" exact activeClassName="active-nav-link">
            {t('nav7')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
