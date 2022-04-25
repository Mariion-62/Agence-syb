import soixanteDouzeH from '../../assets/logoClients/soixanteDouzeH.png';
import Axa from '../../assets/logoClients/Axa.png';
import Boulanger from '../../assets/logoClients/Boulanger.png';
import caisseEpargne from '../../assets/logoClients/CaisseEpargne.png';
import cdh from '../../assets/logoClients/CDH.png';
import DPPatrimoine from '../../assets/logoClients/DPPatrimoine.png';
import Edilians from '../../assets/logoClients/Edilians.png';
import Ineo from '../../assets/logoClients/Ineo.png';
import Kinkelder from '../../assets/logoClients/Kinkelder.png';
import Koltrain from '../../assets/logoClients/Koltrain.png';
import Lazare from '../../assets/logoClients/Lazare.png';
import Meo from '../../assets/logoClients/Meo.png';
import NPE from '../../assets/logoClients/NPE.png';
import Yper from '../../assets/logoClients/Yper.png';
import { HeaderClient, AllClient, STrustFolio, SLogo } from './style';

export default function Client() {
  return (
    <>
      <AllClient id="client">
        <HeaderClient className="headerClient">
          <h2 className="titleClient">
            Si eux nous on fait confiance, pourquoi pas toi ?{' '}
          </h2>
          <SLogo>
            <div className="containerSlide">
              <div>
                <img src={soixanteDouzeH} alt="img" />
              </div>
              <div>
                <img src={Axa} alt="img" />
              </div>
              <div>
                <img src={Boulanger} alt="img" />
              </div>
              <div>
                <img src={caisseEpargne} alt="img" />
              </div>
              <div>
                <img src={cdh} alt="img" />
              </div>
              <div>
                <img src={DPPatrimoine} alt="img" />
              </div>
              <div>
                <img src={Edilians} alt="img" />
              </div>
              <div>
                <img src={Ineo} alt="img" />
              </div>
              <div>
                <img src={Kinkelder} alt="img" />
              </div>
              <div>
                <img src={Koltrain} alt="img" />
              </div>
              <div>
                <img src={Lazare} alt="img" />
              </div>
              <div>
                <img src={Meo} alt="img" />
              </div>
              <div>
                <img src={NPE} alt="img" />
              </div>
              <div>
                <img src={Yper} alt="img" />
              </div>
            </div>
          </SLogo>
          <h2 className="itsThem">C’est eux qui le disent… </h2>
          <STrustFolio>
            <a
              className="trustfolio-iframe-widget"
              data-name="endorsements-infinite-slider"
              data-color="FCD629"
              data-limit="10"
              data-selection="JQFM6FpD50,7lZeIn8SDA,b9i3ZVkxUe,m6sKPs6OTD,HtK3EmZOOa"
              href="https://trustfolio.co/profil/syb-group-9oEMTG3Of"
              target="_blank"
              rel="noreferrer"
            >
              Découvrez les témoignages de nos clients
            </a>
          </STrustFolio>
        </HeaderClient>
      </AllClient>
    </>
  );
}
