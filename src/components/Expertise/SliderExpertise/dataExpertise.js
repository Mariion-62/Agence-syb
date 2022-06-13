import photoStrat from '../../../assets/Strategie/john-schnobrich-2FPjlAyMQTA-unsplash.jpg';
import photoWeb from '../../../assets/WebDesign/pexels-tranmautritam-326503.jpg';
import photoCrea from '../../../assets/Creativite/pexels-flo-dahm-699459.jpg';
import photoSeo from '../../../assets/SEA_SEO/scott-graham-5fNmWej4tAA-unsplash.jpg';
import photoSea from '../../../assets/SEA_SEO/pexels-george-morina-4960323.jpg';
import photoSocial from '../../../assets/ReseauxSociaux/pexels-picjumbocom-196655.jpg';
import photoClient from '../../../assets/RelationClient/redd-5U_28ojjgms-unsplash.jpg';

const dataExpertise = [
  {
    id: 1,
    title: 'Stratégie',
    firstTextExpert: 'On et offline',
    secondTextExpert: 'BtoB et BtoC',
    thirdTextExpert: 'E-commerce, DNVB, Retail',
    picture: `${photoStrat}`,
  },
  {
    id: 2,
    title: 'Créativité',
    firstTextExpert: 'Support digitaux et print',
    secondTextExpert: 'Photo, vidéo, motion design',
    thirdTextExpert: ' Territoire et identité de marque',
    picture: `${photoCrea}`,
  },
  {
    id: 3,
    title: 'Site Web',
    firstTextExpert: 'UX/UI',
    secondTextExpert: 'Webdesign',
    thirdTextExpert: 'Création et refonte de site',
    picture: `${photoWeb}`,
  },
  {
    id: 4,
    title: 'SEO',
    firstTextExpert: 'Audit SEO',
    secondTextExpert: 'Rédaction de contenu',
    thirdTextExpert: ' Technique, sémantique et netlinking',
    picture: `${photoSeo}`,
  },
  {
    id: 5,
    title: 'SEA',
    firstTextExpert: 'Affiliation',
    secondTextExpert: 'Retargeting',
    thirdTextExpert: 'Google Ads et Social Ads',
    picture: `${photoSea}`,
  },
  {
    id: 6,
    title: 'Réseaux sociaux',
    firstTextExpert: 'Automation',
    secondTextExpert: 'Community management',
    thirdTextExpert: 'Ligne éditoriale et publication',
    picture: `${photoSocial}`,
  },
  {
    id: 7,
    title: 'Relation Client',
    firstTextExpert: 'Newsletter',
    secondTextExpert: 'CRM, data, automation',
    thirdTextExpert: 'Prospection et relation client téléphonique',
    picture: `${photoClient}`,
  },
];

export default dataExpertise;
