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
    margin-top: -13vh;
  }
  .lineWhiteMethods {
    border-top: var(--fourth-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
    margin-left: 50vw;
  }
  .titleMethods {
    font-size: 2.2rem;
    margin-left: 50vw;
    font-family: var(--title-font-family);
  }
  .subTitleMethods {
    font-size: 2.2rem;
    width: 15vw;
    font-family: var(--primary-font-family);
    margin-left: 20vw;
    margin-top: 10vh;
  }
  /*MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding-top: 15%;
    .lineWhiteMethods {
      border-top: var(--fourth-font-color) 1px solid;
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
    height: 90vh;
  }
  .boxMethods {
    display: flex;
    flex-direction: column;
    width: 42.9vw;
    height: 80vh;
    background-color: white;
    transition: 700ms;
    z-index: 1;
    box-shadow: inset -26px 4px 46px 15px rgba(0, 0, 0, 0.1);
    border: none;
  }
  .titleBox {
    width: 10vw;
    margin: 3vh 6vw;
    font-size: 2.2rem;
    text-align: left;
    font-family: var(--title-font-family);
  }
  .contentMethods {
    font-size: 1rem;
    text-align: left;
    margin: 3vh 6vw;
    width: 25vw;
    height: 20vh;
    transition: 700ms;
    font-family: var(--primary-font-family);
    overflow: hidden;
  }
  .imgBox {
    width: 30vw;
    height: 28vh;
    margin-left: 6vw;
    object-fit: cover;
  }
  .btnMethod {
    font-family: var(--primary-font-family);
    border: none;
    font-size: 1rem;
    width: 6vw;
    margin: 3vh 6vw;
    cursor: pointer;
    background-color: var(--secondary-bg-color);
    color: var(--fourth-font-color);
    &:hover {
      background-color: var(--primary-bg-color);
      color: var(--primary-font-color);
    }
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
    .boxMethods {
      cursor: pointer;
    }
    .contentMethods {
      opacity: 0;
    }
    .titleBox {
      margin: 3vh 4vw;
      text-align: center;
    }
    .btnMethod {
      display: none;
    }
    .imgBox {
      margin-top: -13vh;
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
