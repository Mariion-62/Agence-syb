import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import SFooter from './style';
import ContactUs from './ContactUS';
import Seo from './Seo';
import DownFooter from './DownFooter';

export default function Footer() {
  // animation for to do appear text
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200,
      mirror: true,
    });
    Aos.refresh();
  }, []);

  return (
    <SFooter>
      <section className="allFooter">
        <section className="blocLeftFooter">
          <section
            className="funFooter"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            <h1 className="titleContact">Contact</h1>
            <p className="textFunFooterOne">
              Appelle-nous, rencontre-nous, viens nous serrer la pince !
            </p>
          </section>
          <div className="footerLineText">
            <div className="lineWhiteFooterText" />
            <p
              className="textFooterOne"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              On adore papoter et encore plus quand c’est pour parler
              performance et business. Viens nous tester, nous briefer, nous
              challenger.
            </p>
          </div>
        </section>
      </section>
      <ContactUs />
      <Seo />
      <DownFooter />
    </SFooter>
  );
}
