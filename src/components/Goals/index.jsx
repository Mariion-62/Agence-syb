import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SGoals from './style';
import PellMell from './PellMell';

export default function Goals() {
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
              générer plus de leads, engager les clients et les communautés,
              augmenter la conversion pour vendre plus et mieux.
            </p>
            <p
              className="textGoalTwo"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Ces objectifs te parlent ? SYB te permet de les atteindre.
            </p>
            <p
              className="textGoalThree"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              Et si on commençait par discuter de tes objectifs et de ROI ?
            </p>
            <a
              href="mailto:hello@syb-group.fr?subject=Première rencontre"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btnMeet"
                type="button"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                Viens nous rencontrer
              </button>
            </a>
          </section>
        </section>
        <PellMell />
      </section>
    </SGoals>
  );
}
