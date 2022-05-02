import styled from 'styled-components';

const SMouse = styled.div`
  position: absolute;
  padding-top: 40vh;
  height: 150px;
  width: 150px;
  .containerMouse {
    stroke: var(--primary-font-color);
    fill: var(--primary-font-color);
    animation: AnimContainerMouse 2s ease 0s infinite normal forwards;
  }
  @keyframes AnimContainerMouse {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }
  .lineMouse {
    animation: animLineMouse 2s ease 0s infinite alternate forwards;
    stroke: var(--secondary-font-color);
    fill: var(--secondary-font-color);
    @keyframes animLineMouse {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(100px);
      }
    }
  }
  /* MODE MOBIL*/
  @media screen and (max-width: 768px) {
    margin-top: 68vh;
    margin-left: 35vw;
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 75vh;
    margin-left: 42vw;
  }
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
    margin-top: 90vh;
    margin-left: 46.5vw;
  }
`;

export default SMouse;
