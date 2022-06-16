import styled from 'styled-components';

const SLogo = styled.div`
  background-color: var(--fourth-bg-color);
  .allContainerLogo {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: -1vh 0 5vh 6vw;
  }
  .containerLogoFirst {
    display: flex;
    margin-left: 2vw;
  }
  .containerLogoSecond {
    display: flex;
    margin-left: 6vw;
  }
  img {
    width: 150px;
    height: 150px;
    padding: 2vh 2vw;
    object-fit: contain;
  }
  .logoAAAG {
    width: 250px;
    margin-top: 2vh;
  }
  .logoNPE {
    width: 100px;
  }
  .logoCE {
    width: 100px;
  }
  .logoAXA {
    width: 120px;
  }
  .soixanteDouzeH {
    width: 120px;
  }
  .Helexia {
    margin-top: 1.5vh;
  }
  .logoCDH {
    width: 120px;
  }
  /*MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allContainerLogo {
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: 1vh 0 5vh 2vw;
    }
    .containerLogoFirst {
      display: flex;
    }
    .containerLogoSecond {
      display: flex;
      margin-left: 8vw;
    }
    img {
      width: 35px;
      height: 35px;
      padding: 2vh 2vw;
      object-fit: contain;
    }
    .logoAAAG {
      width: 35px;
      margin-top: 2vh;
    }
    .logoNPE {
      width: 35px;
    }
    .logoCE {
      width: 35px;
    }
    .logoAXA {
      width: 35px;
    }
    .soixanteDouzeH {
      width: 35px;
    }
    .Helexia {
      margin-top: 0vh;
    }
    .logoCDH {
      width: 35px;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allContainerLogo {
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: 3vh 0 5vh 2vw;
    }
    .containerLogoFirst {
      display: flex;
    }
    .containerLogoSecond {
      display: flex;
      margin-left: 5vw;
    }
    img {
      width: 75px;
      height: 75px;
      padding: 2vh 2vw;
      object-fit: contain;
    }
    .logoAAAG {
      width: 75px;
      margin-top: 2vh;
    }
    .logoNPE {
      width: 75px;
    }
    .logoCE {
      width: 75px;
    }
    .logoAXA {
      width: 75px;
    }
    .soixanteDouzeH {
      width: 75px;
    }
    .Helexia {
      margin-top: 0vh;
    }
    .logoCDH {
      width: 75px;
    }
  }
`;

export default SLogo;
