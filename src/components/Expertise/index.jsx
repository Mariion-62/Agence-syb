import SliderExpertise from 'components/SliderExpertise';
import SentenceDownSlider from 'components/SentenceDownSlider';
import Cta from 'components/Cta';
import photo7 from '../../assets/photo7.jpg';
// import arrowBlack from '../../assets/arrowBlack.svg';

import SExpertise from './style';

export default function Expertise() {
  return (
    <>
      <SExpertise>
        <section className="expertise">
          <section className="rightExpertise">
            <img className="photo7" src={photo7} alt="photo7" />
            <div className="ctaExpertise">
              <Cta />
            </div>
            <div className="allTitle">
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
              <p className="textOneExpertise">
                <p>Tu es au bon endroit. Ici c’est moins</p>
                <p>de blabla, plus de résultats.</p>
                <p>Notre équipe de Shakers t’écoute,</p>
                <p> t’accompagne et actionne</p>
                les bons leviers marketing et commerciaux.
                <p>Notre mode de fonctionnement ?</p>
                <p>Chacun d’entre nous a son petit dada.</p> Toi tu gères ton
                business, <p>nous on s’occupe de le faire décoller.</p>
                <p>
                  On bosse ensemble et on crée un cercle vertueux pour
                  démultiplier l’effet de nos actions.
                </p>
              </p>
              <p className="textTwoExpertise">
                Et si SYB devenait le nouveau partenaire de ta réussite ?
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
