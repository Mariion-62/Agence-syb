import styled from 'styled-components';

const SSlideExpert = styled.section`
  background-color: var(--fourth-bg-color);
  padding-top: 8vh;
  font-family: var(--title-font-family);
  height: 58vh;
  .titleExpertiseBlack {
    font-size: 3.1rem;
    position: absolute;
    color: black;
    width: 20vw;
    font-weight: bold;
    text-align: center;
    margin-top: -42vh;
    margin-left: 2vw;
    text-transform: uppercase;
  }
  .titleExpertiseYellow {
    font-size: 3.1rem;
    position: absolute;
    color: var(--secondary-font-color);
    width: 20vw;
    font-weight: bold;
    text-align: center;
    margin-top: -31vh;
    margin-left: 2vw;
    text-transform: uppercase;
  }
  .titleExpertiseYellowTrans {
    font-size: 3.1rem;
    position: absolute;
    font-weight: bold;
    color: var(--secondary-font-color);
    width: 20vw;
    text-align: center;
    margin-top: -21vh;
    margin-left: 2vw;
    opacity: 0.3;
    text-transform: uppercase;
  }
  .contentExpertise {
    position: absolute;
    line-height: 4.5vh;
    font-size: 1.5rem;
    z-index: 1;
  }
  .textExpertFirst {
  }
  .slideExpertise {
    width: 25vw;
    height: 55vh;
    display: flex;
    align-items: center;
    color: var(--fourth-font-color);
    &:hover {
      animation: myAnim 1s ease 0s 1 normal forwards;
      @keyframes myAnim {
        0% {
          transform: scale(1);
        }

        100% {
          transform: scale(1.1);
        }
      }
      .titleExpertise {
        width: 20vw;
        padding: 5vh 0;
      }
      .imgExpertise {
        opacity: 0.2;
      }
      .textExpert {
        width: 20vw;
        height: 2vh;
        animation: textUp 1s ease 0s 1 normal forwards;
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
  }
  .imgExpertise {
    width: 23.5vw;
    height: 55vh;
    opacity: 0.5;
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
    .titleExpertise {
      margin-top: -30vh;
      margin-left: 10vw;
      font-size: 5vh;
      width: 80vw;
    }
    .imgExpertise {
      width: 100vw;
      height: 42vh;
    }
    .textExpert {
      font-size: 20px;
      font-weight: bolder;
      width: 70vw;
      opacity: 1;
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
        .textExpert {
          width: 70vw;
          height: 2vh;
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
    .titleExpertise {
      margin-top: -30vh;
      margin-left: 10vw;
      font-size: 5vh;
      width: 80vw;
    }
    .imgExpertise {
      width: 100vw;
      height: 42vh;
    }
    .textExpert {
      font-weight: bolder;
      width: 90vw;
      opacity: 1;
      margin-left: 0vw;
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
        .textExpert {
          width: 70vw;
          height: 2vh;
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
