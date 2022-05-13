import styled from 'styled-components';

const AllClient = styled.section`
  background-color: var(--fourth-bg-color);
`;
const HeaderClient = styled.section`
  background-color: var(--fourth-bg-color);
  color: var(--fourth-font-color);
  font-family: var(--primary-font-family);
  font-size: 2.2rem;
  .titleClient {
    width: 37vw;
    margin-left: 50vw;
    padding-bottom: 5vh;
  }
  .lineBlackClients {
    border-top: var(--fourth-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
    margin-left: 50vw;
  }
  .itsThem {
    margin-left: 50vw;
    padding-bottom: 5vh;
    width: 20vw;
  }

  /* MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 767px) {
    margin-top: -8vh;
    .titleClient {
      font-size: 1.3rem;
      width: 90vw;
      margin-left: 5vw;
    }
    .lineBlackClients {
      border-top: var(--fourth-font-color) 1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
    .itsThem {
      font-size: 1.3rem;
      width: 90vw;
      margin-left: 5vw;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .titleClient {
      width: 90vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
    .lineBlackClients {
      border-top: var(--fourth-font-color) 1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
    .itsThem {
      width: 90vw;
      margin-left: 5vw;
    }
  }
`;

export { HeaderClient, AllClient };
