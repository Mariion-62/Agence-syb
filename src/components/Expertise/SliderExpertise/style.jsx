import styled from 'styled-components';

const SSlideExpert = styled.section`
  background-color: var(--fourth-bg-color);
  padding-top: 15vh;
  font-family: var(--title-font-family);
  height: 55vh;
  .titleExpertiseBlack {
    font-size: 2.5rem;
    position: absolute;
    color: black;
    width: 23.5vw;
    font-weight: bold;
    text-align: center;
    margin-top: -34vh;
    text-transform: uppercase;
  }
  .titleExpertiseYellow {
    font-size: 2.5rem;
    position: absolute;
    color: var(--secondary-font-color);
    width: 23.5vw;
    font-weight: bold;
    text-align: center;
    margin-top: -25vh;
    text-transform: uppercase;
  }
  .titleExpertiseYellowTrans {
    font-size: 2.5rem;
    position: absolute;
    font-weight: bold;
    color: var(--secondary-font-color);
    width: 23.5vw;
    text-align: center;
    margin-top: -17vh;
    opacity: 0.3;
    text-transform: uppercase;
  }
  .contentExpertise {
    position: absolute;
    line-height: 4.5vh;
    font-size: 1.5rem;
    z-index: 1;
    width: 23.5vw;
    margin-top: 15vh;
    opacity: 0.5;
    filter: blur(3px);
  }
  .textExpert {
    text-align: center;
    width: 22vw;
  }
  .slideExpertise {
    width: 25vw;
    height: 55vh;
    display: flex;
    align-items: center;
    color: var(--fourth-font-color);
    &:hover {
      .contentExpertise {
        filter: blur(0px);
      }
      animation: myAnim 1s ease 0s 1 normal forwards;
      @keyframes myAnim {
        0% {
          transform: scale(1);
        }

        100% {
          transform: scale(1.1);
        }
      }
      .textExpert {
        animation: textUp 1s ease 0s 1 normal forwards;
      }
    }
    @keyframes textUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .imgExpertise {
    width: 23.5vw;
    height: 55vh;
    object-fit: cover;
  }
  .blocHorizontal {
    display: flex;
    flex-direction: row;
    width: 175vw;
    transform: rotate(90deg) translateY(-55vh);
    transform-origin: top left;
  }
  .container {
    width: 55vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-50vh);
    transform-origin: top left;
    overflow-x: hidden;
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding-top: 10%;

    .imgExpertise {
      width: 100vw;
      height: 42vh;
    }
    .titleExpertiseBlack {
      font-size: 2.5rem;
      position: absolute;
      color: black;
      width: 100vw;
      font-weight: bold;
      text-align: center;
      margin-top: -34vh;
      text-transform: uppercase;
    }
    .titleExpertiseYellow {
      font-size: 2.5rem;
      position: absolute;
      color: var(--secondary-font-color);
      width: 100vw;
      font-weight: bold;
      text-align: center;
      margin-top: -25vh;
      text-transform: uppercase;
    }
    .titleExpertiseYellowTrans {
      font-size: 2.5rem;
      position: absolute;
      font-weight: bold;
      color: var(--secondary-font-color);
      width: 100vw;
      text-align: center;
      margin-top: -17vh;
      opacity: 0.3;
      text-transform: uppercase;
    }
    .contentExpertise {
      width: 70vw;
      margin-top: 10vh;
    }
    .textExpert {
      width: 90vw;
      margin-left: 5vw;
    }
    .slideExpertise {
      height: 40vh;
      width: 100vw;
      margin-bottom: 2.5vh;
      &:hover {
        animation: none;
        .titleExpertise {
          width: 45vw;
          padding: 5vh 0;
        }
        .contentExpertise {
          margin-top: 10vh;
          width: 70vw;
        }
        .textExpert {
          width: 90vw;
          margin-left: 5vw;
          animation: none;
        }
      }
    }
    .blocHorizontal {
      display: flex;
      flex-direction: column;
      width: 20vw;
      transform: rotate(0deg) translateY(0vh);
    }
    .container {
      width: 100vw;
      height: 60vh;
      transform: rotate(0deg) translateX(0vh);
    }
  }

  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .titleExpertiseBlack {
      font-size: 2.5rem;
      position: absolute;
      color: black;
      width: 100vw;
      font-weight: bold;
      text-align: center;
      margin-top: -34vh;
      text-transform: uppercase;
    }
    .titleExpertiseYellow {
      font-size: 2.5rem;
      position: absolute;
      color: var(--secondary-font-color);
      width: 100vw;
      font-weight: bold;
      text-align: center;
      margin-top: -25vh;
      text-transform: uppercase;
    }
    .titleExpertiseYellowTrans {
      font-size: 2.5rem;
      position: absolute;
      font-weight: bold;
      color: var(--secondary-font-color);
      width: 100vw;
      text-align: center;
      margin-top: -17vh;
      opacity: 0.3;
      text-transform: uppercase;
    }
    .imgExpertise {
      width: 100vw;
      height: 42vh;
    }
    .contentExpertise {
      width: 70vw;
      margin-top: 10vh;
    }
    .textExpert {
      width: 90vw;
      margin-left: 5vw;
    }
    .slideExpertise {
      height: 40vh;
      width: 100vw;
      margin-bottom: 2.5vh;
      &:hover {
        animation: none;
        .titleExpertise {
          width: 45vw;
          padding: 5vh 0;
        }
        .contentExpertise {
          margin-top: 10vh;
          width: 70vw;
        }
        .textExpert {
          width: 90vw;
          margin-left: 5vw;
          animation: none;
        }
      }
    }
    .blocHorizontal {
      display: flex;
      flex-direction: column;
      width: 20vw;
      transform: rotate(0deg) translateY(0vh);
    }
    .container {
      width: 100vw;
      height: 60vh;
      transform: rotate(0deg) translateX(0vh);
    }
  }
`;

export default SSlideExpert;
