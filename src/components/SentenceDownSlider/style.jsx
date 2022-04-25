import styled from 'styled-components';

const SSliderSentence = styled.section`
  .allSentence {
    display: flex;
    font-family: var(--title-font-family);
    font-size: 5vh;
    position: absolute;
    margin: 60vh 0vw 0vh 5vw;
  }
  .funSentence {
    width: 50vw;
    padding-left: 12vh;
  }
  .contentSentence {
    display: flex;
  }
  h2 {
    width: 15.5vw;
    font-size: 35px;
    text-align: right;
  }
  .textFunSentence {
    text-align: left;
    font-size: 12px;
    font-family: var(--fourth-font-family);
    width: 15vw;
    padding: 5% 0 0 3%;
    line-height: 11px;
  }
  .textSentence {
    font-size: 12px;
    width: 15.5vw;
    text-align: right;
    font-family: var(--fourth-font-family);
    padding-top: 6vh;
    padding-left: 5.6vw;
    line-height: 11px;
  }
  .textSentenceTwo {
    width: 30vw;
    padding-top: 5vh;
    margin-left: -24vh;
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
    .funSentence {
      padding-left: 2vh;
    }
    .textFunSentence {
      width: 45vw;
    }
    .textSentence {
      width: 60vw;
      font-size: 15px;
      text-align: left;
      font-family: var(--primary-font-family);
      line-height: 1.8vh;
    }
    .textSentenceTwo {
      width: 60vw;
      font-size: 20px;
      margin-left: 5vh;
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
