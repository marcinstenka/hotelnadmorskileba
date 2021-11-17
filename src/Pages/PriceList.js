import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import useMobile from '../CustomHooks/useMobile';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PriceList = () => {
  const [data, setData] = useState();
  const isMobile = useMobile();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://hotelnadmorskileba.pl/pricelist.json')
        .then(res => {
          setData(res.data);
        });
    };
    fetchData();
  }, []);
  const RenderPriceList = () => {
    if (!data) {
      return (
        <div className="loadingMarkup">
          <h1>Ładowanie...</h1>
        </div>
      );
    } else {
      const perbb1 = data['1perbb'];
      const perhb1 = data['1perhb'];
      const perbb2 = data['2perbb'];
      const perhb2 = data['2perhb'];
      const perbb3 = data['3perbb'];
      const perhb3 = data['3perhb'];
      const dates = data['dates'];
      const suitbb = data['suitbb'];
      const suithb = data['suithb'];
      dates.lowseason = dates.lowseason.replace('\\r\\n', '\r\n');
      dates.midseason = dates.midseason.replace('\\r\\n', '\r\n');
      dates.midseasonplus = dates.midseasonplus.replace('\\r\\n', '\r\n');
      dates.highseason = dates.highseason.replace('\\r\\n', '\r\n');
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
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perbb1.lowseason !== '-'
                      ? perbb1.lowseason + ' ' + t('priceList-currency')
                      : perbb1.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perbb1.midseason !== '-'
                      ? perbb1.midseason + ' ' + t('priceList-currency')
                      : perbb1.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perbb1.midseasonplus !== '-'
                      ? perbb1.midseasonplus + ' ' + t('priceList-currency')
                      : perbb1.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perbb1.highseason !== '-'
                      ? perbb1.highseason + ' ' + t('priceList-currency')
                      : perbb1.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType2')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perhb1.lowseason !== '-'
                      ? perhb1.lowseason + ' ' + t('priceList-currency')
                      : perhb1.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perhb1.midseason !== '-'
                      ? perhb1.midseason + ' ' + t('priceList-currency')
                      : perhb1.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perbb1.midseasonplus !== '-'
                      ? perhb1.midseasonplus + ' ' + t('priceList-currency')
                      : perhb1.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perhb1.highseason !== '-'
                      ? perhb1.highseason + ' ' + t('priceList-currency')
                      : perhb1.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType3')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perbb2.lowseason !== '-'
                      ? perbb2.lowseason + ' ' + t('priceList-currency')
                      : perbb2.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perbb2.midseason !== '-'
                      ? perbb2.midseason + ' ' + t('priceList-currency')
                      : perbb2.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perbb2.midseasonplus !== '-'
                      ? perbb2.midseasonplus + ' ' + t('priceList-currency')
                      : perbb2.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perbb2.highseason !== '-'
                      ? perbb2.highseason + ' ' + t('priceList-currency')
                      : perbb2.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType4')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perhb2.lowseason !== '-'
                      ? perhb2.lowseason + ' ' + t('priceList-currency')
                      : perhb2.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perhb2.midseason !== '-'
                      ? perhb2.midseason + ' ' + t('priceList-currency')
                      : perhb2.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perhb2.midseasonplus !== '-'
                      ? perhb2.midseasonplus + ' ' + t('priceList-currency')
                      : perhb2.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perhb2.highseason !== '-'
                      ? perhb2.highseason + ' ' + t('priceList-currency')
                      : perhb2.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType5')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perbb3.lowseason !== '-'
                      ? perbb3.lowseason + ' ' + t('priceList-currency')
                      : perbb3.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perbb3.midseason !== '-'
                      ? perbb3.midseason + ' ' + t('priceList-currency')
                      : perbb3.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perbb3.midseasonplus !== '-'
                      ? perbb3.midseasonplus + ' ' + t('priceList-currency')
                      : perbb3.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perbb3.highseason !== '-'
                      ? perbb3.highseason + ' ' + t('priceList-currency')
                      : perbb3.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType6')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {perhb3.lowseason !== '-'
                      ? perhb3.lowseason + ' ' + t('priceList-currency')
                      : perhb3.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {perhb3.midseason !== '-'
                      ? perhb3.midseason + ' ' + t('priceList-currency')
                      : perhb3.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {perhb3.midseasonplus !== '-'
                      ? perhb3.midseasonplus + ' ' + t('priceList-currency')
                      : perhb3.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {perhb3.highseason !== '-'
                      ? perhb3.highseason + ' ' + t('priceList-currency')
                      : perhb3.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType7')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {suitbb.lowseason !== '-'
                      ? suitbb.lowseason + ' ' + t('priceList-currency')
                      : suitbb.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {suitbb.midseason !== '-'
                      ? suitbb.midseason + ' ' + t('priceList-currency')
                      : suitbb.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {suitbb.midseasonplus !== '-'
                      ? suitbb.midseasonplus + ' ' + t('priceList-currency')
                      : suitbb.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {suitbb.highseason !== '-'
                      ? suitbb.highseason + ' ' + t('priceList-currency')
                      : suitbb.highseason}
                  </h5>
                </div>
              </div>
              <div className="mobile-table-item">
                <h4>{t('priceList-roomType8')}</h4>
                <div className="table-item-grid">
                  <h5>
                    <span>Sezon niski</span>
                    <br />
                    {dates.lowseason}
                  </h5>
                  <h5>
                    {suithb.lowseason !== '-'
                      ? suithb.lowseason + ' ' + t('priceList-currency')
                      : suithb.lowseason}
                  </h5>
                  <h5>
                    <span>Sezon średni</span>
                    <br />
                    {dates.midseason}
                  </h5>
                  <h5>
                    {suithb.midseason !== '-'
                      ? suithb.midseason + ' ' + t('priceList-currency')
                      : suithb.midseason}
                  </h5>
                  <h5>
                    <span>Sezon średni +</span>
                    <br />
                    {dates.midseasonplus}
                  </h5>
                  <h5>
                    {suithb.midseasonplus !== '-'
                      ? suithb.midseasonplus + ' ' + t('priceList-currency')
                      : suithb.midseasonplus}
                  </h5>
                  <h5>
                    <span>Sezon wysoki</span>
                    <br />
                    {dates.highseason}
                  </h5>
                  <h5>
                    {suithb.highseason !== '-'
                      ? suithb.highseason + ' ' + t('priceList-currency')
                      : suithb.highseason}
                  </h5>
                </div>
              </div>
            </div>
            <div className="table">
              <table>
                <tr>
                  <td>{t('priceList-header2')}</td>
                  <td>
                    Sezon niski
                    <br />
                    {dates.lowseason}
                  </td>
                  <td>
                    Sezon średni
                    <br />
                    {dates.midseason}
                  </td>
                  <td>
                    Sezon średni +<br />
                    {dates.midseasonplus}
                  </td>
                  <td>
                    Sezon wysoki
                    <br />
                    {dates.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType1')}</td>
                  <td>
                    {perbb1.lowseason !== '-'
                      ? perbb1.lowseason + ' ' + t('priceList-currency')
                      : perbb1.lowseason}
                  </td>
                  <td>
                    {perbb1.midseason !== '-'
                      ? perbb1.midseason + ' ' + t('priceList-currency')
                      : perbb1.midseason}
                  </td>
                  <td>
                    {perbb1.midseasonplus !== '-'
                      ? perbb1.midseasonplus + ' ' + t('priceList-currency')
                      : perbb1.midseasonplus}
                  </td>
                  <td>
                    {perbb1.highseason !== '-'
                      ? perbb1.highseason + ' ' + t('priceList-currency')
                      : perbb1.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType2')}</td>
                  <td>
                    {perhb1.lowseason !== '-'
                      ? perhb1.lowseason + ' ' + t('priceList-currency')
                      : perhb1.lowseason}
                  </td>
                  <td>
                    {perhb1.midseason !== '-'
                      ? perhb1.midseason + ' ' + t('priceList-currency')
                      : perhb1.midseason}
                  </td>
                  <td>
                    {perhb1.midseasonplus !== '-'
                      ? perhb1.midseasonplus + ' ' + t('priceList-currency')
                      : perhb1.midseasonplus}
                  </td>
                  <td>
                    {perhb1.highseason !== '-'
                      ? perhb1.highseason + ' ' + t('priceList-currency')
                      : perhb1.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType3')}</td>
                  <td>
                    {perbb2.lowseason !== '-'
                      ? perbb2.lowseason + ' ' + t('priceList-currency')
                      : perbb2.lowseason}
                  </td>
                  <td>
                    {perbb2.midseason !== '-'
                      ? perbb2.midseason + ' ' + t('priceList-currency')
                      : perbb2.midseason}
                  </td>
                  <td>
                    {perbb2.midseasonplus !== '-'
                      ? perbb2.midseasonplus + ' ' + t('priceList-currency')
                      : perbb2.midseasonplus}
                  </td>
                  <td>
                    {perbb2.highseason !== '-'
                      ? perbb2.highseason + ' ' + t('priceList-currency')
                      : perbb2.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType4')}</td>
                  <td>
                    {perhb2.lowseason !== '-'
                      ? perhb2.lowseason + ' ' + t('priceList-currency')
                      : perhb2.lowseason}
                  </td>
                  <td>
                    {perhb2.midseason !== '-'
                      ? perhb2.midseason + ' ' + t('priceList-currency')
                      : perhb2.midseason}
                  </td>
                  <td>
                    {perhb2.midseasonplus !== '-'
                      ? perhb2.midseasonplus + ' ' + t('priceList-currency')
                      : perhb2.midseasonplus}
                  </td>
                  <td>
                    {perhb2.highseason !== '-'
                      ? perhb2.highseason + ' ' + t('priceList-currency')
                      : perhb2.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType5')}</td>
                  <td>
                    {perbb3.lowseason !== '-'
                      ? perbb3.lowseason + ' ' + t('priceList-currency')
                      : perbb3.lowseason}
                  </td>
                  <td>
                    {perbb3.midseason !== '-'
                      ? perbb3.midseason + ' ' + t('priceList-currency')
                      : perbb3.midseason}
                  </td>
                  <td>
                    {perbb3.midseasonplus !== '-'
                      ? perbb3.midseasonplus + ' ' + t('priceList-currency')
                      : perbb3.midseasonplus}
                  </td>
                  <td>
                    {perbb3.highseason !== '-'
                      ? perbb3.highseason + ' ' + t('priceList-currency')
                      : perbb3.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType6')}</td>
                  <td>
                    {perhb3.lowseason !== '-'
                      ? perhb3.lowseason + ' ' + t('priceList-currency')
                      : perhb3.lowseason}
                  </td>
                  <td>
                    {perhb3.midseason !== '-'
                      ? perhb3.midseason + ' ' + t('priceList-currency')
                      : perhb3.midseason}
                  </td>
                  <td>
                    {perhb3.midseasonplus !== '-'
                      ? perhb3.midseasonplus + ' ' + t('priceList-currency')
                      : perhb3.midseasonplus}
                  </td>
                  <td>
                    {perhb3.highseason !== '-'
                      ? perhb3.highseason + ' ' + t('priceList-currency')
                      : perhb3.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType7')}</td>
                  <td>
                    {suitbb.lowseason !== '-'
                      ? suitbb.lowseason + ' ' + t('priceList-currency')
                      : suitbb.lowseason}
                  </td>
                  <td>
                    {suitbb.midseason !== '-'
                      ? suitbb.midseason + ' ' + t('priceList-currency')
                      : suitbb.midseason}
                  </td>
                  <td>
                    {suitbb.midseasonplus !== '-'
                      ? suitbb.midseasonplus + ' ' + t('priceList-currency')
                      : suitbb.midseasonplus}
                  </td>
                  <td>
                    {suitbb.highseason !== '-'
                      ? suitbb.highseason + ' ' + t('priceList-currency')
                      : suitbb.highseason}
                  </td>
                </tr>
                <tr>
                  <td>{t('priceList-roomType8')}</td>
                  <td>
                    {suithb.lowseason !== '-'
                      ? suithb.lowseason + ' ' + t('priceList-currency')
                      : suithb.lowseason}
                  </td>
                  <td>
                    {suithb.midseason !== '-'
                      ? suithb.midseason + ' ' + t('priceList-currency')
                      : suithb.midseason}
                  </td>
                  <td>
                    {suithb.midseasonplus !== '-'
                      ? suithb.midseasonplus + ' ' + t('priceList-currency')
                      : suithb.midseasonplus}
                  </td>
                  <td>
                    {suithb.highseason !== '-'
                      ? suithb.highseason + ' ' + t('priceList-currency')
                      : suithb.highseason}
                  </td>
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
            </ul>
            <div className="button">
              <Link to="warunki-rezerwacji">{t('priceList-text15')}</Link>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  };
  return RenderPriceList();
};

export default PriceList;
