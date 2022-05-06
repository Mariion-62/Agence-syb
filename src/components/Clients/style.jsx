import styled from 'styled-components';

const AllClient = styled.section`
  background-color: var(--fourth-bg-color);
`;
const HeaderClient = styled.section`
  background-color: var(--fourth-bg-color);
  color: var(--fourth-font-color);
  font-family: var(--primary-font-family);
  font-size: 35px;
  .titleClient {
    width: 42vw;
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
    margin-top: 50vh;
    .itsThem {
      display: none;
    }
  }
`;

const STrustFolio = styled.section`
  margin: 10vh 0vw 15vh 0vw;
  @media screen and (min-width: 360px) and (max-width: 767px) {
    margin: 2vh 0vw 5vh 0vw;
  }
`;

const SLogo = styled.div`
  background-color: var(--fourth-bg-color);
  .allContainerLogo {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 15vh 0 15vh 18vw;
  }
  .containerLogoFirst {
    display: flex;
  }
  .containerLogoSecond {
    display: flex;
    margin-left: 5vw;
  }
  img {
    width: 100px;
    height: 100px;
    padding: 2vh 2vw;
    object-fit: contain;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allContainerLogo {
      display: flex;
      flex-direction: row;
      margin: 0 0 5vh 15vw;
    }
    .containerLogoFirst {
      flex-direction: column;
    }
    .containerLogoSecond {
      flex-direction: column;
      margin-top: 8vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }
`;

export { HeaderClient, AllClient, STrustFolio, SLogo };
