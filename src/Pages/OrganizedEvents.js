import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OrganizedEventsImage1 from '../assets/organizedEvents1.jpg';
import OrganizedEventsImage2 from '../assets/organizedEvents2.jpg';
import OrganizedEventsImage3 from '../assets/organizedEvents3.jpg';
import useMobile from '../CustomHooks/useMobile';
const OrganizedEvents = () => {
  const isMobile = useMobile();

  //logic for collapsible
  useEffect(() => {
    const collapsible = document.querySelectorAll('.collapsible');
    collapsible.forEach(coll => {
      coll.addEventListener('click', () => {
        coll.classList.toggle('active');
        const content = coll.nextElementSibling;
        content.style.maxHeight
          ? (content.style.maxHeight = null)
          : (content.style.maxHeight = content.scrollHeight + 'px');
      });
    });
  }, []);
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container">
        <div className="slider">
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 2500 }}
          >
            <SwiperSlide>
              <img
                src={OrganizedEventsImage1}
                alt="Obsługa konferencji do 80 osób"
              />
              <div className="slider-text">
                <h2>Obsługa konferencji</h2>
                <h2>Do 80 osób</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OrganizedEventsImage2}
                alt="Obsługa konferencji do 80 osób"
              />
              <div className="slider-text">
                <h2>Obsługa konferencji</h2>
                <h2>Do 80 osób</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OrganizedEventsImage3}
                alt="Planujesz weselę? Sprawdź naszą ofertę"
              />
              <div className="slider-text">
                <h2>Planujesz wesele?</h2>
                <h2>Sprawdź naszą ofertę</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="events-section">
          <h2>ORGANIZACJA IMPREZ</h2>
          <p className="text">
            Hotel Nadmorski to doskonała lokalizacja, dostęp do parkingu,
            doświadczony zespół hotelarski oraz zaplecze sypialne. Dysponujemy
            między innymi:
            <br />
            – dwiema przestronnymi salami, mogącymi pomieścić do 80 osób (oprócz
            części tanecznej, na sali znajduje się również osobny bar)
            <br />– oddzielną restauracją prowadzoną przez doświadczonego szefa
            kuchni
          </p>
          <p className="text">
            Poza usługami gastronomicznymi oraz noclegowymi oferujemy pomoc w
            zorganizowaniu każdego przedsięwzięcia. Współpracujemy z lokalnymi
            kwiaciarniami, dekoratorem wnętrz, zespołami muzycznymi czy firmami
            realizującymi reportaże fotograficzne.
          </p>
          <p className="text">
            Obiady rodzinne, chrzciny, I komunia święta, urodziny, rocznice
            ślubu, wesela – każdą z tych imprez bardzo chętnie przygotujemy wraz
            z Państwem.
          </p>
          <p className="text">
            Z przyjemnością przygotujemy dla Państwa indywidualną propozycję
            realizacji wybranej uroczystości.
          </p>
          <p className="text">
            Zapraszamy
            <br />
            <a href="tel:+48 48 791 247 201">tel. + 48 791 247 201</a>
            <br />
            <a href="mailto:recepcja@hotelnadmorskileba.pl">
              e-mail: recepcja@hotelnadmorskileba.pl
            </a>
          </p>
        </div>
        <div className="events-section">
          <button type="button" className="collapsible">
            WESELE
          </button>
          <div className="event-info">
            <p className="text">
              Planujesz wesele nad morzem ? A może kusi Cię perspektywa
              kameralnego ślubu na plaży w Łebie ?
            </p>
            <p className="text">
              Chętnie pomożemy w organizacji tego wyjątkowego dnia !
            </p>
            <p className="text">
              Hotel Nadmorski dzięki doskonałej lokalizacji, jest idealnym
              miejscem na organizację uroczystości weselnej. Oddalony o 150
              metrów od plaży ( ślub cywilny udzielany przez UC w Łebie),
              świetnie nadaje się do organizacji przyjęcia weselnego.
            </p>
            <p className="text">
              Podczas organizacji ślubu kościelnego, nie bez znaczenia pozostaje
              odległość do najbliższego kościoła katolickiego ( kościół barokowy
              – 950 m, kościół nowoczesny – 650 m.)
            </p>
            <p className="text">
              Do dyspozycji naszych gości oddajemy salę restauracyjną doskonale
              nadającą się na organizację kameralnego obiadu w gronie
              najbliższych, lub salę konferencyjno-bankietową, idealną do
              organizacji zabawy do białego rana.
            </p>
            <p className="text">
              Sala konferencyjno-bankietowa mieści do 80 osób. Oprócz części
              tanecznej na Sali znajduje się również osobny bar dedykowany
              gościom weselnym.
            </p>
            <p className="text">
              Nasze menu weselne oscyluje w granicach od 140 zł do 180 zł od
              osoby. Aby określić szczegóły, prosimy o bezpośredni kontakt z
              obsługą recepcji.
            </p>
          </div>
          <button type="button" className="collapsible">
            BANKIET
          </button>
          <div className="event-info">
            <p className="text">
              Szukasz odpowiedniej lokalizacji do organizacji bankietu,
              przyjęcia z okazji I Komunii Świętej czy kameralnego spotkania
              biznesowego nad morzem ?
            </p>
            <p className="text">
              Sala konferencyjno-bankietowa mieści do 80 osób. Oprócz części
              tanecznej na sali znajduje się również osobny bar w której
              zapewniamy obsługę barmańską.
            </p>
          </div>
          <button type="button" className="collapsible">
            KONFERENCJA
          </button>
          <div className="event-info">
            <p className="text">
              Sala konferencyjna wyposażona jest w niezbędny sprzęt.
              Udostępniamy rzutnik multimedialny, ekran, flipchart,
              nagłośnienie, dostęp do szybkiego bezprzewodowego Internetu.
            </p>
            <p className="text">
              Na potrzeby konferencji proponujemy ustawienie stołów teatralne,
              szkolne lub w kształcie litery U.
            </p>
            <p className="text">
              Przerwy kawowe:
              <br />– przerwa kawowa (kawa, herbata, woda, kruche ciastka)
              <br />– przerwa kawowa (kawa, herbata, woda, kruche ciastka,
              ciasto)
              <br />– przerwa kawowa (kawa, herbata, woda, kruche ciastka,
              ciasto, owoce)
              <br />– przerwa kawowa całodzienna (uzupełniana)
            </p>
            <p className="text">
              Posiłki:
              <br />
              – lunch w formie bufetu
              <br />
              – obiad (drugie danie, deser, napój)
              <br />
              – obiadokolacja (zupa, drugie danie, deser, napój)
              <br />
            </p>
            <p className="text">
              Pakiety konferencyjne:
              <br />– pakiet konferencyjny jednodniowy
              <br />– wynajem sali konferencyjnej z wyposażeniem (rzutnik
              multimedialny, ekran, flipchart, nagłośnienie, bezprzewodowy
              internet), obiad, przerwa kawowa szatnia, parking
            </p>
            <p className="text">
              PAKIET KONFERENCYJNY + NOCLEG*
              <br />– wynajem sali konferencyjnej z wyposażeniem (rzutnik
              multimedialny, ekran, flipchart, nagłośnienie, bezprzewodowy
              internet), lunch w formie bufetu przerwa kawowa, kolacja, nocleg w
              pokoju 2-osobowym, śniadanie parking
            </p>
            <p className="text">
              Aby otrzymać spersonalizowaną ofertę cenową, zadzwoń do nas!
              <br />
              <a href="tel:+48 791 247 201">tel. +48 791 247 201</a>
            </p>
            <div className="text">
              *oferta ważna przy minimum 15 uczestnikach
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizedEvents;
