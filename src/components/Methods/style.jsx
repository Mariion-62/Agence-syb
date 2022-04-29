import styled from 'styled-components';

const TitleMethods = styled.h2`
  color: var(--fourth-font-color);
  background-color: var(--fourth-bg-color);
  margin-top: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  .methods {
    display: flex;
    flex-direction: column;
  }
  .allTitleMethods {
    display: flex;
    margin-bottom: 2vh;
  }
  .lineWhiteMethods {
    border-top: var(--fourth-font-color) 1px solid;
    width: 65vw;
    padding-top: 5vh;
    margin-left: 15vw;
  }
  .titleMethods {
    font-size: 13px;
    margin-left: 16vw;
    font-family: var(--title-font-family);
  }
  .subTitleMethods {
    font-size: 25px;
    width: 15vw;
    font-family: var(--primary-font-family);
    margin-left: 25vw;
  }
  /*MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding-top: 15%;
    .lineWhiteMethods {
      border-top: red1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
    .titleMethods {
      font-size: 13px;
      margin-left: 5vw;
      padding-bottom: 20px;
      width: 18vw;
    }
    .subTitleMethods {
      font-size: 20px;
      width: 35vw;
      margin-left: 21vw;
    }
  }
`;

const SSlideMethods = styled.div`
  .containerBox {
    display: flex;
    background: var(--fourth-bg-color);
  }
  .boxMethods {
    width: 42.9vw;
    height: 80vh;
    cursor: pointer;
    background-color: white;
    transition: 700ms;
    z-index: 1;
    pointer-events: none;
    box-shadow: inset -26px 4px 46px 15px rgba(0, 0, 0, 0.1);
    border: none;
  }
  .titleBox {
    width: 10vw;
    margin: 3vh 6vw;
    font-size: 20px;
    text-align: left;
    font-family: var(--title-font-family);
  }
  .contentMethods {
    font-size: 20px;
    text-align: left;
    margin: 3vh 6vw;
    width: 35vw;
    transition: 700ms;
    font-family: var(--primary-font-family);
  }
  .imgBox {
    width: 30vw;
    height: 28vh;
    object-fit: cover;
  }
  .hiddenBox {
    width: 19vw;
    height: 80vh;
    cursor: pointer;
    border: none;
    background-color: white;
    transition: 700ms;
    overflow: hidden;
    box-shadow: inset -26px 4px 46px 15px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #eaecee;
    }
    .contentMethods {
      opacity: 0;
    }
    .titleBox {
      margin: 3vh 4vw;
      text-align: center;
    }
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .boxMethods {
      width: 80vw;
      height: 50vh;
    }
    .titleBox {
      font-size: 15px;
      width: 15vw;
    }
    .contentMethods {
      font-size: 10px;
      width: 60vw;
      height: 10vh;
    }
    .imgBox {
      width: 60vw;
      height: 20vh;
    }
    .hiddenBox {
      width: 10vw;
      height: 50vh;
      background-color: white;
      cursor: pointer;
      border: none;
      transition: 700ms;
      overflow: hidden;
      box-shadow: inset -26px 4px 46px 15px rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: #eaecee;
      }
      .titleBox {
        writing-mode: vertical-rl;
        text-orientation: upright;
        margin: 0vw;
        width: 5vw;
      }
      .imgBox {
        display: none;
      }
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
  }
`;

export { TitleMethods, SSlideMethods };
