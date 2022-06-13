import styled from 'styled-components';

const SHook = styled.div`
  background-color: var(--primary-bg-color);
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  display: flex;
  justify-content: center;
  height: 142vh;
  .headerHook {
    display: flex;
    flex-direction: column;
  }
  .textFunHook {
    font-size: 2rem;
    margin-left: 14vw;
  }

  .lineWhiteHook {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    margin-top: -2.5vh;
    padding-bottom: 5vh;
    margin-left: 50vw;
  }
  .textHook {
    width: 35vw;
    font-size: 1.3rem;
    margin-left: 50vw;
  }
  .video {
    padding-top: 2vh;
    padding-bottom: 20vh;
  }
  span.bolder {
    color: var(--secondary-font-color);
    font-weight: bolder;
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
      width: 72vw;
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
      width: 70vw;
      margin-top: 4vh;
      margin-left: 5vw;
    }
    .textHook {
      font-size: 18px;
      width: 54vw;
      margin: 0vh 0 0 5vw;
    }
    .video {
      padding-top: 2vh;
      padding-bottom: 5vh;
    }
  }
`;
export default SHook;
