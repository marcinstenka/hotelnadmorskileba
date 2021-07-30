import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import useMobile from '../CustomHooks/useMobile';

const Page404 = () => {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <div className="container page404-container">
        <h2>Zabłądziłeś/aś!</h2>
        <br />
        <Link to="/">WRÓĆ NA STRONĘ HOTELU</Link>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
