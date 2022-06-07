import styled from 'styled-components';

const SSlideExpert = styled.section`
  background-color: var(--fourth-bg-color);
  padding-top: 8vh;
  height: 58vh;
  h1 {
    font-size: 3.1rem;
    font-family: var(--title-font-family);
    position: absolute;
    color: black;
    padding: 1vh;
    width: 20vw;
    text-align: center;
    padding-top: 5vh;
  }
  .firstTextExpert,
  .secondTextExpert,
  .thirdTextExpert {
    font-size: 1.3rem;
    padding-top: 2vh;
    padding-left: 2vh;
    opacity: 0;
    z-index: 1;
    font-family: var(--title-font-family);
  }
  .contentStrat,
  .contentCrea,
  .contentWeb,
  .contentSeo,
  .contentSea,
  .contentSocial,
  .contentClient,
  .contentMore {
    width: 22vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 12vw 0vh;
  }
  .slideStrat,
  .slideCrea,
  .slideWeb,
  .slideSeo,
  .slideSea,
  .slideSocial,
  .slideClient,
  .slideMore {
    width: 25vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
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
      h1 {
        width: 20vw;
        padding: 5vh 0;
      }
      img {
        opacity: 0.2;
      }
      .firstTextExpert {
        opacity: 1;
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
      .secondTextExpert {
        opacity: 1;
        width: 20vw;
        height: 2vh;
        animation: textUp 2s ease 0s 1 normal forwards;
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
      .thirdTextExpert {
        opacity: 1;
        width: 20vw;
        height: 2vh;
        animation: textUp 3s ease 0s 1 normal forwards;
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
  img {
    width: 23.5vw;
    height: 55vh;
    position: relative;
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
    h1 {
      margin: 3%;
      font-size: 5vh;
      width: 80vw;
    }
    img {
      width: 100vw;
      height: 42vh;
    }
    .contentStrat,
    .contentCrea,
    .contentWeb,
    .contentSeo,
    .contentSea,
    .contentSocial,
    .contentClient,
    .contentMore {
      margin: 20vh;
      width: 80vw;
    }
    .firstTextExpert,
    .secondTextExpert,
    .thirdTextExpert {
      font-size: 20px;
      font-weight: bolder;
      width: 70vw;
      opacity: 1;
    }
    .slideStrat,
    .slideCrea,
    .slideWeb,
    .slideSeo,
    .slideSea,
    .slideSocial,
    .slideClient {
      height: 40vh;
      width: 100vw;
      margin-bottom: 2.5vh;
      &:hover {
        animation: none;
        h1 {
          width: 45vw;
          padding: 5vh 0;
        }
        img {
          opacity: 0.2;
        }
        .firstTextExpert,
        .secondTextExpert,
        .thirdTextExpert {
          opacity: 1;
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
    h1 {
      margin: 1vh 1vw;
      font-size: 5vh;
      width: 80vw;
    }
    img {
      width: 100vw;
      height: 42vh;
    }
    .contentStrat,
    .contentCrea,
    .contentWeb,
    .contentSeo,
    .contentSea,
    .contentSocial,
    .contentClient,
    .contentMore {
      margin-top: 20vh;
      width: 70vw;
      margin-left: -5vw;
      padding-left: 0vw;
    }
    .firstTextExpert,
    .secondTextExpert,
    .thirdTextExpert {
      font-size: 1.9rem;
      font-weight: bolder;
      width: 70vw;
      opacity: 1;
    }
    .slideStrat,
    .slideCrea,
    .slideWeb,
    .slideSeo,
    .slideSea,
    .slideSocial,
    .slideClient,
    .slideMore {
      height: 40vh;
      width: 100vw;
      padding-top: 2vh;
      margin-bottom: 2vh;
      &:hover {
        animation: none;
        h1 {
          width: 45vw;
          padding: 5vh 0;
        }
        img {
          opacity: 0.2;
        }
        .firstTextExpert,
        .secondTextExpert,
        .thirdTextExpert {
          opacity: 1;
          width: 70vw;
          font-size: 1.9rem;
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
      height: 40vh;
      transform: rotate(0deg) translateX(0vh);
    }
  }
`;

export default SSlideExpert;
