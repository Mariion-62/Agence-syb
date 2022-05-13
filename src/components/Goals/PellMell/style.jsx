import styled from 'styled-components';

const SPellMell = styled.section`
  .peleMele {
    margin: 20vh -75vw;
    width: 50vw;
  }
  .photo5 {
    width: 15vw;
    position: absolute;
    z-index: 1;
    margin: 0vh 23vw;
  }
  .photo6 {
    width: 20vw;
    height: 20vh;
    object-fit: cover;
    margin: 5vh 5vw;
    z-index: 1;
    position: absolute;
  }
  .photo7 {
    width: 10vw;
    height: 30vh;
    position: absolute;
    margin: 38vh 15vw;
    object-fit: cover;
  }
  .photo9 {
    width: 30vw;
    margin-top: 27vh;
    margin-left: -3vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .peleMele {
      width: 80vw;
      margin-left: 10vw;
      margin-top: 5vh;
    }
    .photo5 {
      width: 38vw;
      margin-left: 41vw;
      margin-top: 0vh;
    }
    .photo6 {
      width: 40vw;
      height: 12vh;
      margin-top: 5vh;
    }
    .photo7 {
      width: 25vw;
      height: 20vh;
      margin-top: 27vh;
      margin-left: 21vw;
    }
    .photo9 {
      width: 50vw;
      height: 15vh;
      margin-top: 19vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .peleMele {
      width: 80vw;
      margin-left: 5vw;
      margin-top: 5vh;
    }
    .photo5 {
      width: 38vw;
      margin-left: 41vw;
      margin-top: 0vh;
    }
    .photo6 {
      width: 40vw;
      height: 12vh;
      margin-top: 5vh;
    }
    .photo7 {
      width: 25vw;
      height: 20vh;
      margin-top: 27vh;
      margin-left: 21vw;
    }
    .photo9 {
      width: 50vw;
      height: 15vh;
      margin-top: 19vh;
    }
  }
`;
export default SPellMell;
