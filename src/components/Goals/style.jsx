import styled from 'styled-components';

const SGoals = styled.section`
  background-color: var(--primary-bg-color);
  color: var(--fourth-bg-color);
  font-family: var(--primary-font-family);
  .blocGoal {
    display: flex;
    height: 90vh;
    padding-top: 5vh;
  }
  .parafGoal {
    display: flex;
    flex-direction: column;
  }
  .containerTitleGoal {
    display: flex;
    width: 25vw;
    height: 6vh;
    font-family: var(--title-font-family);
    margin-left: 11vh;
    margin-top: 5vh;
  }
  .textFun {
    font-size: 2.2rem;
    margin-top: 1.6vh;
    margin-left: 5vw;
    text-align: right;
  }
  .rightGoals {
    margin-left: 50vw;
    width: 30vw;
    margin-top: -10vh;
  }
  .titleGoal {
    font-size: 2.2rem;
    padding-bottom: 2vh;
  }
  .lineWhiteGoalsText {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
  }
  .textGoal {
    width: 27vw;
    font-family: var(--title-font-family);
    font-size: 1.2rem;
    text-align: left;
    line-height: 2.5vh;
  }
  .listGoal {
    padding: 2vh 2vw;
    height: 3vh;
    width: 27vw;
    display: flex;
  }
  .target {
    padding-right: 2vw;
    padding-top: 0.1vh;
  }
  .textGoalTwo {
    width: 30vw;
    font-family: var(--title-font-family);
    font-size: 1.3rem;
    text-align: left;
    line-height: 2.5vh;
    padding-top: 5vh;
    word-break: normal;
  }
  .textGoalThree {
    width: 40vw;
    font-size: 1.3rem;
    padding-top: 5vh;
    text-align: left;
    line-height: 2.5vh;
  }
  .btnMeet {
    font-family: var(--primary-font-family);
    font-size: 1rem;
    width: 10vw;
    height: 3vh;
    margin-top: 7vh;
    background-color: var(--secondary-bg-color);
    color: var(--fourth-font-color);
    border: none;
    border-radius: 100px 0px 100px 0px;
    cursor: pointer;
    transition: 200ms;
    opacity: 1;
    &:hover {
      background-color: var(--fourth-bg-color);
      color: var(--fourth-font-color);
      border-radius: 0px 100px 0px 100px;
      transition: 300ms;
      opacity: 0;
      .ctaGoals {
        opacity: 1;
      }
    }
  }
  .ctaGoals {
    background-color: white;
    opacity: 0;
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 110vh;
    .blocGoal {
      display: flex;
      flex-direction: column;
      width: 90vw;
    }
    .parafGoal {
      display: flex;
    }
    .containerTitleGoal {
      width: 90vw;
      margin-left: 2.5vw;
    }
    .textFun {
      width: 50vw;
      margin-left: 2.5vw;
      margin-top: 3vh;
      font-size: 20px;
    }
    .rightGoals {
      width: 70vw;
      margin-left: 5vw;
    }
    .titleGoal {
      width: 60vw;
      margin-top: -3vh;
    }
    .lineWhiteGoalsText {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
    }
    .textGoal {
      width: 64vw;
      font-size: 0.9rem;
      margin-top: 8vh;
    }
    .textGoalTwo {
      width: 90vw;
      font-size: 0.9rem;
      margin-top: 0vh;
    }
    .textGoalThree {
      width: 70vw;
      font-size: 1.2rem;
    }
    .btnMeet {
      width: 40vw;
      height: 3vh;
      font-size: 0.9rem;
      margin-left: 11vh;
      margin-top: 3vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 110vh;
    .blocGoal {
      display: flex;
      flex-direction: column;
      width: 90vw;
    }
    .parafGoal {
      display: flex;
    }
    .containerTitleGoal {
      width: 90vw;
      margin-left: 2.5vw;
    }
    .textFun {
      width: 50vw;
      margin-left: 2.5vw;
      margin-top: 1vh;
      font-size: 20px;
    }
    .rightGoals {
      width: 70vw;
      margin-left: 5vw;
    }
    .titleGoal {
      width: 60vw;
      margin-top: -3vh;
    }
    .lineWhiteGoalsText {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
    }
    .textGoal {
      width: 80vw;
      margin-top: 5vh;
    }
    .textGoalTwo {
      width: 80vw;
      margin-top: 0vh;
    }

    .textGoalThree {
      width: 70vw;
    }
    .btnMeet {
      width: 40vw;
      height: 3vh;
      margin-left: 0vw;
      margin-top: 3vh;
    }
  }
`;

export default SGoals;
