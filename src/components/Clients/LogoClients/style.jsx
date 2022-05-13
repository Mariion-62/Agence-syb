import styled from 'styled-components';

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
      flex-direction: column;
      width: 90vw;
      margin: 5vh 0 5vh 2vw;
    }
    .containerLogoFirst {
      display: flex;
    }
    .containerLogoSecond {
      display: flex;
      margin-left: 5vw;
    }
    img {
      width: 35px;
      height: 35px;
      padding: 2vh 2vw;
      object-fit: contain;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .allContainerLogo {
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: 5vh 0 5vh 2vw;
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
  }
`;

export default SLogo;
