import soixanteDouzeH from '../../../assets/logoClients/soixanteDouzeH.png';
import Axa from '../../../assets/logoClients/Axa.png';
import Boulanger from '../../../assets/logoClients/Boulanger.png';
import caisseEpargne from '../../../assets/logoClients/CaisseEpargne.png';
import cdh from '../../../assets/logoClients/CDH.png';
import DPPatrimoine from '../../../assets/logoClients/DPPatrimoine.png';
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
          data-aos-offset="500"
          data-aos-duration="800"
        >
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
          </div>{' '}
        </div>
        <div
          className="containerLogoSecond"
          data-aos="fade-up"
          data-aos-offset="500"
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
            <img src={NPE} alt="img" />
          </div>
          <div>
            <img src={Yper} alt="img" />
          </div>{' '}
        </div>
      </div>
    </SLogo>
  );
}
