import styled from 'styled-components';

const SExpertise = styled.section`
  background-color: var(--fourth-bg-color);
  color: var(--fourth-font-color);
  height: 155vh;
  font-family: var(--primary-font-family);
  .expertise {
    color: var(--fourth-font-color);
    display: flex;
    margin-top: 2vh;
    padding-top: 3vh;
    line-height: 4vh;
    width: 100%;
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
    font-size: 2.2rem;
    margin-left: 25vw;
  }
  .allTitleExpertise {
    width: 20vw;
    margin-top: 2vh;
    margin-left: -14vw;
    z-index: 1;
  }
  .titleExpertise {
    font-size: 2.2em;
    text-align: right;
  }
  .lineBlackExpertise {
    border-top: var(--fourth-font-color) 1px solid;
    width: 37vw;
    padding-bottom: 4vh;
  }
  .leftExpertise {
    color: black;
    width: 37vw;
    margin-left: -15vw;
    margin-top: 8vh;
  }
  .content {
    display: flex;
    padding-top: 2vh;
    line-height: 2.5vh;
  }
  .textOneExpertise {
    width: 27vw;
    font-size: 1.1rem;
  }
  .textTwoExpertise {
    width: 15vw;
    font-size: 1.5rem;
  }
  .textThreeExpertise {
    padding-top: 3vh;
  }
  .ctaExpertise {
    height: 20%;
    padding-top: 40vh;
    margin-left: -13vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 240vh;
    padding-top: 3vh;
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
      width: 45vw;
      margin-left: -30vw;
      margin-bottom: 0;
      margin-top: 3vh;
      font-size: 1.5rem;
    }
    .allTitleExpertise {
      width: 50vw;
      height: 10vh;
      margin-top: 5vh;
      margin-left: -40vw;
    }
    .titleExpertise {
      font-size: 1.5rem;
      line-height: 2.5vh;
      width: 50vw;
    }
    .lineBlackExpertise {
      width: 70vw;
    }
    .leftExpertise {
      width: 80vw;
      margin-left: 5vw;
    }
    .content {
      padding-top: 0vh;
      width: 70vw;
      flex-direction: column;
    }
    .textOneExpertise {
      width: 90vw;
      font-size: 0.9rem;
    }
    .textTwoExpertise {
      width: 80vw;
      font-size: 1.3rem;
      padding-top: 2vh;
    }
    .textThreeExpertise {
      padding-top: 3vh;
      width: 80vw;
    }
    .ctaExpertise {
      padding-top: 42vh;
      margin-left: -25vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 125vh;
    width: 100vw;
    padding-top: 0vh;
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
      margin-left: -10vw;
    }
    .titleExpertise {
      font-size: 20px;
      line-height: 2vh;
    }
    .leftExpertise {
      width: 58vw;
      margin-left: -8vw;
    }
    .lineBlackExpertise {
      border-top: var(--fourth-font-color) 1px solid;
      width: 40vw;
    }
    .content {
      padding-top: 0vh;
      width: 50vw;
    }
    .textOneExpertise {
      width: 30vw;
      font-size: 0.7rem;
      line-height: 1.5vh;
    }
    .textTwoExpertise {
      width: 25vw;
      font-size: 1rem;
      line-height: 1.5vh;
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
    }
    .textSentence {
      width: 70vw;
      margin-left: 4vh;
      font-size: 20px;
    }
  }
`;

export default SExpertise;
