import styled from 'styled-components';

const SBtnUp = styled.div`
  .btnUp {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 20px;
    bottom: 5px;
    cursor: pointer;
    border-radius: 50%;
    background-color: transparent;
    border: none;
  }
  g {
    fill: var(--secondary-font-color);
    stroke: var(--secondary-font-color);
    stroke-width: 0.8%;
  }
  .arrowUp {
    animation: animBtnUp 2s ease 0s infinite forwards;
    @keyframes animBtnUp {
      0% {
        animation-timing-function: ease-in;
        opacity: 1;
        transform: translateY(24px);
      }

      24% {
        opacity: 1;
      }

      40% {
        animation-timing-function: ease-in;
        transform: translateY(24px);
      }

      65% {
        animation-timing-function: ease-in;
        transform: translateY(12px);
      }

      82% {
        animation-timing-function: ease-in;
        transform: translateY(6px);
      }

      93% {
        animation-timing-function: ease-in;
        transform: translateY(4px);
      }

      25%,
      55%,
      75%,
      87% {
        animation-timing-function: ease-out;
        transform: translateY(0px);
      }

      100% {
        animation-timing-function: ease-out;
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  }
`;

export default SBtnUp;
