import styled from 'styled-components';

const SSliderSentence = styled.section`
  .allSentence {
    display: flex;
    font-family: var(--title-font-family);
    font-size: 5vh;
    position: absolute;
    margin: 65vh 0vw 0vh 5.5vw;
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
    font-size: 35px;
    padding-bottom: 2vh;
  }
  .lineBlackDownSlider {
    border-top: var(--fourth-font-color) 1px solid;
    width: 30vw;
    padding-bottom: 4vh;
  }
  .textFunSentenceOne {
    text-align: right;
    font-size: 35px;
    font-family: var(--fourth-font-family);
    width: 12vw;
    margin-left: 4vw;
    margin-top: 5vh;
  }
  .rightBlocSentence {
    display: flex;
  }
  .textSentenceDownSlider {
    font-size: 15px;
    width: 25vw;
    text-align: left;
    font-family: var(--fourth-font-family);
    line-height: 2.5vh;
  }
  .textSentenceTwo {
    width: 30vw;
    font-size: 25px;
    padding-left: 2vw;
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
      font-size: 20px;
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
    .funSentence {
    }
    .textFunSentenceOne {
      width: 45vw;
      font-size: 25px;
      text-align: left;
      margin-top: 2vh;
      margin-left: -6.5vw;
      margin-bottom: 2vh;
    }
    .textSentenceDownSlider {
      width: 60vw;
      font-size: 14px;
      padding-top: 1vh;
    }
    .textSentenceTwo {
      width: 60vw;
      padding-top: 4vh;
      font-size: 20px;
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
    }
    h2 {
      width: 20vw;
      font-size: 25px;
    }
    .textSentence {
      font-size: 15px;
      padding-left: 2vw;
      width: 40vw;
      line-height: 1.8vh;
    }
    .textSentenceTwo {
      width: 60vw;
      height: 10vh;
      font-size: 25px;
      margin-left: 10vw;
      margin-top: 10vh;
      padding: 0;
      text-align: left;
    }
  }
  /*MODE DESKTOP MAC*/
  @media screen and (min-width: 1440px) {
    .textFunSentence {
      text-align: left;
      font-size: 12px;
      font-family: var(--primary-font-family);
      width: 20%;
      padding: 5% 0 0 3%;
      line-height: 14px;
    }
    .textSentence {
      line-height: 14px;
      width: 30%;
    }
  }
`;

export default SSliderSentence;
