import SliderExpertise from 'components/SliderExpertise';
import SentenceDownSlider from 'components/SentenceDownSlider';
import Cta from 'components/Cta';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import photo7 from '../../assets/photo7.jpg';
// import arrowBlack from '../../assets/arrowBlack.svg';

import SExpertise from './style';

export default function Expertise() {
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
      <SExpertise>
        <section className="expertise">
          <section className="rightExpertise">
            <img className="photo7" src={photo7} alt="photo7" />
            <div className="ctaExpertise">
              <Cta />
            </div>
            <div
              className="allTitle"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
              data-aos-anchor-placement="top"
            >
              <h2 className="firstTitleExpertise">Nos expertises</h2>
              <div className="allTitleExpertise">
                <h2 className="titleExpertise">Co-créons enfin</h2>
                <h2 className="titleExpertise">la bonne stratégie</h2>
                <h2 className="titleExpertise">de croissance</h2>
              </div>
            </div>
          </section>
          <section className="leftExpertise">
            <div className="lineBlackExpertise" />
            <div className="content">
              <p
                className="textOneExpertise"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="800"
                data-aos-anchor-placement="top"
              >
                <p>Tu es au bon endroit. Ici c’est moins</p>
                <p>de blabla, plus de résultats.</p>
                <p>Notre équipe de Shakers t’écoute,</p>
                <p> t’accompagne et actionne</p>
                les bons leviers de la communication,
                <p>du marketing et du commerce.</p>
                <p>Chacun d’entre nous a son petit dada.</p>
                <p>
                  De la stratégie à l’opérationnel, nous intervenons sur tes
                  problématiques de prospection, fidélisation, activation,
                  transformation
                  <p>et d’autres trucs qui se finissent en “ion”.</p>
                </p>
                <p>Toi tu gères ton business, nous on s’occupe du reste.</p>
                <p>
                  On bosse ensemble et on crée un cercle vertueux pour
                  démultiplier l’effet de nos actions.
                </p>
              </p>
              <p
                className="textTwoExpertise"
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="800"
                data-aos-anchor-placement="top"
              >
                Et si SYB devenait le nouveau partenaire de ta réussite ?
                <p className="textThreeExpertise">
                  Viens voir de quoi on est capable.
                </p>
              </p>
            </div>
          </section>
        </section>
        <SentenceDownSlider />
        <SliderExpertise />
      </SExpertise>
    </>
  );
}
