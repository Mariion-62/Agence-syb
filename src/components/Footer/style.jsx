import styled from 'styled-components';

const SFooter = styled.section`
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  height: 100vh;
  .allFooter {
    display: flex;
    flex-direction: column;
  }
  .blocLeftFooter {
    width: 50vw;
  }
  .titleContact {
    display: flex;
    width: 10vw;
    font-family: var(--title-font-family);
    font-size: 2.2rem;
    padding-bottom: 7vh;
    margin-left: 38vw;
  }
  .funFooter {
    display: flex;
    flex-direction: column;
    margin-left: 12vw;
  }
  .textFunFooterOne {
    font-size: 2.2rem;
    height: 15vh;
    margin-left: 2.5vw;
    width: 23vw;
  }
  .footerLineText {
    margin-left: 50vw;
    margin-top: -20vh;
  }
  .lineWhiteFooterText {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
  }
  .textFooterOne {
    width: 30vw;
    font-size: 1rem;
    text-align: left;
    line-height: 2.5vh;
    padding-bottom: 5vh;
  }
  .gridFooter {
    display: flex;
    width: 50vw;
    flex-wrap: wrap;
    margin-left: 50vw;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .blocRightFooter {
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .containerSocialLogo,
  .containerPhone,
  .containerAdresse,
  .containerMail {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .socialLogo {
    display: flex;
  }
  .social {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .adresse {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .phone {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .mail {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .iconLinkedIn {
    padding-top: 25vh;
    padding-left: 1.2vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconMail {
    padding-top: 18vh;
    padding-bottom: 2vh;
    padding-left: 1.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconInsta,
  .iconPhone {
    padding-top: 20vh;
    padding-left: 1.5vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconAdresse {
    padding-top: 17vh;
    padding-left: 1.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconArrow {
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .titleMail {
    font-size: 1.2rem;
    padding-top: 1vh;
  }
  .titleFollow,
  .titleAdresse,
  .titlePhone {
    padding-top: 2.5vh;
    font-size: 1.2rem;
    width: 10vw;
    display: flex;
    padding-left: 1.8vw;
  }
  .email {
    padding-top: 2vh;
    padding-left: 1.7vw;
    font-size: 1rem;
  }
  .place {
    padding-top: 1.5vh;
  }
  .place,
  .street,
  .city {
    font-size: 1rem;
    padding-left: 2vw;
  }
  .textFunFooterTwo {
    font-size: 2.2rem;
    width: 25vw;
    margin-left: 15vw;
    margin-top: -5vh;
  }
  .textFooterTwo {
    width: 35vw;
    margin-left: 50vw;
    font-size: 1.1rem;
    margin-top: -6.5vh;
    line-height: 2.5vh;
    border-top: 1px solid var(--primary-font-color);
    padding-bottom: 1vh;
    padding-top: 2vh;
  }
  .textFooterThree {
    width: 35vw;
    margin-left: 50vw;
    line-height: 2.5vh;
    font-size: 1.2rem;
  }
  .lastLine {
    width: 30vw;
    height: 1.5vh;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    vertical-align: middle;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 90vw;
      margin-top: 1vh;
    }
    .footerLineText {
      margin-left: 5vw;
    }
    .funFooter {
      margin-left: 1vw;
      margin-top: 2vh;
    }
    .textFunFooterOne {
      width: 62vw;
      font-size: 1.2rem;
      text-align: left;
      margin-left: 5vw;
    }
    .gridFooter {
      width: 95vw;
      margin-left: 5vw;
    }
    .titleContact {
      width: 32vw;
      height: 3vh;
      font-size: 1.5rem;
      margin-left: 5vw;
    }
    .textFooterOne {
      width: 55vw;
      font-size: 0.9rem;
      margin-top: 10vh;
      margin-left: 1vw;
    }
    .blocRightFooter {
      width: 100vw;
      height: 65vh;
      margin-bottom: 0vh;
    }
    .lineWhiteFooterText {
      border-top: var(--primary-font-color) 1px solid;
      width: 60vw;
      padding-top: 5vh;
      margin-left: 2vw;
    }
    .containerSocialLogo,
    .containerPhone,
    .containerAdresse,
    .containerMail {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
    .titleMail {
      padding-top: 2.5vh;
      padding-left: 2vw;
      padding-right: 0;
      width: 35vw;
      font-size: 0.9rem;
    }
    .titleFollow,
    .titleAdresse,
    .titlePhone {
      padding-top: 2.5vh;
      font-size: 0.9rem;
      width: 35vw;
    }
    .socialLogo {
      display: flex;
    }
    .social,
    .adresse,
    .phone,
    .mail {
      width: 45vw;
      height: 29vh;
    }
    .iconLinkedIn {
      padding-top: 5vh;
    }
    .iconMail {
      padding-top: 5vh;
      padding-bottom: 0;
    }
    .iconInsta,
    .iconPhone {
      padding-top: 5vh;
    }
    .iconAdresse {
      padding-top: 5vh;
    }
    .iconArrow {
      padding: 18vh 1vw 0 0;
    }
    .place,
    .street,
    .city {
      padding-left: 1vh;
      font-size: 10px;
      line-height: 15px;
    }
    .email {
      padding-left: 12%;
      font-size: 10px;
      width: 60%;
    }
    .copyright {
      padding-top: 1vh;
      text-align: center;
    }
    .textFunFooterTwo {
      width: 90vw;
      font-size: 1.5rem;
      margin-top: 2vh;
      margin-left: 5vw;
    }
    .textFooterTwo {
      width: 70vw;
      font-size: 0.9rem;
      margin-left: 5vw;
      margin-top: 4vh;
    }
    .textFooterThree {
      width: 80vw;
      font-size: 1.2rem;
      margin-left: 5vw;
      margin-top: 2vh;
    }
    .lastLine {
      width: 90vw;
      margin-top: 5vh;
    }
    .mentionLegal {
      margin-top: 1vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 95vw;
    }
    .textFunFooter {
      width: 11%;
      font-size: 11px;
      padding: 15% 3% 0 0%;
      text-align: left;
    }
    h1 {
      padding-bottom: 10%;
      height: 5%;
    }
    .textFooter {
      padding-left: 10%;
      width: 20vw;
    }
    .blocRightFooter {
      width: 80%;
      margin: 0 8%;
    }
    .containerSocialLogo,
    .containerPhone,
    .containerAdresse,
    .containerMail {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
    .titleMail {
      padding-left: 10%;
      width: 30vw;
    }
    h3 {
      width: 20vw;
      padding-left: 10%;
    }
    .socialLogo {
      display: flex;
    }
    .social {
      margin-left: 3%;
      width: 45%;
      height: 50%;
    }
    .adresse {
      margin-left: 3%;
      width: 45%;
      height: 50%;
    }
    .phone {
      width: 45%;
      height: 50%;
    }
    .mail {
      width: 45%;
      height: 50%;
    }
    .iconLinkedIn {
      padding-top: 5vh;
    }
    .iconMail {
      padding-top: 5vh;
      padding-bottom: 0;
    }
    .iconInsta,
    .iconPhone {
      padding-top: 5vh;
    }
    .iconAdresse {
      padding-top: 5vh;
    }
    .icon {
      padding: 30% 10% 10% 20%;
    }
    .iconArrow {
      padding: 60% 5% 5% 0;
    }
    .email {
      padding-left: 12%;
      font-size: 12px;
      line-height: 15px;
    }
    .place,
    .street,
    .city {
      padding-left: 1vw;
      font-size: 12px;
      line-height: 15px;
    }
  }
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
    height: 70vh;
    .textFunFooter {
      width: 13%;
      line-height: 14px;
    }
    .textFooter {
      line-height: 14px;
    }
    .titleMail {
      padding-left: 10%;
    }
    .socialLogo {
      display: flex;
    }
    .iconLinkedIn {
      padding-top: 13vh;
    }
    .iconMail {
      padding-top: 13vh;
    }
    .iconInsta,
    .iconPhone {
      padding-top: 13vh;
    }
    .iconAdresse {
      padding-top: 13vh;
    }
    .icon {
      padding: 30% 10% 10% 20%;
    }
    .iconArrow {
      padding: 60% 5% 5% 0;
    }
  }
`;

export default SFooter;
