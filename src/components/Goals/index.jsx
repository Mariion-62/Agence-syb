import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiTarget } from 'react-icons/fi';
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
            <p className="textFun">
              Tu veux passer à <br />
              la vitesse supérieure ?
            </p>
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
            <ul
              className="textGoal"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <li className="listGoal">
                <div className="iconTarget">
                  <FiTarget size={20} />
                </div>
                <span className="bolder">Bâtir </span>&nbsp;une marque forte
              </li>
              <li className="listGoal">
                <div className="iconTarget">
                  <FiTarget size={20} />
                </div>
                <span className="bolder">Attirer</span>&nbsp;plus de trafic on
                et offline
              </li>
              <li className="listGoal">
                <div className="iconTarget">
                  {' '}
                  <FiTarget size={20} />
                </div>
                <span className="bolder">Générer</span>&nbsp;plus de leads
              </li>
              <li className="listGoal">
                <div className="iconTarget">
                  {' '}
                  <FiTarget size={20} />
                </div>
                <span className="bolder">Engager</span>&nbsp;les clients
              </li>
              <li className="listGoal">
                <div className="iconTarget">
                  <FiTarget size={20} />
                </div>
                <span className="bolder"> Construire</span>&nbsp;les communautés
              </li>
              <li className="listGoal">
                <div className="iconTarget">
                  {' '}
                  <FiTarget size={20} />
                </div>
                <span className="bolder">Augmenter</span>&nbsp;la conversion
                pour vendre plus et mieux.
              </li>
            </ul>
            <p
              className="textGoalTwo"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="800"
            >
              Ces objectifs te parlent ? SYB te permet de les atteindre.
            </p>
            <p
              className="textGoalThree"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="800"
            >
              Et si on commençait par discuter de tes objectifs et de ROI ?
            </p>{' '}
            <button
              type="button"
              className="btnMeet"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="800"
            >
              <a
                href="mailto:hello@syb-group.fr?subject=Première rencontre"
                target="_blank"
                rel="noreferrer"
              >
                Viens nous rencontrer
              </a>
            </button>
          </section>
        </section>
        <PellMell />
      </section>
    </SGoals>
  );
}
