import { useState, useEffect } from 'react';
import Aos from 'aos';
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
    contentFour:
      'Tu donnes ta vision et tes objectifs, on t’oriente vers les bons leviers et la stratégie à mettre sur pied.',
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
    button: 'Je crée',
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
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
    button: "J'optimise",
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
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
    button: 'Je déploie',
  },
  {
    id: 4,
    title: 'Analyser',
    contentOne: 'Notre vision ROIste oblige :',
    contentTwo: 'on traque, on triture et on analyse la data. ',
    contentThree:
      'On échange régulièrement pour t’expliquer les résultats de chacune de nos actions. ',
    contentFour: 'Alors, défi relevé ?? ',
    picture:
      'https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_960_720.jpg',
    button: "J'analyse",
  },
];
export default function Methods() {
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
            data-aos-offset="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top"
          >
            Une mécanique bien huilée
          </h2>
          <div
            className="allTitleMethods"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top"
          >
            <p className="titleMethods">Notre méthode</p>
          </div>
          <div className="lineWhiteMethods" />
        </section>
      </TitleMethods>
      <SSlideMethods>
        <section className="containerBox">
          {dataMethods.map((method) => (
            <button
              type="button"
              key={method.id}
              className={showBox === method.id ? 'boxMethods' : 'hiddenBox'}
              onClick={() => viewBox(method.id)}
            >
              <h1 className="titleBox">{method.title}</h1>
              <p className="contentMethods">
                {method.contentOne} <p>{method.contentTwo}</p>
                <p>{method.contentThree}</p>
                <p>{method.contentFour}</p>
              </p>
              <img
                className="imgBox"
                src={method.picture}
                alt={`${method.picture}`}
              />
              <button type="button" className="btnMethod">
                {method.button}
              </button>
            </button>
          ))}
        </section>
      </SSlideMethods>
    </>
  );
}
