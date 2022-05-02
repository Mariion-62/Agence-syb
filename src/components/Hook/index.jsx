import { useEffect } from 'react';
import Aos from 'aos';
import SHook from './style';
import internalVideo from '../../assets/SYB_Motion_Web.mp4';
import 'aos/dist/aos.css';

export default function Hook() {
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
      <SHook>
        <section className="allHook">
          <div className="lineWhiteHook" />
          <p
            className="textHook"
            data-aos="fade-down"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            Bâtir des marques fortes, attirer plus de trafic on et offline,
            générer plus de leads, engager les clients et les communautés,
            augmenter la conversion pour vendre plus et mieux.
            <p>Ces objectifs vous parlent ?</p>
            <p>SYB vous permet de les atteindre.</p>
          </p>
          <video
            className="video"
            muted
            loop
            autoPlay
            width="100%"
            height="75%"
          >
            <source src={internalVideo} />
          </video>
        </section>
      </SHook>
    </>
  );
}
