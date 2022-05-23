import styled from 'styled-components';

const SFooter = styled.section`
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  height: 100vh;
  .allFooter {
    display: flex;
    flex-direction: column;
  }
  .blocLeftFooter {
    width: 50vw;
  }
  .funFooter {
    display: flex;
    flex-direction: column;
    margin-left: 12vw;
  }
  .titleContact {
    display: flex;
    width: 10vw;
    font-family: var(--title-font-family);
    font-size: 2.2rem;
    padding-bottom: 7vh;
    margin-left: 38vw;
  }
  .textFunFooterOne {
    font-size: 2.2rem;
    height: 15vh;
    margin-left: 2.5vw;
    width: 22vw;
    word-break: normal;
  }
  .footerLineText {
    margin-left: 50vw;
    margin-top: -20vh;
  }
  .lineWhiteFooterText {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
  }
  .textFooterOne {
    width: 35vw;
    font-size: 1rem;
    text-align: left;
    line-height: 2.5vh;
    padding-bottom: 5vh;
    word-break: normal;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 90vw;
      margin-top: 1vh;
    }
    .titleContact {
      margin-left: 5vw;
    }
    .footerLineText {
      margin-left: 5vw;
    }
    .textFooterOne {
      width: 64vw;
      font-size: 0.9rem;
      word-break: normal;
      margin-top: 8vh;
    }
    .funFooter {
      margin-left: 1vw;
      margin-top: 3vh;
    }
    .textFunFooterOne {
      width: 65vw;
      font-size: 1.2rem;
      text-align: left;
      margin-left: 5vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 90vw;
      margin-top: 1vh;
    }
    .funFooter {
      margin-left: 1vw;
      margin-top: 2vh;
    }
    .titleContact {
      width: 32vw;
      height: 3vh;
      margin-left: 5vw;
    }
    .textFunFooterOne {
      width: 70vw;
      text-align: left;
      margin-left: 5vw;
    }
    .footerLineText {
      margin-left: 5vw;
    }
    .lineWhiteFooterText {
      border-top: var(--primary-font-color) 1px solid;
      width: 60vw;
      padding-top: 5vh;
      margin-left: 2vw;
    }
    .textFooterOne {
      width: 55vw;
      margin-top: 10vh;
      margin-left: 1vw;
    }
`;

export default SFooter;
