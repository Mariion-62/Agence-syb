import soixanteDouzeH from '../../../assets/logoClients/soixanteDouzeH.png';
import Axa from '../../../assets/logoClients/Axa.png';
import AAAG from '../../../assets/logoClients/AAAG.png';
import caisseEpargne from '../../../assets/logoClients/CaisseEpargne.png';
import cdh from '../../../assets/logoClients/CDH.png';
import Helexia from '../../../assets/logoClients/Helexia.png';
import Edilians from '../../../assets/logoClients/Edilians.png';
import Ineo from '../../../assets/logoClients/Ineo.png';
import Kinkelder from '../../../assets/logoClients/Kinkelder.png';
import Koltrain from '../../../assets/logoClients/Koltrain.png';
import Meo from '../../../assets/logoClients/Meo.png';
import NPE from '../../../assets/logoClients/NPE.png';
import Yper from '../../../assets/logoClients/Yper.png';
import SLogo from './style';

export default function LogoClients() {
  return (
    <SLogo>
      <div className="allContainerLogo">
        <div
          className="containerLogoFirst"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="800"
        >
          <div>
            <img className="soixanteDouzeH" src={soixanteDouzeH} alt="img" />
          </div>
          <div>
            <img className="logoAXA" src={Axa} alt="img" />
          </div>
          <div>
            <img className="logoAAAG " src={AAAG} alt="img" />
          </div>
          <div>
            <img className="logoCE" src={caisseEpargne} alt="img" />
          </div>
          <div>
            <img className="logoCDH" src={cdh} alt="img" />
          </div>
          <div>
            <img className="logoNPE" src={NPE} alt="img" />
          </div>
          <div>
            <img src={Edilians} alt="img" />
          </div>
        </div>
        <div
          className="containerLogoSecond"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="800"
        >
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
            <img src={Meo} alt="img" />
          </div>
          <div>
            <img className="Helexia" src={Helexia} alt="img" />
          </div>
          <div>
            <img src={Yper} alt="img" />
          </div>{' '}
        </div>
      </div>
    </SLogo>
  );
}
