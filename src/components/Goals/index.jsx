import SGoals from './style';
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
      </section>
    </SGoals>
  );
}
