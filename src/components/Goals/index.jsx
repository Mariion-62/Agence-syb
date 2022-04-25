import SGoals from './style';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo9 from '../../assets/photo9.jpg';
// import arrowWhite from '../../assets/arrowWhite.svg';

export default function Goals() {
  return (
    <SGoals>
      <section className="blocGoal">
        <section className="parafGoal">
          <div className="lineWhiteGoals" />
          <section className="containerTitleGoal">
            <h2 className="titleGoal">Tes objectifs</h2>
            <p className="textFun">
              <p>Promis,</p> l&apos;équipe est super cool !
            </p>
          </section>
          <section className="rightGoals">
            <div className="lineWhiteGoalsText" />
            <p className="textGoal">
              <p>Shake Your Business,</p>
              <p>c&apos;est une équipe de petits malins du marketing</p>
              <p>et du commerce, au service de ton business.</p>
            </p>
            <p className="textGoalTwo">
              <p> Tu veux passer à la vitesse supérieure ?</p>
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
        <section className="peleMele">
          <img className="photo5" src={photo5} alt="photo5" />
          <img className="photo6" src={photo6} alt="photo6" />
          <img className="photo7" src={photo7} alt="photo7" />
          <img className="photo9" src={photo9} alt="photo9" />
        </section>
      </section>
    </SGoals>
  );
}
