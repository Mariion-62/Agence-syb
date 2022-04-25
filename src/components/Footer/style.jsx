import styled from 'styled-components';

const SFooter = styled.section`
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  height: 100vh;
  padding-top: 10vh;
  .allFooter {
    display: flex;
  }
  .blocLeftFooter {
    width: 50vw;
  }
  .lineWhiteFooter {
    border-top: var(--primary-font-color) 1px solid;
    width: 65vw;
    padding-top: 5vh;
    margin-left: 15vw;
  }
  .titleContact {
    display: flex;
    width: 10vw;
    justify-content: center;
    font-family: var(--title-font-family);
    font-size: 13px;
    text-align: right;
  }
  .funFooter {
    display: flex;
    margin-left: 12vw;
  }
  .textFunFooterOne {
    font-size: 25px;
    height: 15vh;
    margin-left: 2.5vw;
    width: 20vw;
  }
  .lineWhiteFooterText {
    border-top: var(--primary-font-color) 1px solid;
    width: 30vw;
    padding-top: 5vh;
  }
  .textFooterOne {
    width: 30vw;
    font-size: 25px;
    text-align: left;
    line-height: 2.5vh;
    padding-bottom: 5vh;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .blocRightFooter {
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    padding-top: 21vh;
  }
  .containerSocialLogo,
  .containerPhone,
  .containerAdresse,
  .containerMail {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  h3 {
    display: flex;
    padding-left: 3.6vw;
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
    width: 22vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .adresse {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 1px solid var(--fourth-bg-color);
    width: 22vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .phone {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 22vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .mail {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 22vw;
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
    padding-left: 4vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconInsta,
  .iconPhone {
    padding-top: 20vh;
    padding-left: 4vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconAdresse {
    padding-top: 17vh;
    padding-left: 3.5vw;
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
    margin-left: 2vw;
    font-size: 25px;
  }
  .titlePhone {
    width: 100%;
  }
  .titleFollow,
  .titleAdresse,
  .titlePhone {
    padding-top: 2.5vh;
    font-size: 25px;
  }
  .email {
    padding-top: 2vh;
    padding-left: 4vw;
    font-size: 20px;
  }
  .place {
    padding-top: 1.5vh;
  }
  .place,
  .street,
  .city {
    font-size: 20px;
    padding-left: 3.7vw;
  }
  .copyright {
    padding-top: 5vh;
    font-size: 20px;
    text-align: center;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 100vw;
    }
    .lineWhiteFooter {
      width: 60vw;
      margin-left: 5vw;
    }
    .funFooter {
      margin-left: 1vw;
    }
    .textFunFooterOne {
      width: 40vw;
      font-size: 20px;
      text-align: left;
    }
    .titleContact {
      width: 20vw;
      margin-right: 8vw;
    }
    .textFooterOne {
      width: 60vw;
      font-size: 20px;
    }
    .blocRightFooter {
      width: 90vw;
      padding-top: 0vh;
      margin-left: 4vw;
    }
    .lineWhiteFooterText {
      border-top: var(--primary-font-color) 1px solid;
      width: 60vw;
      padding-top: 5vh;
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
      font-size: 18px;
    }
    .titleFollow,
    .titleAdresse,
    .titlePhone {
      padding-top: 2.5vh;
      font-size: 18px;
    }
    h3 {
      width: 20vw;
      font-size: 10px;
      padding-left: 10%;
    }
    .socialLogo {
      display: flex;
    }
    .social,
    .adresse,
    .phone,
    .mail {
      width: 44vw;
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
      padding-left: 12%;
      font-size: 10px;
      line-height: 15px;
    }
    .email {
      padding-left: 12%;
      font-size: 10px;
      width: 60%;
    }
    .copyright {
      padding-top: 9vh;
      text-align: center;
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
      padding-left: 12%;
      font-size: 12px;
      line-height: 15px;
    }
    .copyright {
      padding-top: 25%;
      text-align: center;
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
