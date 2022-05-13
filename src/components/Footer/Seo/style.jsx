import styled from 'styled-components';

const SSeo = styled.section`
  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--primary-font-color);
  }
  .textFunFooterTwo {
    font-size: 2.2rem;
    width: 25vw;
    margin-left: 15vw;
    margin-top: -5vh;
  }
  .textFooterTwo {
    width: 31vw;
    margin-left: 50vw;
    font-size: 1.1rem;
    margin-top: -6.5vh;
    line-height: 2.5vh;
    border-top: 1px solid var(--primary-font-color);
    padding-bottom: 1vh;
    padding-top: 2vh;
    word-break: normal;
  }
  .textFooterThree {
    width: 31vw;
    margin-left: 50vw;
    font-size: 1.1rem;
    line-height: 2.5vh;
    padding-bottom: 1vh;
    padding-top: 2vh;
    word-break: normal;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .textFunFooterTwo {
      width: 90vw;
      font-size: 1.5rem;
      margin-top: 2vh;
      margin-left: 5vw;
    }
    .textFooterTwo {
      width: 66vw;
      font-size: 0.9rem;
      margin-left: 5vw;
      margin-top: 4vh;
    }
    .textFooterThree {
      width: 72vw;
      font-size: 1.2rem;
      margin-left: 5vw;
      margin-top: 2vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .textFunFooterTwo {
      width: 90vw;
      margin-top: 2vh;
      margin-left: 5vw;
    }
    .textFooterTwo {
      width: 70vw;
      margin-left: 5vw;
      margin-top: 4vh;
    }
    .textFooterThree {
      width: 75vw;
      margin-left: 5vw;
      margin-top: 2vh;
    }
  }
`;

export default SSeo;
