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
`;

export default SMentionLegals;
