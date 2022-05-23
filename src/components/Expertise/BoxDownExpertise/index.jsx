import { useEffect } from 'react';
import Aos from 'aos';
import SBoxDownExpertise from './style';
import 'aos/dist/aos.css';

export default function BoxDownExpertise() {
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
              id="titleSentenceFirst"
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
                Chez SYB, on a plus d’un tour dans notre sac. Mais comme on a
                pas assez de place sur un site web pour étaler notre science, on
                aimerait mieux en discuter de vive voix.
              </p>
              <p
                className="textSentenceTwo"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="800"
              >
                Alors, on s’appelle pour voir jusqu’où on peut aller ensemble ?
              </p>
            </section>
          </div>
        </section>
      </SBoxDownExpertise>
    </>
  );
}
