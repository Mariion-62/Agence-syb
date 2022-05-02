import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SGoals from './style';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo9 from '../../assets/photo9.jpg';
// import arrowWhite from '../../assets/arrowWhite.svg';

export default function Goals() {
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
    <SGoals>
      <section className="blocGoal">
        <section className="parafGoal">
          <div className="lineWhiteGoals" />
          <section
            className="containerTitleGoal"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="titleGoal">Tes objectifs</h2>
            <p className="textFun">
              <p>Promis,</p> l&apos;équipe est super cool !
            </p>
          </section>
          <section className="rightGoals">
            <div className="lineWhiteGoalsText" />
            <p
              className="textGoal"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
            >
              <p>Shake Your Business,</p>
              <p>c&apos;est une équipe de petits malins du marketing</p>
              <p>et du commerce, au service de ton business.</p>
            </p>
            <p
              className="textGoalTwo"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
            >
              <p>Tu veux passer à la vitesse supérieure ?</p>
              <p>Et si on commençait par discuter chiffre </p>
              <p>et ROI ? Viens nous rencontrer</p>
              <p>pour discuter de tes objectifs</p>
              <p>
                autour d&apos;un café bien serré, d’un thé ou d&apos;une bière,
              </p>
              <p>on aime ça aussi.</p>
            </p>
          </section>
        </section>
        <section
          className="peleMele"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          <img className="photo5" src={photo5} alt="photo5" />
          <img className="photo6" src={photo6} alt="photo6" />
          <img className="photo7" src={photo7} alt="photo7" />
          <img className="photo9" src={photo9} alt="photo9" />
        </section>
      </section>
    </SGoals>
  );
}
