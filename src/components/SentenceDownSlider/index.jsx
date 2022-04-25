import SSliderSentence from './style';

export default function SentenceDownSlider() {
  return (
    <>
      <SSliderSentence>
        <section className="allSentence">
          <div className="funSentence">
            <p className="textFunSentenceOne">
              <p>Promis,</p> <p>on ne va pas te farcir le ciboulot</p>
            </p>
          </div>
          <div className="contentSentence">
            <h2 id="titleSentenceFirst" classeName="firstTitleSentence">
              T’en veux encore ?
            </h2>
            <div className="lineBlackDownSlider" />
            <section className="rightBlocSentence">
              <p className="textSentenceDownSlider">
                <p>Chez SYB,</p>
                <p>on a plus d’un tour dans notre sac.</p>
                <p>
                  Mais comme on a pas assez de place sur un site web pour étaler
                  notre science, on aimerait mieux en discuter de vive voix.
                </p>
              </p>
              <p className="textSentenceTwo">
                <p>Alors, on s’appelle</p> <p>pour voir jusqu’où</p>
                <p>on peut aller ensemble ?</p>
              </p>
            </section>{' '}
          </div>
        </section>
      </SSliderSentence>
    </>
  );
}
