import 'aos/dist/aos.css';
import SBoxDownExpertise from './style';
import CallUs from '../../../assets/Cta/callUS.png';

export default function BoxDownExpertise() {
  return (
    <>
      <SBoxDownExpertise>
        <section className="allSentence">
          <div className="funSentence">
            <p
              className="textFunSentenceOne"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="800"
            >
              Promis, <br />
              l’équipe est cool !
            </p>
          </div>
          <div className="contentSentence">
            <h2
              classeName="firstTitleSentence"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="800"
            >
              T’en veux encore ?
            </h2>
            <div className="lineBlackDownSlider" />
            <section className="rightBlocSentence">
              <p
                className="textSentenceDownSlider"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
              >
                Chez SYB, on a plus d’un tour dans notre sac. <br />
                Mais comme on a pas assez de place sur un site web pour étaler
                notre science, on aimerait mieux <br />
                en discuter de vive voix.
              </p>
              <p
                className="textSentenceTwo"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="800"
              >
                Alors, on s’appelle <br />
                pour voir jusqu’où on peut aller ensemble ?
              </p>
              <a href="tel:+0622174495" target="_blank" rel="noreferrer">
                <img className="ctaCallUs" src={CallUs} alt="appelle-nous" />
              </a>
            </section>
          </div>
        </section>
      </SBoxDownExpertise>
    </>
  );
}
