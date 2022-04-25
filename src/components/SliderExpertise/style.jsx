import styled from 'styled-components';

const SSlideExpert = styled.div`
  h1 {
    font-size: 60px;
    font-family: var(--title-font-family);
    position: absolute;
    color: black;
    padding: 1vh;
    width: 15vw;
    text-align: center;
    padding-top: 5vh;
  }
  .firstTextExpert,
  .secondTextExpert,
  .thirdTextExpert {
    font-size: 20px;
    padding-top: 2vh;
    font-weight: bolder;
    z-index: 1;
  }
  .contentStrat,
  .contentCrea,
  .contentWeb,
  .contentSeo,
  .contentSea,
  .contentSocial,
  .contentClient,
  .contentMore {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 80% 5% 0 5%;
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
    margin-top: 4%;
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
      padding-left: 15vw;
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
    .slideClient,
    .slideMore {
      height: 40vh;
      width: 100vw;
      margin-bottom: 2.5vh;
      &:hover {
        animation: none;
        .firstTextExpert,
        .secondTextExpert,
        .thirdTextExpert {
          animation: none;
        }
        h1 {
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
      padding-left: 20vw;
    }
    .firstTextExpert,
    .secondTextExpert,
    .thirdTextExpert {
      font-size: 20px;
      font-weight: bolder;
      width: 60vw;
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
      margin-bottom: 2vh;
      &:hover {
        animation: none;
        .firstTextExpert,
        .secondTextExpert,
        .thirdTextExpert {
          animation: none;
        }
        h1 {
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
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
  }
`;

export default SSlideExpert;
