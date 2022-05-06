import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SGoals from './style';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo9 from '../../assets/photo9.jpg';

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
          <section
            className="containerTitleGoal"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            <p className="textFun">Tu veux passer à la vitesse supérieure ?</p>
          </section>
          <section className="rightGoals">
            <h2
              className="titleGoal"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Tes objectifs
            </h2>
            <div className="lineWhiteGoalsText" />
            <p
              className="textGoal"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Bâtir une marque forte, attirer plus de trafic on et offline,
              <p>
                générer plus de leads,engager les clients et les communautés,
              </p>
              augmenter la conversion pour vendre plus et mieux.
              <p>Ces objectifs te parlent ?</p> SYB te permet de les atteindre.
            </p>
            <p
              className="textGoalTwo"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Et si on commençait par discuter de tes objectifs et de ROI ?
            </p>
            <button
              className="btnMeet"
              type="button"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Viens nous rencontrer
            </button>
          </section>
        </section>
        <section
          className="peleMele"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-duration="800"
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
