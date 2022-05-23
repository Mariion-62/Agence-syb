import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HeaderClient, AllClient } from './style';
import LogoClients from './LogoClients';
import Trustfolio from './Trustfolio';

export default function Client() {
  // animation for to do appear text
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
      <AllClient id="client">
        <HeaderClient className="headerClient">
          <h2
            className="titleClient"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            B2B / B2C, s’ils nous font confiance,
            <br /> pourquoi pas toi ?

          </h2>
          <div className="lineBlackClients" />
          <LogoClients />
          <h2
            className="itsThem"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            C’est eux qui le disent…
          </h2>
          <div className="lineBlackClients" />
          <Trustfolio />
        </HeaderClient>
      </AllClient>
    </>
  );
}
