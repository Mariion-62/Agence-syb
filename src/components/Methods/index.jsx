import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SSlideMethods, TitleMethods } from './style';

const dataMethods = [
  {
    id: 1,
    title: 'Co-créer',
    contentOne: 'On se rencontre, on discute et on prend un peu de recul.',
    contentTwo: 'Tu donnes ta vision et tes objectifs, on t’oriente vers  ',
    contentThree: 'les bons leviers et la stratégie à mettre sur pied.',
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
  },
  {
    id: 2,
    title: 'Optimiser',
    contentOne:
      'Tu donnes ton go et on se lance. On part de l’existant et on déroule ',
    contentTwo:
      'un plan d’action béton pour relever le défi que tu nous as lancé. ',
    contentThree: 'Oui, on est un peu compétiteur chez SYB. ',
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
  },
  {
    id: 3,
    title: 'Déployer',
    contentOne:
      'On construit, on déploie, on duplique. Fais confiance à nos Shakers.  ',
    contentTwo:
      'On te dédie le spécialiste de chaque sujet pour t’accompagner !',
    contentThree:
      'On apprend et on ajuste au quotidien pour challenger tes performances.',
    picture:
      'https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg',
  },
  {
    id: 4,
    title: 'Analyser',
    contentOne:
      'Notre vision ROIste oblige : on récolte la data, on analyse et tu reçois les reporting. On mesure précisément les résultats obtenus sur ',
    contentTwo: 'chaque levier actionné. Alors, défi relevé ?? ',
    picture:
      'https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_960_720.jpg',
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
          <div className="lineWhiteMethods" />
          <div
            className="allTitleMethods"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
            data-aos-anchor-placement="top"
          >
            <p className="titleMethods">Nos méthodes</p>
            <h2 className="subTitleMethods">Notre mécanique bien huilée</h2>
          </div>
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
                {method.contentOne} <p>{method.contentTwo}</p>{' '}
                <p>{method.contentThree}</p>
              </p>
              <img
                className="imgBox"
                src={method.picture}
                alt={`${method.picture}`}
              />
            </button>
          ))}
        </section>
      </SSlideMethods>
    </>
  );
}
