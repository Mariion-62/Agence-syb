import photo7 from '../../../assets/photo7.jpg';
import SExpertise from './style';
import Cta from '../../Cta';

export default function HeaderExpertise() {
  return (
    <SExpertise>
      <section className="expertise">
        <div className="blocExpertise">
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
            >
              <h2 className="firstTitleExpertise">Nos expertises</h2>

              <h2 className="titleExpertise">
                &nbsp;&nbsp;&nbsp;Co-créons enfin la bonne stratégie de
                croissance
              </h2>
            </div>
          </section>
          <section className="leftExpertise">
            <div className="lineBlackExpertise" />
            <div className="content">
              <p
                className="textOneExpertise"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                Tu es au bon endroit. Ici c’est moins de blabla, plus de
                résultats. Notre équipe de Shakers t’écoute, t’accompagne et
                actionne les bons leviers de la communication, du marketing et
                du commerce. Chacun d’entre nous a son petit dada. De la
                stratégie à l’opérationnel, nous intervenons sur tes
                problématiques de prospection, fidélisation, activation,
                transformation et d’autres trucs qui se finissent en “ion”. Toi
                tu gères ton business, nous on s’occupe du reste. On bosse
                ensemble et on crée un cercle vertueux pour démultiplier l’effet
                de nos actions.
              </p>
              <p
                className="textTwoExpertise"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                Et si SYB devenait le partenaire de ta réussite ?
                <p className="textThreeExpertise">
                  Viens voir de quoi on est capable.
                </p>
              </p>
            </div>
          </section>
        </div>
      </section>
    </SExpertise>
  );
}
