import { useEffect } from 'react';
import Aos from 'aos';
import SSliderSentence from './style';
import 'aos/dist/aos.css';

export default function SentenceDownSlider() {
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
      <SSliderSentence>
        <section className="allSentence">
          <div className="funSentence">
            <p
              className="textFunSentenceOne"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="800"
            >
              <p>Promis,</p> <p>l’équipe est cool !</p>
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
                <p>Chez SYB,</p>
                <p>on a plus d’un tour dans notre sac.</p>
                <p>
                  Mais comme on a pas assez de place
                  <p>sur un site web pour étaler notre science,</p> on aimerait
                  mieux en discuter de vive voix.
                </p>
              </p>
              <p
                className="textSentenceTwo"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="800"
              >
                <p>Alors, on s’appelle</p> <p>pour voir jusqu’où</p>
                <p>on peut aller ensemble ?</p>
              </p>
            </section>{' '}
          </div>
        </section>
      </SSliderSentence>
    </>
  );
}
