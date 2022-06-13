import styled from 'styled-components';

const SContactUs = styled.section`
  font-family: var(--primary-font-family);
  .blocRightFooter {
    width: 80vw;
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .gridFooter {
    display: flex;
    width: 100vw;
    margin-left: 15vw;
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
  a {
    text-decoration: none;
    color: white;
  }
  .social {
    display: flex;
    border: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .adresse {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    border-left: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .phone {
    display: flex;
    border-top: 1px solid var(--fourth-bg-color);
    border-bottom: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .mail {
    display: flex;
    border: 1px solid var(--fourth-bg-color);
    width: 17.5vw;
    height: 32vh;
    color: var(--primary-font-color);
  }
  .iconLinkedIn,
  .iconFacebook {
    padding-top: 10vh;
    padding-left: 1.2vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconMail {
    padding-top: 10vh;
    padding-bottom: 2vh;
    padding-left: 1.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconInsta,
  .iconPhone {
    padding-top: 10vh;
    padding-left: 1.5vw;
    color: var(--primary-font-color);
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconAdresse {
    padding-top: 10vh;
    padding-left: 1.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .iconArrow {
    padding-top: 28vh;
    padding-right: 1.5vw;
    &:hover {
      color: var(--secondary-bg-color);
    }
  }
  .titleMail {
    font-size: 1.2rem;
    padding-left: 1.5vw;
    padding-top: 0.5vh;
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
    font-size: 0.9rem;
  }
  .place {
    padding-top: 1.5vh;
    font-size: 0.9rem;
    padding-left: 2vw;
    line-height: 2vh;
  }
  /*MODE MOBIL*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    .gridFooter {
      width: 90vw;
      margin-left: 2vw;
      flex-wrap: wrap;
    }
    .titleContact {
      width: 32vw;
      height: 3vh;
      font-size: 1.5rem;
      margin-left: 5vw;
    }
    .textFooterOne {
      width: 60vw;
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
    .phone {
      border: 1px solid var(--primary-font-color);
    }
    .social,
    .adresse,
    .phone,
    .mail {
      width: 44vw;
      height: 29vh;
    }
    .iconLinkedIn {
      padding-top: 8vh;
    }
    .iconMail {
      padding-top: 5vh;
      padding-bottom: 0;
    }
    .iconInsta,
    .iconPhone,
    .iconFacebook {
      padding-top: 8vh;
    }
    .iconAdresse {
      padding-top: 5vh;
    }
    .iconArrow {
      padding: 20vh 1vw 0 0;
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
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .blocRightFooter {
      width: 100vw;
      height: 65vh;
      margin-bottom: 0vh;
    }
    .gridFooter {
      width: 95vw;
      margin-left: 5vw;
      flex-wrap: wrap;
      margin-top: 2vh;
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
      padding-left: 5vw;
      padding-right: 0;
      width: 35vw;
    }
    .titleFollow,
    .titleAdresse,
    .titlePhone {
      padding-top: 2.5vh;
      padding-left: 5vw;
      width: 35vw;
    }
    .socialLogo {
      display: flex;
    }
    .phone {
      border: 1px solid var(--primary-font-color);
    }
    .social,
    .adresse,
    .phone,
    .mail {
      width: 45vw;
      height: 29vh;
    }
    .iconLinkedIn,
    .iconFacebook {
      padding-top: 5vh;
    }
    .iconMail {
      padding-top: 5vh;
      padding-left: 5vw;
      padding-bottom: 0;
    }
    .iconInsta,
    .iconPhone {
      padding-left: 5vw;
      padding-top: 5vh;
    }
    .iconAdresse {
      padding-left: 5vw;
      padding-top: 5vh;
    }
    .iconArrow {
      padding: 18vh 1vw 0 0;
    }
    .place,
    .street,
    .city {
      padding-left: 5vw;
      line-height: 15px;
    }
    .email {
      padding-left: 5vw;
      width: 60%;
    }
  }
`;

export default SContactUs;
