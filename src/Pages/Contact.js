import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';
const Contact = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container contact-container">
        <div className="contact-tiles">
          <div className="contact-tile">
            <h4>ADRES</h4>
            <p className="text">
              Hotel Nadmorski w Łebie
              <br />
              ul. Nadmorska 9 C <br />
              84-360 Łeba
              <br />
            </p>
          </div>
          <div className="contact-tile">
            <h4>TELEFON, FAX, KONTAKT EMAIL</h4>
            <h5>Kontakt telefoniczny:</h5>
            <p className="text">
              <a href="tel:+48 59 866 23 55">tel. +48 59 866 23 55</a>
              <br />
              <a href="tel:+48 791 247 201">kom. +48 791 247 201</a>
            </p>
            <h5>Zapytania prosimy kierować na adres:</h5>
            <p className="text">
              <a href="mailto:recepcja@hotelnadmorskileba.pl">
                recepcja@hotelnadmorskileba.pl
              </a>
            </p>
          </div>
          <div className="contact-tile">
            <h4>DANE DO PRZELEWU</h4>
            <p className="text">
              “OLMAR” Aleksander Becker
              <br />
              ul. Nadmorska 9<br />
              84-360 Łeba
              <br />
              <strong>PKO BP</strong>, nr konta: 80 1020 4649 0000 7402 0128
              6772
              <br />
              <strong>SWIFT:</strong> BPKOPLPW
              <br />
              <strong>IBAN:</strong> PL 80 1020 4649 0000 7402 0128 6772
            </p>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d575.4566274842064!2d17.570832!3d54.765437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff513ec57937ede5!2sHotel%20Nadmorski%20%C5%81eba!5e0!3m2!1spl!2sus!4v1627654069652!5m2!1spl!2sus"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
