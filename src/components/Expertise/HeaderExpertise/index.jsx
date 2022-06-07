import photoExpertise from '../../../assets/PlaineImages/sybshooting_pi-45.jpg';
import SExpertise from './style';
import CtaBrief from '../../CtaBrief';

export default function HeaderExpertise() {
  return (
    <SExpertise>
      <section className="expertise">
        <div className="blocExpertise">
          <section className="rightExpertise">
            <div className="opacity" />
            <img className="photo7" src={photoExpertise} alt="expertise" />

            <div className="ctaExpertise">
              <CtaBrief />
            </div>
            <div
              className="allTitle"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <h2 className="firstTitleExpertise">Nos expertises</h2>
              <h2 className="titleExpertise">
                Co-créons enfin <br />
                la bonne stratégie <br /> de croissance
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
                Tu es au bon endroit. Ici c’est moins <br />
                de blabla, plus de résultats. Notre équipe <br />
                de Shakers t’écoute, t’accompagne et actionne les bons leviers
                de la <span className="bolder">communication</span>, <br />
                du
                <span className="bolder"> marketing</span> et du{' '}
                <span className="bolder"> commerce</span>.
                <br /> Chacun d’entre nous a son petit dada.
                <br /> De la stratégie à l’opérationnel, nous intervenons sur
                tes problématiques de{' '}
                <span className="bolder">prospection</span>,{' '}
                <span className="bolder">fidélisation</span>,{' '}
                <span className="bolder">activation</span>,
                <span className="bolder"> transformation</span> <br />
                et d’autres trucs qui se finissent en “ion”.
                <br /> Toi tu gères ton business, nous on s’occupe <br />
                du reste. On bosse ensemble et on crée un cercle vertueux pour
                démultiplier l’effet de nos actions.
              </p>

              <div>
                <p
                  className="textTwoExpertise"
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-duration="800"
                >
                  Et si SYB devenait le partenaire <br />
                  de ta réussite ?
                </p>
                <p
                  className="textTwoExpertise"
                  data-aos="fade-up"
                  data-aos-offset="500"
                  data-aos-duration="800"
                >
                  Viens voir de quoi on est capable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </SExpertise>
  );
}
