import styled from 'styled-components';

const SDownFooter = styled.section`
  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--primary-font-color);
  }
  .lastLine {
    width: 30vw;
    height: 1.5vh;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    vertical-align: middle;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .copyright {
      padding-top: 1vh;
      text-align: center;
    }
    .lastLine {
      width: 90vw;
      margin-top: 5vh;
    }
    .mentionLegal {
      margin-top: 1vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .copyright {
      padding-top: 1vh;
      text-align: center;
    }
    .lastLine {
      width: 90vw;
      margin-top: 5vh;
    }
    .mentionLegal {
      margin-top: 1vh;
    }
  } ;
`;

export default SDownFooter;
