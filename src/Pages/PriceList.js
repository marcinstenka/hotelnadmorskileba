import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
const PriceList = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container price-list-container">
        <h1>CENNIK / REZERWACJA POBYTU</h1>
        <div className="mobile-table">
          <div className="mobile-table-item">
            <h4>pokój 1 osobowy B&B</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05
                <br /> 29.08 - 26.09.2021
              </h5>
              <h5>150 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>220 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5> 320 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>360 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>pokój 1 osobowy HB</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>205 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>275 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5> 375 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>415 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>pokój 2 osobowy B&B</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>230 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>270 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5> 390 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>440 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>pokój 2 osobowy HB</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>340 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>380 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5>500 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>550 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>pokój 3 osobowy B&B</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>270 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>320 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5>450 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>510 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>pokój 3 osobowy HB</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>435 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>485 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5>615 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>675 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>SUIT B&B</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>400 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>450 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5>590 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>670 zł/doba</h5>
            </div>
          </div>
          <div className="mobile-table-item">
            <h4>SUIT HB</h4>
            <div className="table-item-grid">
              <h5>
                <span>Sezon niski</span>
                <br /> 03.05 - 28.05 <br /> 29.08 - 26.09.2021
              </h5>
              <h5>620 zł/doba </h5>
              <h5>
                <span>Sezon średni</span>
                <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br /> 22.08 -
                29.08.2021
              </h5>
              <h5>670 zł/doba </h5>
              <h5>
                <span>Sezon średni +</span>
                <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07
                <br />
                15.08 - 22.08.2021
              </h5>
              <h5>810 zł/doba</h5>
              <h5>
                <span>Sezon wysoki</span> <br />
                18.07 - 15.08.2021
              </h5>
              <h5>890 zł/doba</h5>
            </div>
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <td>CENNIK</td>
              <td>
                SEZON NISKI <br />
                03.05 - 28.05
                <br /> 29.08 - 26.09.2021
              </td>
              <td>
                SEZON ŚREDNI <br /> 28.05-02.06 <br /> 06.06 - 04.07 <br />{' '}
                22.08 - 29.08.2021
              </td>
              <td>
                SEZON ŚREDNI + <br /> 30.04-03.05 <br /> 02.06-06.06 <br />
                04.07-18.07 <br />
                15.08 - 22.08.2021
              </td>
              <td>
                SEZON WYSOKI <br /> 18.07 - 15.08.2021
              </td>
            </tr>
            <tr>
              <td>pokój 1 osobowy B&B </td>
              <td>150 zł/doba </td>
              <td>220 zł/doba </td>
              <td>320 zł/doba </td>
              <td>360 zł/doba</td>
            </tr>
            <tr>
              <td>pokój 1 osobowy HB</td>
              <td>205 zł/doba</td>
              <td>275 zł / doba</td>
              <td>375 zł/ doba</td>
              <td>415 zł/ doba</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy B&B</td>
              <td>230 zł/dobę</td>
              <td>270 zł/dobę</td>
              <td>390 zł/doba</td>
              <td>440 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 2 osobowy HB</td>
              <td>340 zł/ doba</td>
              <td>380 zł /doba</td>
              <td>500 zł/doba</td>
              <td>550 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 3 osobowy B&B</td>
              <td>270 zł/dobę</td>
              <td>320 zł/dobę</td>
              <td>450 zł/doba</td>
              <td>510 zł/dobę</td>
            </tr>
            <tr>
              <td>pokój 3 osobowy HB</td>
              <td>435 zł/doba</td>
              <td>485 zł/doba</td>
              <td>615 zł/doba</td>
              <td>675 zł/dobę</td>
            </tr>
            <tr>
              <td>SUIT B&B</td>
              <td>400 zł/dobę</td>
              <td>450 zł/dobę </td>
              <td>590 zł / doba </td>
              <td>670 zł/dobę</td>
            </tr>
            <tr>
              <td>SUIT HB </td>
              <td>620zł/ doba</td>
              <td>670 zł/doba</td>
              <td>810 zł/doba</td>
              <td>890 zł/dobę</td>
            </tr>
          </table>
        </div>
        <ul>
          <li>
            w cenę pokoju wliczona jest opłata klimatyczna i 8% stawka VAT
          </li>
          <li>W cenę pokoi wliczono dostęp do strefy SPA</li>
          <li>
            istnieje możliwość dokupienia obiadokolacji w cenie 55 zł od osoby
            dorosłej, 40 zł od dziecka ( zestaw składa się z zupy, drugiego
            dania oraz deseru, napojów zimnych i gorących ) *obiadokolacje
            dostępne są w terminie 26.06 – 31.08.2021
          </li>
          <li>płatność za pobyt pobierana jest w dniu meldunku</li>
          <li>
            oferent zastrzega sobie możliwość zmiany ceny w trakcie
            obowiązującej taryfy
          </li>
          <li>
            cena doby hotelowej oznaczonej symbolem B&B zawiera śniadanie, cena
            doby hotelowej oznaczonej symbolem HB zawiera śniadanie i
            obiadokolację
          </li>
          <li>dostawka w cenie 100 zł/doba – łóżeczko dla dzieci bezpłatnie</li>
          <li>parking płatny 20 zł doba (wymagana wcześniejsza rezerwacja)</li>
          <li>
            przedłużenie doby hotelowej 100 zł (opcja dostępna tylko w przypadku
            dostępności pokoi)
          </li>
          <li>podane ceny są wartościami brutto</li>
          <li>cena za 1 dobę pobytu małego zwierzęcia – 50 zł</li>
          <li>
            doba rozpoczyna się od godziny 15:00 trwa do godziny 11:00 dnia
            następnego
          </li>
          <li>
            w pokojach 2 /3 /suit dzieci do lat 3 kwaterowane są bezpłatnie, w
            wieku od 3 do 9 lat odpłatność wynosi 60% stawki osoby dorosłej przy
            dwóch pełnopłatnych osobach w pokoju, od 10 lat wzwyż obowiązuje
            stawka jak za osobę dorosłą
          </li>
          <li>Cennik obowiązuje od 1.11.2019</li>
        </ul>
        <div className="button">
          <Link to="warunki-rezerwacji">WARUNKI REZERWACJI</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PriceList;
