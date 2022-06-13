import SSeo from './style';

export default function Seo() {
  return (
    <SSeo>
      <section>
        <p className="textFunFooterTwo">
          Bon d’ailleurs, purement pour notre référencement
        </p>
        <p className="textFooterTwo">
          <span className="bolder">Shake Your Business</span>, votre agence de
          marketing à <span className="bolder">Lille</span>. SYB,{' '}
          <span className="bolder">agence SEO </span>
          Lilloise. <br /> Shake Your Business, votre agence de{' '}
          <span className="bolder">communication</span> à Lille. SYB, agence{' '}
          <br />
          de
          <span className="bolder"> prospection BtoB</span>. SYB, agence{' '}
          <span className="bolder">SEA</span> dans le nord. Agence de{' '}
          <span className="bolder">création de site web</span> à Lille.
        </p>
        <p className="textFooterThree">
          Curieux de savoir si cette phrase sert notre référencement naturel ?
          <br />
          <a href="tel:+0622174495" target="_blank" rel="noreferrer">
            Appelle-nous.
          </a>
        </p>
      </section>
    </SSeo>
  );
}
