import photo7 from '../../assets/photo7.jpg';
import photo5 from '../../assets/photo5.jpg';
import { SSlideMethods, TitleMethods } from './style';

export default function Methods() {
  return (
    <>
      <TitleMethods>
        <section className="methods">
          <div className="lineWhiteMethods" />
          <div className="allTitleMethods">
            <p className="titleMethods">Nos méthodes</p>
            <h2 className="subTitleMethods">Notre mécanique bien huilé</h2>
          </div>
        </section>
      </TitleMethods>
      <SSlideMethods>
        <div className="box">
          <img src={photo5} alt="photo1" />
          <h1>Co-créer </h1>
          <p className="contentMethodCrea">
            <p>On se rencontre, on discute </p>
            <p>et on prend un peu de recul.</p>
            <p>Tu donnes ta vision et tes objectifs,</p>
            <p>on t’oriente vers les bons leviers</p>
            <p>et la stratégie à mettre sur pied.</p>
          </p>
        </div>
        <div className="box">
          <img src={photo7} alt="photo1" />
          <h1>Optimiser</h1>
          <p className="contentMethodOptimise">
            <p>Tu donnes to go et on se lance.</p>
            <p>On part de l’existant eton déroule </p>
            <p>un plan d’action béton pour relever </p>le défi que tu nous as
            lancé.
            <p>Oui, on est un peu compétiteur</p> <p>chez SYB.</p>
          </p>
        </div>
        <div className="box">
          <img src={photo5} alt="photo1" />
          <h1>Déployer </h1>
          <p className="contentMethodDeploy">
            <p> On construit, on déploie,</p>
            <p>on duplique. Fais confiance</p>
            <p>à nos Shakers. On te dédie </p>
            <p>le spécialiste de chaque sujet</p>
            <p>pour t’accompagner ! On apprend</p>
            <p>et on ajuste au quotidien</p>
            <p>pour challenger tes performances.</p>
          </p>
        </div>
        <div className="box">
          <img src={photo7} alt="photo1" />
          <h1>Analyser</h1>
          <p className="contentMethodAnalyze">
            <p> Notre vision ROIste oblige :</p> on récolte la data, on analyse{' '}
            <p>et tu reçois les reporting.</p> On mesure précisément résultats{' '}
            <p>obtenus sur chaque levier actionné.</p>
            <p>Alors, défi relevé ??</p>
          </p>
        </div>
      </SSlideMethods>
    </>
  );
}
