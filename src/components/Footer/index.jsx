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

  return (
    <SFooter>
      <section className="allFooter">
        <section className="blocLeftFooter">
          <div className="lineWhiteFooter" />
          <section className="funFooter">
            <h1 className="titleContact">Contact</h1>
            <p className="textFunFooterOne">
              Appelle nous, rencontre nous, viens nous serrer la pince !
            </p>
          </section>
        </section>
        <section className="blocRightFooter">
          <div className="footerLineText">
            <div className="lineWhiteFooterText" />
            <p className="textFooterOne">
              On adore papoter et encore plus quand c’est pour parler
              performance et business.
              <p> Viens nous tester, nous briefer, nous challenger.</p>
            </p>
          </div>
          <div className="social">
            <div className="containerSocialLogo">
              <div className="socialLogo">
                <a
                  href="https://fr.linkedin.com/company/syb-group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="iconInsta">
                    <IoLogoInstagram size={20} />
                  </div>
                </a>
                <a
                  href="https://fr.linkedin.com/company/syb-group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="iconLinkedIn">
                    <IoLogoLinkedin size={20} />
                  </div>
                </a>
              </div>
              <h3 className="titleFollow">Suivez-nous</h3>
            </div>
            <div className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </div>
          <a
            href="tel:+0674421793"
            className="phone"
            target="_blank"
            rel="noreferrer"
          >
            <div className="containerPhone">
              <div className="iconPhone">
                <IoCallOutline size={20} />
              </div>
              <h3 className="titlePhone">Appelle-nous</h3>
            </div>
            <div className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </a>
          <a
            href="https://www.google.fr/maps/place/SHAKE+YOUR+BUSINESS+-+SYB+GROUP/@50.7011227,3.1559373,17z/data=!3m1!4b1!4m5!3m4!1s0x47c32be3b934f0a9:0xe49a12e53164abe3!8m2!3d50.7011227!4d3.158126"
            target="_blank"
            rel="noreferrer"
            className="adresse"
          >
            <div className="containerAdresse">
              <div className="iconAdresse">
                <IoLocationSharp size={20} />
              </div>
              <h3 className="titleAdresse">On est ici !</h3>
              <p className="place">Plaine Image,</p>
              <p className="street">99 A Bd Constantin Descat,</p>
              <p className="city">59200 Tourcoing</p>
            </div>
            <div className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </a>
          <a href="mailto:hello@syb-group.fr" className="mail">
            <div className="containerMail">
              <div className="iconMail">
                <IoMail size={20} />
              </div>
              <h3 className="titleMail">Envoies nous un mail</h3>
              <p className="email">hello@syb-group.fr</p>
            </div>
            <div className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </a>
        </section>
      </section>
      <section>
        <p className="copyright"> Syb Group © {currentYear}</p>
      </section>
    </SFooter>
  );
}
