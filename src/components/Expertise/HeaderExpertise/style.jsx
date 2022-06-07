import styled from 'styled-components';

const SExpertise = styled.section`
  color: var(--fourth-font-color);
  font-family: var(--primary-font-family);
  .expertise {
    background-color: var(--fourth-bg-color);
    color: var(--fourth-font-color);
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    padding-top: 3vh;
    line-height: 4vh;
    width: 100vw;
  }
  .blocExpertise {
    display: flex;
  }
  .rightExpertise {
    display: flex;
  }
  .opacity {
    width: 160px;
    height: 400px;
    position: absolute;
    margin: 5vh 18vw;
    background-color: white;
    opacity: 0.6;
  }
  .photo7 {
    width: 300px;
    height: 400px;
    margin: 5vh 10vw;
    object-fit: cover;
  }
  .ctaExpertise {
    height: 20%;
    padding-top: 39vh;
    margin-left: -14vw;
  }
  .firstTitleExpertise {
    width: 15vw;
    height: 5vh;
    font-size: 2rem;
    margin-left: 25vw;
  }
  .titleExpertise {
    width: 18vw;
    margin-top: 2vh;
    margin-left: -16vw;
    z-index: 1;
    font-size: 2rem;
    text-align: right;
    word-break: normal;
  }
  .leftExpertise {
    color: black;
    width: 45vw;
    margin-left: -15vw;
    margin-top: 8vh;
  }
  .lineBlackExpertise {
    border-top: var(--fourth-font-color) 1px solid;
    width: 37vw;
    padding-bottom: 4vh;
  }
  .content {
    display: flex;
    padding-top: 2vh;
    line-height: 2.5vh;
  }
  .textOneExpertise {
    width: 19vw;
    margin-right: 2.5vw;
    font-size: 1rem;
  }
  .bolder {
    color: var(--secondary-font-color);
    font-weight: bolder;
  }
  .textTwoExpertise {
    width: 18vw;
    font-size: 1.3rem;
    padding-bottom: 3vh;
  }
  .slider {
    height: 60vh;
  }
  .downExpertise {
    height: 30vh;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding-top: 3vh;
    .expertise {
      height: 115vh;
    }
    .blocExpertise {
      flex-direction: column;
    }
    .photo7 {
      padding-top: 8vh;
      height: 300px;
      margin-left: 10vw;
      margin-bottom: 0vh;
    }
    .ctaExpertise {
      padding-top: 42vh;
      margin-left: -25vw;
    }
    .firstTitleExpertise {
      width: 45vw;
      margin-left: -30vw;
      margin-bottom: 0;
      margin-top: 3vh;
      font-size: 1.5rem;
    }
    .titleExpertise {
      font-size: 1.5rem;
      line-height: 2.5vh;
      width: 50vw;
      height: 10vh;
      margin-top: 5vh;
      margin-left: -40vw;
    }
    .leftExpertise {
      width: 80vw;
      margin-left: 5vw;
    }
    .lineBlackExpertise {
      width: 70vw;
    }
    .content {
      padding-top: 0vh;
      width: 70vw;
      flex-direction: column;
    }
    .textOneExpertise {
      width: 95vw;
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
    .slider {
      height: 0vh;
    }
    .downExpertise {
      height: 20vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 3vh;
    .expertise {
      height: 135vh;
    }
    .blocExpertise {
      flex-direction: column;
    }
    .photo7 {
      padding-top: 8vh;
      height: 600px;
      margin-left: 20vw;
      margin-bottom: 0vh;
    }
    .ctaExpertise {
      padding-top: 42vh;
      margin-left: -25vw;
    }
    .firstTitleExpertise {
      width: 45vw;
      margin-left: -20vw;
      margin-bottom: 0;
      margin-top: 3vh;
    }
    .titleExpertise {
      width: 50vw;
      height: 10vh;
      margin-top: 5vh;
      margin-left: -40vw;
    }
    .leftExpertise {
      width: 80vw;
      margin-left: 5vw;
    }
    .lineBlackExpertise {
      width: 60vw;
    }
    .content {
      padding-top: 0vh;
      width: 10vw;
      flex-direction: column;
    }
    .textOneExpertise {
      width: 55vw;
    }
    .textTwoExpertise {
      width: 50vw;
      padding-top: 2vh;
    }
    .textThreeExpertise {
      padding-top: 3vh;
      width: 80vw;
    }
    .slider {
      height: 0vh;
    }
    .downExpertise {
      height: 20vh;
    }
  }
`;

export default SExpertise;
