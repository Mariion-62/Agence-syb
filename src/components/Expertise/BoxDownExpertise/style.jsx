import styled from 'styled-components';

const SBoxDownExpertise = styled.section`
  background-color: var(--fourth-bg-color);
  .allSentence {
    display: flex;
    font-family: var(--title-font-family);
    font-size: 5vh;
    width: 100vw;
    height: 25vh;
  }
  .funSentence {
    width: 35vw;
    padding-left: 12vw;
  }
  .contentSentence {
    width: 40vw;
    margin-left: 3vw;
  }
  .firstTitleSentence {
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
    width: 15vw;
    margin-left: 4vw;
    margin-top: 5.6vh;
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
    width: 13vw;
    font-size: 1.5rem;
    padding-left: 3vw;
    line-height: 2.5vh;
    word-break: normal;
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
      width: 72vw;
      font-size: 0.9rem;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 80vw;
      padding-top: 4vh;
      font-size: 1.3rem;
      margin-left: -1.5vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allSentence {
      flex-direction: column;
      padding-top: 55vh;
      margin: 0;
      width: 100vw;
    }
    h2 {
      width: 80vw;
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
      text-align: left;
      margin-top: 2vh;
      margin-left: -6.5vw;
      margin-bottom: 2vh;
    }
    .textSentenceDownSlider {
      width: 70vw;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 50vw;
      padding-top: 4vh;
      margin-left: -1.5vw;
    }
  }
`;

export default SBoxDownExpertise;
