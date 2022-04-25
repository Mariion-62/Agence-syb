import SSliderSentence from './style';

export default function SentenceDownSlider() {
  return (
    <>
      <SSliderSentence>
        <section className="allSentence">
          <div className="funSentence">
            <div className="contentSentence">
              <h2 id="titleSentenceFirst" classeName="titleSentenceFirst">
                <p>T’en veux</p> <p>encore ?</p>
              </h2>
              <p className="textFunSentence">
                <p>Promis,</p> on ne va pas te farcir le ciboulot.
              </p>
            </div>
            <p className="textSentence">
              <p>Chez SYB,</p>
              <p>on a plus d’un tour</p> <p>dans notre sac.</p>
              <p>
                Mais comme on a pas assez de place sur un site web pour étaler
                notre science, on aimerait mieux en discuter de vive voix.
              </p>
            </p>
          </div>
          <p className="textSentenceTwo">
            <p>Alors, on s’appelle</p> <p>pour voir jusqu’où</p>
            <p>on peut aller ensemble ?</p>
          </p>
        </section>
      </SSliderSentence>
    </>
  );
}
