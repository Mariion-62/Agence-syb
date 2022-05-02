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
    margin-left: 30vw;
  }
  .itsThem {
    margin-left: 20vw;
    width: 20vw;
  }

  /* MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 767px) {
    margin-top: 50vh;
    .titleClient {
      font-size: 20px;
      width: 52vw;
      text-align: left;
      padding-left: 3vw;
      padding-bottom: 3vh;
    }
    .itsThem {
      display: none;
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
  @media screen and (max-width: 768px) {
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
