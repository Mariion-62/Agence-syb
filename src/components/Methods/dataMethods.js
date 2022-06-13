import CtaCoCreate from '../../assets/Cta/Co-Creons.png';
import CtaOptimise from '../../assets/Cta/Optimisons.png';
import CtaDeploy from '../../assets/Cta/Deployons.png';
import CtaAnalyze from '../../assets/Cta/Analysons.png';
import CreaPhoto from '../../assets/PlaineImages/sybshooting_pi-14.jpg';
import AnalysePhoto from '../../assets/PlaineImages/sybshooting_pi-53.jpg';
import OptimisePhoto from '../../assets/PlaineImages/syb_shooting_laptop-14.jpg';
import DeployPhoto from '../../assets/PlaineImages/syb_shooting_laptop-23.jpg';

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

export default dataMethods;
