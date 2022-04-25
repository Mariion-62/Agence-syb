import styled from 'styled-components';

const TitleMethods = styled.h2`
  color: var(--primary-font-color);
  margin-top: 5vh;
  .allTitleMethods {
    display: flex;
    margin-bottom: 2vh;
  }
  .lineWhiteMethods {
    border-top: var(--primary-font-color) 1px solid;
    width: 60vw;
    padding-top: 5vh;
    margin-left: 20vw;
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
    .titleMethods {
      font-size: 30px;
      margin-left: 5%;
      padding-bottom: 20px;
      width: 50%;
    }
    .subTitleMethods {
      width: 60%;
      height: 5%;
      margin-left: 20%;
    }
  }
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
  padding-top: 0;
    }
  }
`;

const SSlideMethods = styled.div`
  h1 {
    font-size: 60px;
    font-family: var(--title-font-family);
    position: relative;
    color: white;
    margin: auto;
    width: 50vw;
    text-align: center;
    padding-top: 40vh;
  }
  .contentMethodCrea {
    font-size: 60px;
    font-family: var(--title-font-family);
    position: relative;
    color: white;
    margin: auto;
    width: 50vw;
    text-align: center;
    padding-top: 60vh;
  }
  .box {
    height: 105vh;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  img {
    width: 100vw;
    height: 105vh;
    top: 0;
    position: fixed;
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 768px) {
    h1 {
      padding-top: 45vh;
      width: 70vw;
      text-align: center;
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
