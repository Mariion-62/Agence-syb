import styled from 'styled-components';

const SPellMell = styled.section`
  .peleMele {
    margin: 20vh -75vw;
    width: 50vw;
  }
  .photo1 {
    width: 18vw;
    height: 50vh;
    position: absolute;
    z-index: 1;
    margin: 0vh 23vw;
    object-fit: cover;
  }
  .photo2 {
    width: 20vw;
    height: 22vh;
    object-fit: cover;
    margin: 6vh 0 0 5vw;
    z-index: 1;
    position: absolute;
  }
  .photo3 {
    width: 10vw;
    height: 35vh;
    position: absolute;
    margin: 38vh 15vw;
    object-fit: cover;
  }
  .photo4 {
    width: 28vw;
    height: 40vh;
    margin-top: 27vh;
    object-fit: cover;
    margin-left: -3vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .peleMele {
      width: 80vw;
      margin-left: 15vw;
      margin-top: 5vh;
    }
    .photo1 {
      width: 30vw;
      height: 25vh;
      margin-left: 41vw;
      margin-top: 0vh;
    }
    .photo2 {
      width: 40vw;
      height: 12vh;
      margin-top: 2vh;
    }
    .photo3 {
      width: 25vw;
      height: 20vh;
      margin-top: 17vh;
      margin-left: 21vw;
    }
    .photo4 {
      width: 48vw;
      height: 15vh;
      margin-top: 13vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .peleMele {
      width: 30vw;
      margin-left: 40vw;
      margin-top: -15vh;
    }
    .photo1 {
      width: 30vw;
    }
    .photo2 {
      width: 30vw;
      margin-top: 10vh;
      margin-left: -3vw;
    }
    .photo3 {
      width: 25vw;
    }
    .photo4 {
      width: 40vw;
      height: 30vh;
      margin-top: 30vh;
      margin-left: -15vw;
    }
  }
`;
export default SPellMell;
