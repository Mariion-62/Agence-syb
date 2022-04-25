import styled from 'styled-components';

const SFooter = styled.section`
  color: var(--primary-font-color);
  font-family: var(--primary-font-family);
  font-size: 13px;
  height: 100vh;
  .allFooter {
    display: flex;
  }
  .blocLeftFooter {
    width: 50%;
  }
  .titleFooter {
    width: 60%;
  }
  h1 {
    display: flex;
    width: 100%;
    padding: 25% 10%;
    justify-content: center;
    font-family: var(--title-font-family);
    font-size: 35px;
    text-align: right;
  }
  .funFooter {
    display: flex;
  }
  .textFunFooter {
    width: 30vw;
    font-size: 11px;
    padding: 20% 3% 0 2%;
    text-align: left;
    line-height: 11px;
  }
  .textFooter {
    width: 18vw;
    font-size: 12px;
    text-align: right;
    margin-left: 20%;
    line-height: 11px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .linkFooter {
    pointer-events: none;
  }
  .blocRightFooter {
    width: 50%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2%;
  }
  .containerSocialLogo,
  .containerPhone,
  .containerAdresse,
  .containerMail {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h3 {
    display: flex;
    padding-left: 20%;
    line-height: 20px;
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
    width: 45%;
    height: 50%;
    color: var(--primary-font-color);
  }
  .adresse {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 1px solid var(--fourth-bg-color);
    width: 45%;
    height: 50%;
    color: var(--primary-font-color);
  }
  .phone {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 45%;
    height: 50%;
    color: var(--primary-font-color);
  }
  .mail {
    display: flex;
    border-top: 0;
    border-right: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 0;
    width: 45%;
    height: 50%;
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
    padding-bottom: 3vh;
    padding-left: 4vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconInsta,
  .iconPhone {
    padding-top: 25vh;
    padding-left: 3.6vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconAdresse {
    padding-top: 18vh;
    padding-left: 3.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .icon {
    padding: 30% 10% 10% 20%;
  }
  .iconArrow {
    padding: 80% 0 0 0;
    width: 20%;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .titleMail {
    padding: 0% 0% 5% 20%;
  }
  .titlePhone {
    width: 100%;
  }
  .titleFollow,
  .titleAdresse,
  .titlePhone {
    padding-top: 8%;
  }
  .place,
  .street,
  .city,
  .email {
    font-size: 10px;
    padding-left: 20%;
  }
  .copyright {
    padding-top: 5vh;
    text-align: center;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 768px) {
    .allFooter {
      display: flex;
      flex-direction: column;
    }
    .blocLeftFooter {
      width: 100%;
    }
    .textFunFooter {
      width: 22%;
      font-size: 11px;
      padding: 27% 3% 0% 5%;
      text-align: left;
    }
    .titleFooter {
      width: 45%;
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 10%;
    }
    .textFooter {
      width: 42vw;
      padding-bottom: 10%;
      line-height: 15px;
    }
    .blocRightFooter {
      width: 90%;
      margin: 0 5%;
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
      padding-top: 9%;
      padding-left: 10%;
      padding-right: 0;
      width: 35vw;
    }
    h3 {
      width: 20vw;
      padding-left: 10%;
    }
    .socialLogo {
      display: flex;
    }
    .social {
      width: 49%;
      height: 50%;
    }
    .adresse {
      width: 49%;
      height: 50%;
    }
    .phone {
      width: 49%;
      height: 50%;
    }
    .mail {
      width: 49%;
      height: 50%;
    }
    .iconLinkedIn {
      padding-top: 2vh;
    }
    .iconMail {
      padding-top: 2vh;
      padding-bottom: 0;
    }
    .iconInsta,
    .iconPhone {
      padding-top: 2vh;
    }
    .iconAdresse {
      padding-top: 2vh;
    }
    .iconArrow {
      padding: 80% 5% 2% 0%;
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
      padding-top: 40%;
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
