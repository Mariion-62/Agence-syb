import styled from 'styled-components';

const SBoxDownExpertise = styled.section`
  background-color: var(--fourth-bg-color);
  .allSentence {
    display: flex;
    font-family: var(--title-font-family);
    font-size: 5vh;
    width: 100vw;
    height: 28vh;
  }
  .funSentence {
    width: 35vw;
    padding-left: 13vw;
  }
  .contentSentence {
    width: 40vw;
    margin-left: 3vw;
  }
  .firstTitleSentence {
    width: 20vw;
    font-size: 2.2rem;
    padding-bottom: 2vh;
    margin-top: 1vh;
    margin-left: 2vw;
    border: 1px solid red;
  }
  .lineBlackDownSlider {
    border-top: var(--fourth-font-color) 1px solid;
    width: 35vw;
    margin-top: 2vh;
    padding-bottom: 4vh;
  }
  .textFunSentenceOne {
    text-align: right;
    font-size: 2rem;
    font-family: var(--fourth-font-family);
    width: 30vw;
    margin-left: -8vw;
    margin-top: 7vh;
  }
  .rightBlocSentence {
    display: flex;
  }
  .textSentenceDownSlider {
    font-size: 1rem;
    width: 20vw;
    text-align: left;
    font-family: var(--fourth-font-family);
    line-height: 2.5vh;
  }
  .textSentenceTwo {
    width: 13vw;
    font-size: 1.3rem;
    padding-left: 3vw;
    line-height: 2.5vh;
    word-break: normal;
  }
  .ctaCallUs {
    width: 5vw;
    height: 10vh;
    margin-top: 5vh;
    margin-left: -5vw;
    animation: rotate 30s linear 0s infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allSentence {
      flex-direction: column;
      padding-top: 5vh;
      width: 100vw;
      height: 45vh;
    }
    h2 {
      width: 80vw;
      font-size: 1.5rem;
      margin-left: 3.5vw;
    }
    .contentSentence {
      width: 40vw;
      margin-left: 5vw;
    }
    .firstTitleSentence {
      margin-left: 5vw;
      border: 1px solid red;
    }
    .lineBlackDownSlider {
      width: 70vw;
      padding-bottom: 2vh;
      margin-left: 4vw;
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
      margin-left: -4vw;
      margin-bottom: 2vh;
    }
    .textSentenceDownSlider {
      width: 72vw;
      font-size: 0.9rem;
      margin-left: 4vw;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 80vw;
      padding-top: 4vh;
      font-size: 0.9rem;
      margin-left: 1.5vw;
    }
    .ctaCallUs {
      width: 20vw;
      height: 10vh;
      margin-top: -10vh;
      margin-bottom: 5vh;
      margin-left: 60vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allSentence {
      flex-direction: column;
      padding-top: 5vh;
      margin: 0;
      width: 100vw;
      height: 45vh;
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
      margin-left: -7vw;
      margin-bottom: 2vh;
    }
    .textSentenceDownSlider {
      width: 70vw;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 52vw;
      padding-top: 4vh;
      margin-left: -3vw;
    }
    .ctaCallUs {
      width: 12vw;
      height: 10vh;
      margin-top: -15vh;
      margin-bottom: 5vh;
      margin-left: 50vw;
    }
  }
`;

export default SBoxDownExpertise;
