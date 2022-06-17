import styled from 'styled-components';

const SHook = styled.div`
  background-color: var(--primary-bg-color);
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  display: flex;
  justify-content: center;
  height: 120vh;
  .headerHook {
    display: flex;
    flex-direction: column;
  }
  .textFunHook {
    font-size: 2rem;
    margin-left: 16vw;
    text-align: right;
    width: 11vw;
  }
  .lineWhiteHook {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    margin-top: -6.5vh;
    padding-bottom: 5vh;
    margin-left: 43.5vw;
  }
  .textHook {
    width: 35vw;
    font-size: 1.3rem;
    margin-left: 43.5vw;
  }
  .video {
    padding-top: 2vh;
    padding-bottom: 5vh;
  }
  span.bolder {
    color: var(--secondary-font-color);
    font-weight: bolder;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 50vh;
    padding: 2vh 0;
    .textFunHook {
      font-size: 1.6rem;
      margin-left: 10vw;
      width: 40vw;
      text-align: left;
    }
    .lineWhiteHook {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
      margin-top: 4vh;
      margin-left: 10vw;
    }
    .textHook {
      font-size: 18px;
      width: 72vw;
      margin: 0vh 0 0 10vw;
    }
    .video {
      padding-top: 2vh;
      padding-bottom: 5vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 60vh;
    padding: 5vh 0;
    .textFunHook {
      font-size: 1.6rem;
      margin-left: 5vw;
      width: 23vw;
      text-align: left;
    }
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
