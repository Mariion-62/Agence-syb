import styled from 'styled-components';

const SMentionLegals = styled.section`
  color: white;
  font-family: var(--primary-font-family);
  .titleMentionPage {
    display: flex;
    justify-content: center;
    margin: 5vh 0;
    font-size: 2.2rem;
  }
  .mentionArticle {
    width: 60vw;
    margin: 8vh 20vw 5vh 20vw;
  }
  .titleMentionArticle {
    font-weight: bolder;
    margin-bottom: 2vh;
    font-size: 1.5rem;
  }
  .contentMentionArticle {
    text-align: justify;
    font-size: 1.3rem;
    line-height: 3vh;
  }
  .mailMention {
    text-decoration: none;
    cursor: pointer;
    color: var(--primary-font-color);
  }
  /*MODE MOBIL */
  @media screen and (min-width: 360px) and (max-width: 767px) {
    padding-top: 15%;
    .titleMentionPage {
      margin: 5vh 2vw;
      text-align: center;
      font-size: 1.5rem;
    }
    .mentionArticle {
      width: 90vw;
      margin: 2vh 5vw 5vh 5vw;
    }
    .titleMentionArticle {
      font-weight: bolder;
      margin-bottom: 2vh;
      font-size: 1.2rem;
    }
    .contentMentionArticle {
      text-align: justify;
      font-size: 1rem;
      line-height: 3vh;
    }
  }
  /*MODE TABLET */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .titleMentionPage {
      width: 80vw;
      margin: 5vh 5vw;
      font-size: 2.2rem;
    }
    .mentionArticle {
      width: 90vw;
      margin: 8vh 5vw 5vh 5vw;
    }
  }
`;

export default SMentionLegals;
