import styled from 'styled-components';

const SCta = styled.div`
  .btnFooter {
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
  svg {
    height: 100px;
    width: 100px;
    stroke: black;  
    stroke-width: 0.5%;  
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
`;
export default SCta;
