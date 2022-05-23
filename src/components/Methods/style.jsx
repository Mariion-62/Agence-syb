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
  .subTitleMethods {
    font-size: 2rem;
    width: 20vw;
    text-align: right;
    font-family: var(--primary-font-family);
    margin-left: 15vw;
    margin-top: 10vh;
  }
  .allTitleMethods {
    display: flex;
    margin-bottom: 2vh;
    margin-top: -13vh;
  }
  .titleMethods {
    font-size: 2rem;
    margin-left: 50vw;
    font-family: var(--title-font-family);
  }
  .lineWhiteMethods {
    border-top: var(--fourth-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
    margin-left: 50vw;
  }
  /*MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding-top: 15%;
    .subTitleMethods {
      font-size: 1.2rem;
      width: 60vw;
      margin-left: 5vw;
    }
    .titleMethods {
      font-size: 1.5rem;
      margin-left: 5vw;
      width: 45vw;
    }
    .lineWhiteMethods {
      border-top: var(--fourth-font-color) 1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .titleMethods {
      font-size: 2rem;
      margin-left: 5vw;
      width: 45vw;
    }
    .subTitleMethods {
      font-size: 1.5rem;
      width: 40vw;
      margin-left: 5vw;
    }
    .lineWhiteMethods {
      border-top: var(--fourth-font-color) 1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
  }
`;

const SSlideMethods = styled.div`
  background: var(--fourth-bg-color);
  .containerBox {
    display: flex;
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
    font-size: 1.2rem;
    text-align: left;
    margin: 3vh 6vw;
    width: 28vw;
    height: 20vh;
    transition: 700ms;
    font-family: var(--primary-font-family);
    word-break: normal;
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
    width: 8vw;
    margin: 3vh 6vw;
    cursor: pointer;
    background-color: var(--secondary-bg-color);
    border-radius: 100px 0px 100px 0px;
    transition: 200ms;
    &:hover {
      background-color: var(--primary-bg-color);
      border-radius: 0px 100px 0px 100px;
      transition: 200ms;
      a {
        color: var(--primary-font-color);
      }
    }
    a {
      text-decoration: none;
      color: var(--fourth-font-color);
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
    .titleBox {
      margin: 3vh 4vw;
      text-align: center;
    }
    .contentMethods {
      opacity: 0;
    }
    .imgBox {
      margin-top: -13vh;
    }
    .btnMethod {
      display: none;
    }
    .ctaMethods {
      display: none;
    }
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .containerBox {
      display: flex;
      background: var(--fourth-bg-color);
      height: 90vh;
    }
    .boxMethods {
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: 65vh;
    }
    .titleBox {
      width: 40vw;
      margin: 1vh 3vw;
      font-size: 2rem;
    }
    .contentMethods {
      font-size: 0.9rem;
      text-align: left;
      margin: 0 3vw;
      width: 60vw;
      height: 30vh;
    }
    .imgBox {
      width: 60vw;
      height: 28vh;
    }
    .btnMethod {
      font-size: 1rem;
      width: 25vw;
      margin: 3vh 6vw;
    }
    .hiddenBox {
      width: 10vw;
      height: 65vh;
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
        width: 2vw;
      }
      .titleBox {
        width: 5vw;
        font-size: 1.5rem;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
      .contentMethods {
        opacity: 0;
      }
      .imgBox {
        display: none;
      }
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .containerBox {
      display: flex;
      background: var(--fourth-bg-color);
      height: 65vh;
    }
    .boxMethods {
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: 65vh;
    }
    .titleBox {
      width: 40vw;
      margin: 5vh 3vw;
      font-size: 2rem;
    }
    .contentMethods {
      font-size: 1rem;
      text-align: left;
      margin: 0 3vw;
      width: 50vw;
      height: 30vh;
    }
    .imgBox {
      width: 60vw;
      height: 28vh;
    }
    .btnMethod {
      font-size: 1rem;
      width: 25vw;
      margin: 3vh 6vw;
    }
    .hiddenBox {
      width: 10vw;
      height: 65vh;
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
        width: 2vw;
      }
      .titleBox {
        width: 5vw;
        margin: 0 1vw;
        font-size: 1.5rem;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
      .contentMethods {
        opacity: 0;
      }
      .imgBox {
        display: none;
      }
    }
  }
`;

export { TitleMethods, SSlideMethods };
