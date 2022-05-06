import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoCallOutline,
  IoLocationSharp,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import SFooter from './style';

export default function Footer() {
  const currentYear = new Date().getFullYear();
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
              Appelle-nous, <p>rencontre-nous,</p> viens nous serrer la pince !
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
              performance et business.
              <p> Viens nous tester, nous briefer, nous challenger.</p>
            </p>
          </div>
        </section>
        <section className="blocRightFooter">
          <div className="gridFooter">
            <div className="social">
              <div className="containerSocialLogo">
                <div className="socialLogo">
                  <a
                    href="https://fr.linkedin.com/company/syb-group/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="iconInsta"
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-duration="800"
                    >
                      <IoLogoInstagram size={40} />
                    </div>
                  </a>
                  <a
                    href="https://fr.linkedin.com/company/syb-group/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="iconLinkedIn"
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-duration="800"
                    >
                      <IoLogoLinkedin size={40} />
                    </div>
                  </a>
                </div>
                <h3 className="titleFollow">Suis-nous</h3>
              </div>
              <div
                className="iconArrow"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <IoArrowForwardCircleOutline size={25} />
              </div>
            </div>
            <a
              href="tel:+0622174495"
              className="phone"
              target="_blank"
              rel="noreferrer"
            >
              <div className="containerPhone">
                <div
                  className="iconPhone"
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-duration="800"
                >
                  <IoCallOutline size={40} />
                </div>
                <h3 className="titlePhone">Appelle-nous</h3>
              </div>
              <div
                data-aos="fade-up"
                className="iconArrow"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <IoArrowForwardCircleOutline size={25} />
              </div>
            </a>
            <a
              href="https://www.google.fr/maps/place/SHAKE+YOUR+BUSINESS+-+SYB+GROUP/@50.7011227,3.1559373,17z/data=!3m1!4b1!4m5!3m4!1s0x47c32be3b934f0a9:0xe49a12e53164abe3!8m2!3d50.7011227!4d3.158126"
              target="_blank"
              rel="noreferrer"
              className="adresse"
            >
              <div className="containerAdresse">
                <div
                  className="iconAdresse"
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-duration="800"
                >
                  <IoLocationSharp size={40} />
                </div>
                <h3 className="titleAdresse">On est ici !</h3>
                <p className="place">Plaine Images,</p>
                <p className="street">99 A Bd Constantin Descat,</p>
                <p className="city">59200 Tourcoing</p>
              </div>
              <div
                className="iconArrow"
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <IoArrowForwardCircleOutline size={25} />
              </div>
            </a>
            <a href="mailto:hello@syb-group.fr" className="mail">
              <div className="containerMail">
                <div
                  className="iconMail"
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-duration="800"
                >
                  <IoMail size={40} />
                </div>
                <h3 className="titleMail">Envoie-nous un mail</h3>
                <p className="email">hello@syb-group.fr</p>
              </div>
              <div
                className="iconArrow"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <IoArrowForwardCircleOutline size={25} />
              </div>
            </a>
          </div>
        </section>
      </section>
      <section>
        <p className="textFunFooterTwo">
          Bon d’ailleurs, purement pour notre référencement
        </p>
        <p className="textFooterTwo">
          <p>Shake Your Business, votre agence de marketing à Lille.</p>
          <p>SYB, agence SEO Lilloise.</p>
          <p>Shake Your Business, votre agence de communication à Lille.</p>
          <p>SYB, agence de prospection BtoB. SYB, agence SEA dans le nord.</p>
          <p>Agence de création de site web à Lille.</p>
        </p>
        <p className="textFooterThree">
          Curieux de savoir si cette phrase sert notre référencement naturel ?
          Appelle-nous.
        </p>
        <div className="lastLine">
          <p className="mentionLegal">mentions légales</p>
          <p className="copyright"> Syb Group © {currentYear}</p>
        </div>
      </section>
    </SFooter>
  );
}
