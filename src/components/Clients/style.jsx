import styled from 'styled-components';

const AllClient = styled.section`
  background-color: var(--fourth-bg-color);
`;
const HeaderClient = styled.section`
  background-color: var(--fourth-bg-color);
  color: var(--fourth-font-color);
  .titleClient {
    text-align: right;
    padding: 7% 27%;
  }
  .itsThem {
    margin-left: 20%;
  }

  .titleClient,
  .itsThem {
    padding-bottom: 20px;
    font-size: 35px;
    width: 40%;
    font-family: var(--title-font-family);
  }
  /* MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 768px) {
    margin-top: 50vh;
    .titleClient {
      font-size: 22px;
      width: 80%;
      padding-left: 0;
      padding-bottom: 3vh;
    }
    .itsThem {
      display: none;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 50vh;
    .itsThem {
      display: none;
    }
  }
`;

const STrustFolio = styled.section`
  @media screen and (max-width: 768px) {
  }
`;

const SLogo = styled.div`
  background-color: var(--fourth-bg-color);
  .containerSlide {
    width: 70vw;
    display: flex;
    margin: 5vh 15vw 13vh 17vw;
    flex-wrap: wrap;
  }
  img {
    width: 100px;
    height: 100px;
    padding: 2vh 2vw;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }
`;

export { HeaderClient, AllClient, STrustFolio, SLogo };