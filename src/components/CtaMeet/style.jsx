import styled from 'styled-components';

const SCtaMeet = styled.div`
  .btnMeet {
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    margin-top: 5vh;
    margin-left: 5vh;
  }
  .svgCtaMeet {
    height: 170px;
    width: 170px;
    stroke: var(--secondary-font-color);
    stroke-width: 1%;
    animation: rotate 30s linear 0s infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export default SCtaMeet;
