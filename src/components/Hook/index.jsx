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
            Shake Your Business,
            <p>c’est une équipe de petits malins du marketing,</p>
            de la communication et du commerce,
            <p>au service de la croissance de ton business.</p>
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
