import { useState, useEffect } from 'react';
import Aos from 'aos';
import CtaCoCreate from '../../assets/Cta/Co-Creons.png';
import CtaOptimise from '../../assets/Cta/Optimisons.png';
import CtaDeploy from '../../assets/Cta/Deployons.png';
import CtaAnalyze from '../../assets/Cta/Analysons.png';
import CreaPhoto from '../../assets/PlaineImages/sybshooting_pi-14.jpg';
import AnalysePhoto from '../../assets/PlaineImages/sybshooting_pi-53.jpg';
import OptimisePhoto from '../../assets/RelationClient/annie-spratt-QckxruozjRg-unsplash.jpg';
import DeployPhoto from '../../assets/ReseauxSociaux/pexels-picjumbocom-196655.jpg';
import 'aos/dist/aos.css';
import { SSlideMethods, TitleMethods } from './style';

const dataMethods = [
  {
    id: 1,
    title: 'Co-créer',
    contentOne: 'On se rencontre, on discute. ',
    contentTwo: 'Tu nous partage ta vision et tes objectifs.   ',
    contentThree:
      'On prend un peu de recul pour choisir ensemble les bons leviers et stratégie à mettre sur pied.  ',

    picture: `${CreaPhoto}`,
    button: `${CtaCoCreate}`,
  },
  {
    id: 2,
    title: 'Optimiser',
    contentOne: 'On part de l’existant,',
    contentTwo: 'on le challenge et on l’améliore.',
    contentThree:
      'A partir de là, on déroule un plan d’action béton pour relever le défi que tu nous as lancé. ',
    contentFour:
      'On peut même former tes équipes à devenir meilleures que nous sur le sujet !  ',
    picture: `${OptimisePhoto}`,
    button: `${CtaOptimise}`,
  },
  {
    id: 3,
    title: 'Déployer',
    contentOne: 'On construit, on déploie, on duplique.',
    contentTwo: 'Fais confiance à nos Shakers.  ',
    contentThree:
      'On te dédie le spécialiste de chaque sujet pour t’accompagner !',
    contentFour:
      'On apprend et on ajuste au quotidien pour challenger tes performances.',
    picture: `${DeployPhoto}`,
    button: `${CtaDeploy}`,
  },
  {
    id: 4,
    title: 'Analyser',
    contentOne: 'Notre vision ROIste oblige :',
    contentTwo: 'on traque, on triture et on analyse la data. ',
    contentThree:
      'On échange régulièrement pour t’expliquer les résultats de chacune de nos actions. ',
    contentFour: 'Alors, défi relevé ?? ',
    picture: `${AnalysePhoto}`,
    button: `${CtaAnalyze}`,
  },
];
export default function Methods() {
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
  // useState to change state of boxes at onClick
  const [showBox, setShowBox] = useState(1);
  function viewBox(index) {
    setShowBox(index);
  }
  return (
    <>
      <TitleMethods>
        <section className="methods">
          <h2
            className="subTitleMethods"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            Une mécanique <br />
            bien huilée
          </h2>
          <div
            className="allTitleMethods"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            <p className="titleMethods">Notre méthode</p>
          </div>
          <div className="lineWhiteMethods" />
        </section>
      </TitleMethods>
      <SSlideMethods>
        <section
          className="containerBox"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="800"
        >
          {dataMethods.map((method) => (
            <button
              type="button"
              key={method.id}
              className={showBox === method.id ? 'boxMethods' : 'hiddenBox'}
              onClick={() => viewBox(method.id)}
            >
              <h1 className="titleBox">{method.title}</h1>
              <p className="contentMethods">
                {method.contentOne}
                <br /> {method.contentTwo}
                <br />
                {method.contentThree}
                <br />
                {method.contentFour}
              </p>
              <img
                className="imgBox"
                src={method.picture}
                alt={`${method.picture}`}
              />
              <button type="button" className="btnMethod">
                <a
                  href="mailto:hello@syb-group.fr?subject=On se rencontre quand ?"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="imgBtn"
                    src={method.button}
                    alt={`${method.title}`}
                  />
                </a>
              </button>
            </button>
          ))}
        </section>
      </SSlideMethods>
    </>
  );
}
