import SFooter from './style';

export default function HeaderFooter() {
  return (
    <SFooter>
      <section className="allFooter">
        <section className="blocLeftFooter">
          <section
            className="funFooter"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            <h1 className="titleContact">Contact</h1>
            <p className="textFunFooterOne">
              Appelle-nous, rencontre-nous,
              <br /> viens nous serrer la pince !
            </p>
          </section>
          <div className="footerLineText">
            <div className="lineWhiteFooterText" />
            <p
              className="textFooterOne"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              On adore <span className="bolder">papoter</span> et encore plus
              quand c’est pour parler
              <span className="bolder"> performance</span> et
              <span className="bolder"> business</span>. Viens nous tester, nous
              briefer, nous challenger.
            </p>
          </div>
        </section>
      </section>
    </SFooter>
  );
}
