import styled from 'styled-components';

const SHook = styled.div`
  background-color: var(--primary-bg-color);
  color: var(--primary-font-color);
  display: flex;
  justify-content: center;
  height: 140vh;
  .lineWhiteHook {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    padding-bottom: 5vh;
    margin-left: 50vw;
  }
  .textHook {
    width: 30vw;
    font-family: var(--primary-font-family);
    font-size: 1.5rem;
    margin-left: 50vw;
  }
  .video {
    padding-top: 10vh;
    padding-bottom: 20vh;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 50vh;
    padding: 2vh 0;
    .lineWhiteHook {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
      margin-top: 4vh;
      margin-left: 5vw;
    }
    .textHook {
      font-size: 18px;
      width: 70vw;
      margin: 0vh 0 0 5vw;
    }
    .video {
      padding-top: 2vh;
      padding-bottom: 5vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 60vh;
    padding: 15vh 0;

    .lineWhiteHook {
      border-top: var(--primary-font-color) 1px solid;
      width: 60vw;
    }
    .textHook {
      width: 60vw;
      margin: 5vh 0 0 12vw;
    }
    .video {
      padding-top: 6vh;
      padding-bottom: 5vh;
    }
  }
  /*MODE DESKTOP MAC*/
  @media screen and (min-width: 1440px) {
  }
`;
export default SHook;
