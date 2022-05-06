import styled from 'styled-components';

const SMouse = styled.div`
  position: absolute;
  margin-top: 130vh;
  margin-left: 45vw;
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
  @media screen and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export default SMouse;
