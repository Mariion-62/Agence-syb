import { createGlobalStyle } from 'styled-components';
import './fonts/NeueHaasDisplay-Mediu.woff';
import './fonts/NeueHaasDisplay-Mediu.woff2';

const GlobalStyle = createGlobalStyle`
  }
  :root{
    --primary-bg-color: #000000;
    --secondary-bg-color: #fcd629;
    --thirdy-bg-color:#33392d;
    --fourth-bg-color: #ffffff;
    --primary-font-color: #ffffff;
    --secondary-font-color: #fcd629;
    --thirdy-font-color: #33392d;
    --fourth-font-color: #000000;
    --primary-font-family: 'Dosis', sans-serif;
    --title-font-family: 'Dosis', sans-serif;
    scroll-behavior: smooth;
  }
  body {
      width: 100vw;
      height: 100vh;
      background-color: var(--primary-bg-color);
  }
  ::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (max-width: 768px) {
    body {
      width: 100%;
      height: 100%;
    }
  `;
export default GlobalStyle;
