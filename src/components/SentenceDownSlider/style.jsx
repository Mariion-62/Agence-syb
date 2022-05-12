import styled from 'styled-components';

const SSliderSentence = styled.section`
  background-color: var(--fourth-bg-color);
  .allSentence {
    display: flex;
    font-family: var(--title-font-family);
    font-size: 5vh;
    width: 100vw;
  }
  .funSentence {
    width: 35vw;
    padding-left: 12vw;
  }
  .contentSentence {
    width: 40vw;
    margin-left: -3vw;
  }
  h2 {
    width: 20vw;
    font-size: 2.2rem;
    padding-bottom: 2vh;
  }
  .lineBlackDownSlider {
    border-top: var(--fourth-font-color) 1px solid;
    width: 35vw;
    padding-bottom: 4vh;
  }
  .textFunSentenceOne {
    text-align: right;
    font-size: 2.2rem;
    font-family: var(--fourth-font-family);
    width: 12vw;
    margin-left: 4vw;
    margin-top: 5vh;
  }
  .rightBlocSentence {
    display: flex;
  }
  .textSentenceDownSlider {
    font-size: 1.1rem;
    width: 20vw;
    text-align: left;
    font-family: var(--fourth-font-family);
    line-height: 2.5vh;
  }
  .textSentenceTwo {
    width: 20vw;
    font-size: 1.5rem;
    padding-left: 0.5vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allSentence {
      flex-direction: column;
      padding-top: 70vh;
      margin: 0;
      width: 100vw;
    }
    h2 {
      width: 80vw;
      font-size: 1.5rem;
    }
    .contentSentence {
      width: 40vw;
      margin-left: 5vw;
    }
    .lineBlackDownSlider {
      width: 70vw;
      padding-bottom: 2vh;
    }
    .rightBlocSentence {
      display: flex;
      flex-direction: column;
    }
    .textFunSentenceOne {
      width: 48vw;
      font-size: 1.5rem;
      text-align: left;
      margin-top: 2vh;
      margin-left: -6.5vw;
      margin-bottom: 2vh;
    }
    .textSentenceDownSlider {
      width: 70vw;
      font-size: 0.9rem;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 60vw;
      padding-top: 4vh;
      font-size: 1.3rem;
      margin-left: -1.5vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allSentence {
      padding-top: 53vh;
      margin: 0 5vw;
      width: 80vw;
    }
    .funSentence {
      padding: 0;
      width: 20vw;
    }
    .textFunSentenceOne {
      width: 30vw;
      margin-left: -10vw;
    }
    h2 {
      width: 30vw;
      margin-left: 20vw;
      font-size: 1.5rem;
    }
    .textSentenceDownSlider {
      font-size: 0.7rem;
      width: 35vw;
      line-height: 1.8vh;
    }
    .textSentenceTwo {
      width: 25vw;
      height: 10vh;
      font-size: 1rem;
      margin-top: 0vh;
      padding: 0;
      text-align: left;
    }
    .lineBlackDownSlider {
      margin-left: 20vw;
    }
    .rightBlocSentence {
      width: 55vw;
      margin-left: 20vw;
    }
  }
`;

export default SSliderSentence;
