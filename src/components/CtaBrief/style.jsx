import styled from 'styled-components';

const SCta = styled.div`
  .btnFooter {
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    z-index: 3;
  }
  .svgCtaBrief {
    height: 170px;
    width: 170px;
    stroke: var(--fourth-font-color);
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
    :hover {
      stroke: var(--secondary-font-color);
    }
  }
`;
export default SCta;
