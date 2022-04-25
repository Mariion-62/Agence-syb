import styled from 'styled-components';

const SHeader = styled.header`
  background-color: black;
  display: flex;
  padding: 0;
  .imgLogo {
    width: 8vw;
    margin: 0 15% 0 8%;
    padding: 2%;
  }
  /* MODE MOBIL*/
  @media screen and (max-width: 768px) {
    .imgLogo {
      width: 15vw;
      margin: 0 4% 0 4%;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .imgLogo {
      width: 15vw;
      margin: 0 4% 0 8%;
    }
  }
`;

export default SHeader;
