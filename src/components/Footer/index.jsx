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
          <section className="funFooter">
            <section className="titleFooter">
              <h1>On se rencontre ?</h1>
            </section>
            <p className="textFunFooter">
              Appelle nous, rencontre nous,
              <p>viens nous serrer la pince !</p>
            </p>
          </section>
          <p className="textFooter">
            On adore papoter et encore plus quand c’est pour parler performance
            et business.
            <p> Viens nous tester, nous briefer, nous challenger.</p>
          </p>
        </section>
        <section className="blocRightFooter">
          <div className="social">
            <div id="animSlideToUp" className="containerSocialLogo">
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
            <div id="slideRight" className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </div>
          <a
            href="tel:+0674421793"
            className="phone"
            target="_blank"
            rel="noreferrer"
          >
            <div id="animSlideToUp" className="containerPhone">
              <div className="iconPhone">
                <IoCallOutline size={20} />
              </div>
              <h3 className="titlePhone">Appelle-nous</h3>
            </div>
            <div id="slideRight" className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </a>
          <a
            href="https://www.google.fr/maps/place/SHAKE+YOUR+BUSINESS+-+SYB+GROUP/@50.7011227,3.1559373,17z/data=!3m1!4b1!4m5!3m4!1s0x47c32be3b934f0a9:0xe49a12e53164abe3!8m2!3d50.7011227!4d3.158126"
            target="_blank"
            rel="noreferrer"
            className="adresse"
          >
            <div id="animSlideToUp" className="containerAdresse">
              <div className="iconAdresse">
                <IoLocationSharp size={20} />
              </div>
              <h3 className="titleAdresse">On est ici !</h3>
              <p className="place">Plaine Image,</p>
              <p className="street">99 A Bd Constantin Descat,</p>
              <p className="city">59200 Tourcoing</p>
            </div>
            <div id="slideRight" className="iconArrow">
              <IoArrowForwardCircleOutline />
            </div>
          </a>
          <a href="mailto:hello@syb-group.fr" className="mail">
            <div id="animSlideToUp" className="containerMail">
              <div className="iconMail">
                <IoMail size={20} />
              </div>
              <h3 className="titleMail">Envoies nous un mail</h3>
              <p className="email">hello@syb-group.fr</p>
            </div>
            <div id="slideRight" className="iconArrow">
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
