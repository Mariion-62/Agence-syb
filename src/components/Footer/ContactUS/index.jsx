import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoCallOutline,
  IoLocationSharp,
  IoArrowForwardCircleOutline,
  IoLogoFacebook,
} from 'react-icons/io5';
import SContactUs from './style';

export default function ContactUs() {
  return (
    <SContactUs>
      <section className="blocRightFooter">
        <div className="gridFooter">
          <div className="social">
            <div className="containerSocialLogo">
              <div className="socialLogo">
                <a
                  href="https://www.instagram.com/syb_group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="iconInsta"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="800"
                  >
                    <IoLogoInstagram size={40} />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/AGENCE.SYB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="iconFacebook"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="800"
                  >
                    <IoLogoFacebook size={40} />
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
                    data-aos-offset="200"
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
              data-aos-offset="200"
              data-aos-duration="800"
            >
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
          <a
            href="tel:+0320160502"
            className="phone"
            target="_blank"
            rel="noreferrer"
          >
            <div className="containerPhone">
              <div
                className="iconPhone"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
              >
                <IoCallOutline size={40} />
              </div>
              <h3 className="titlePhone">Appelle-nous</h3>
            </div>
            <div
              data-aos="fade-up"
              className="iconArrow"
              data-aos-offset="200"
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
                data-aos-offset="200"
                data-aos-duration="800"
              >
                <IoLocationSharp size={40} />
              </div>
              <h3 className="titleAdresse">On est ici !</h3>
              <p className="place">
                Plaine Images,
                <br /> 99 A Bd Constantin Descat,
                <br /> 59200 Tourcoing
              </p>
            </div>
            <div
              className="iconArrow"
              data-aos="fade-up"
              data-aos-offset="200"
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
                data-aos-offset="200"
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
              data-aos-offset="200"
              data-aos-duration="800"
            >
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </a>
        </div>
      </section>
    </SContactUs>
  );
}
