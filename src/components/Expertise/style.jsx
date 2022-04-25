import styled from 'styled-components';

const SExpertise = styled.section`
  background-color: var(--fourth-bg-color);
  color: var(--fourth-font-color);
  height: 145vh;
  .expertise {
    color: var(--fourth-font-color);
    display: flex;
    padding-top: 2vh;
    line-height: 4vh;
  }
  .rightExpertise {
    display: flex;
  }
  .photo7 {
    height: 400px;
    margin: 5vh 10vw;
    opacity: 0.4;
  }
  .firstTitleExpertise {
    width: 15vw;
    height: 5vh;
    font-size: 35px;
    margin-left: 36vw;
  }
  .allTitle {
    width: 20vw;
    margin-top: 2vh;
    margin-left: -14vw;
  }
  .titleExpertise {
    font-size: 40px;
    text-align: right;
  }
  .lineBlackExpertise {
    border-top: var(--fourth-font-color) 1px solid;
    width: 30vw;
    padding-bottom: 4vh;
  }
  .leftExpertise {
    color: black;
    width: 30vw;
    margin-left: 16vw;
    margin-top: 8vh;
  }
  .content {
    display: flex;
    padding-top: 2vh;
    line-height: 2.5vh;
  }
  .textOneExpertise {
    width: 20vw;
    font-size: 20px;
  }
  .textTwoExpertise {
    width: 13vw;
    font-size: 25px;
  }
  .ctaExpertise {
    height: 20%;
    padding-top: 40vh;
    margin-left: -13vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 230vh;
    padding-top: 12vh;
    .expertise {
      flex-direction: column;
    }
    .photo7 {
      padding-top: 8vh;
      height: 300px;
      margin-left: 10vw;
      margin-bottom: 0vh;
    }
    .firstTitleExpertise {
      width: 40vw;
      margin-left: 15vw;
      margin-bottom: 8vh;
      font-size: 20px;
    }
    .allTitle {
      width: 24vw;
      height: 24vh;
      margin-top: 5vh;
      margin-left: -38vw;
    }
    .titleExpertise {
      font-size: 20px;
      line-height: 2.5vh;
      width: 45vw;
    }
    .leftExpertise {
      width: 70vw;
      margin-left: 10vw;
    }
    .lineBlackExpertise {
      border-top: var(--fourth-font-color) 1px solid;
      width: 70vw;
    }
    .content {
      padding-top: 0vh;
      width: 70vw;
      flex-direction: column;
    }
    .textOneExpertise {
      width: 70vw;
      font-size: 18px;
    }
    .textTwoExpertise {
      width: 70vw;
      font-size: 20px;
      padding-top: 2vh;
    }
    .ctaExpertise {
      padding-top: 44vh;
      margin-left: -23vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 130vh;
    padding-top: 10vh;
    .photo7 {
      height: 300px;
      margin-left: 5vw;
    }
    .firstTitleExpertise {
      width: 30vw;
      margin-left: 29vw;
      font-size: 25px;
    }
    .allTitle {
      width: 24vw;
      height: 24vh;
      margin-top: 1vh;
      margin-left: -18vw;
    }
    .titleExpertise {
      font-size: 20px;
      line-height: 2vh;
    }
    .leftExpertise {
      width: 50vw;
      margin-left: 5vw;
    }
    .lineBlackExpertise {
      border-top: var(--fourth-font-color) 1px solid;
      width: 20vw;
    }
    .content {
      padding-top: 0vh;
      width: 50vw;
    }
    .textOneExpertise {
      width: 25vw;
      font-size: 10px;
      line-height: 1.5vh;
    }
    .textTwoExpertise {
      width: 20vw;
      font-size: 15px;
    }
    .ctaExpertise {
      padding-top: 39vw;
      margin-left: -18vw;
    }
    h2 {
      margin-left: 0vw;
      width: 26vw;
    }
    .textFunSentence {
      width: 40vw;
      font-size: 20px;
      margin-left: 15vw;
    }
    .textSentence {
      width: 70vw;
      margin-left: 4vh;
      font-size: 20px;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }
  /*MODE DESKTOP MAC*/
  @media screen and (min-width: 1440px) {
  }
`;

export default SExpertise;
