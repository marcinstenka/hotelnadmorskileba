import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import useMobile from '../CustomHooks/useMobile';

const TermsOfReservation = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container terms-container">
        <h4>WARUNKI REZERWACJI</h4>
        <ol>
          <li>
            Rezerwacji można dokonać telefonicznie{' '}
            <a href="tel:+48 59 866 23 55">+48 59 866 23 55</a>,{' '}
            <a
              href="tel:+48 791
            247 201"
            >
              +48 791 247 201
            </a>
            , faksem +48 59 866 23 55 lub mailem{' '}
            <a href="mailto:recepcja@hotelnadmorskileba.pl">
              recepcja@hotelnadmorskileba.pl
            </a>
          </li>
          <li>
            Po otrzymaniu potwierdzenia dostępności terminu należy wpłacić
            opłatę rezerwacyjną w wysokości 40% sumarycznej kwoty pobytu.
          </li>
          <li>
            Opłatę rezerwacyjną należy wpłacić w terminie 3 dni roboczych gdy do
            terminu rezerwacji jest mniej niż 21 dni, 7 dni gdy od daty
            potwierdzenia rezerwacji do terminu jest więcej niż 21 dni.
          </li>
          <li>
            Po otrzymaniu wymaganej opłaty rezerwacyjnej rezerwacja staje się
            gwarantowana, o czym informujemy Państwa telefonicznie bądź mailowo.
          </li>
          <li>
            Pozostałą kwotę należy uregulować w dniu przyjazdu. W dniu wyjazdu
            lub każdego dnia regulują Państwo dodatkowe zobowiązania wynikające
            z zamówień dodatkowych w trakcie pobytu.
          </li>
        </ol>
        <h4>WARUNKI REZYGNACJI Z REZERWACJI</h4>
        <ol>
          <li>
            W przypadku udokumentowanych nagłych zdarzeń losowych opłata
            rezerwacyjna podlega całkowitemu zwrotowi.
          </li>
          <li>
            Jeżeli od rezerwacji do terminu pobytu jest więcej niż 60 dni
            zawracamy opłatę rezerwacyjną w całości, lub można przenieść ją na
            inny termin, uzgodniony z recepcją hotelu.
          </li>
          <li>
            Jeżeli rezygnacja z rezerwacji następuje w terminie do 60 dni przed
            zarezerwowanym pobytem opłaty rezerwacyjnej nie zwracamy.
          </li>
          <li>
            Bez kosztowa zmiana rezerwacji możliwa jest na 14 dni przed
            planowaną datą przyjazdu (przy uwzględnieniu dostępności pokoi
            hotelowych). Każdorazowa zmiana wymaga wygenerowania nowego
            potwierdzenia rezerwacji. Skrócenie pobytu traktowane jest jako
            anulacja rezerwacji i wymaga opłaty za cały wcześniej zarezerwowany
            termin.
          </li>
          <li>
            Zwrot środków możliwy jest jedynie na konto, z którego został
            dokonany przelew.
          </li>
          <li>
            Zwrot środków na kartę możliwy jest jedynie na tę kartę, z której
            zostały pobrane środki.
          </li>
        </ol>
        <h4>
          Wpłata opłaty rezerwacyjnej na wskazany nr konta lub bezpośrednio w
          recepcji jest równoznaczna z akceptacją „Warunków rezygnacji z
          rezerwacji”
        </h4>
        <p className="text">
          <strong>Dane do przelewu:</strong>
          <br />
          “OLMAR” Aleksander Becker
          <br />
          ul. Nadmorska 9<br />
          84-360 Łeba
          <br />
          PKO BP, nr konta: 80 1020 4649 0000 7402 0128 6772
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
