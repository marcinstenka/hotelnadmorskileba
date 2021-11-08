import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PriceList = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container price-list-container">
        <h1>{t('priceList-header2')}</h1>
        <div className="mobile-table">
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType1')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price1')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price2')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price3')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price4')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType2')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price5')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price6')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price7')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span> <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price8')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType3')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price9')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price10')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price11')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price12')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType4')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price13')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price14')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price15')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price16')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType5')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price17')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price18')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price19')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price20')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType6')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price21')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price22')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price23')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price24')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType7')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price25')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price26')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price27')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price28')}</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>{t('priceList-roomType8')}</h4>
            <div className="table-item-grid">
              <h5>
                <span>{t('priceList-season1')}</span>
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </h5>
              <h5>{t('priceList-price29')}</h5>
              <h5>
                <span>{t('priceList-season2')}</span>
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </h5>
              <h5>{t('priceList-price30')}</h5>
              <h5>
                <span>{t('priceList-season3')}</span>
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </h5>
              <h5>{t('priceList-price31')}</h5>
              <h5>
                <span>{t('priceList-season4')}</span>
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </h5>
              <h5>{t('priceList-price32')}</h5>
            </div>
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <td>{t('priceList-header2')}</td>
              <td>
                {t('priceList-season1')}
                <br /> 23.04 - 30.04
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09
              </td>
              <td>
                {t('priceList-season2')}
                <br /> 28.05 - 16.06
                <br />
                27.08 - 03.09
              </td>
              <td>
                {t('priceList-season3')}
                <br /> 30.04 - 03.05 <br /> 19.06 - 02.07
              </td>
              <td>
                {t('priceList-season4')}
                <br />
                16.06 - 19.06 <br /> 02.07 - 27.08
              </td>
            </tr>
            <tr>
              <td>{t('priceList-roomType1')}</td>
              <td>{t('priceList-price1')}</td>
              <td>{t('priceList-price2')}</td>
              <td>{t('priceList-price3')}</td>
              <td>{t('priceList-price4')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType2')}</td>
              <td>{t('priceList-price5')}</td>
              <td>{t('priceList-price6')}</td>
              <td>{t('priceList-price7')}</td>
              <td>{t('priceList-price8')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType3')}</td>
              <td>{t('priceList-price9')}</td>
              <td>{t('priceList-price10')}</td>
              <td>{t('priceList-price11')}</td>
              <td>{t('priceList-price12')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType4')}</td>
              <td>{t('priceList-price13')}</td>
              <td>{t('priceList-price14')}</td>
              <td>{t('priceList-price15')}</td>
              <td>{t('priceList-price16')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType5')}</td>
              <td>{t('priceList-price17')}</td>
              <td>{t('priceList-price18')}</td>
              <td>{t('priceList-price19')}</td>
              <td>{t('priceList-price20')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType6')}</td>
              <td>{t('priceList-price21')}</td>
              <td>{t('priceList-price22')}</td>
              <td>{t('priceList-price23')}</td>
              <td>{t('priceList-price24')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType7')}</td>
              <td>{t('priceList-price25')}</td>
              <td>{t('priceList-price26')}</td>
              <td>{t('priceList-price27')}</td>
              <td>{t('priceList-price28')}</td>
            </tr>
            <tr>
              <td>{t('priceList-roomType8')}</td>
              <td>{t('priceList-price29')}</td>
              <td>{t('priceList-price30')}</td>
              <td>{t('priceList-price31')}</td>
              <td>{t('priceList-price32')}</td>
            </tr>
          </table>
        </div>
        <ul>
          <li>{t('priceList-text1')}</li>
          <li>{t('priceList-text2')}</li>
          <li>{t('priceList-text3')}</li>
          <li>{t('priceList-text4')}</li>
          <li>{t('priceList-text5')}</li>
          <li>{t('priceList-text6')}</li>
          <li>{t('priceList-text7')}</li>
          <li>{t('priceList-text8')}</li>
          <li>{t('priceList-text9')}</li>
          <li>{t('priceList-text10')}</li>
          <li>{t('priceList-text11')}</li>
          <li>{t('priceList-text12')}</li>
          <li>{t('priceList-text13')}</li>
          <li>{t('priceList-text14')}</li>
          <li>{t('priceList-text15')}</li>
        </ul>
        <div className="button">
          <Link to="warunki-rezerwacji">{t('priceList-text17')}</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PriceList;
