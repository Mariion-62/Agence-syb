import styled from 'styled-components';

const SGoals = styled.section`
  background-color: var(--primary-bg-color);
  color: var(--fourth-bg-color);
  font-family: var(--primary-font-family);
  ${'' /* margin-top: 5vh; */}
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
    margin-left: 32vh;
    margin-top: 5vh;
  }
  .lineWhiteGoalsText {
    border-top: var(--primary-font-color) 1px solid;
    width: 35vw;
    padding-top: 5vh;
  }
  .titleGoal {
    font-size: 2.2rem;
    padding-bottom: 2vh;
  }
  .textFun {
    font-size: 2.2rem;
    margin-left: 5vw;
  }
  .rightGoals {
    margin-left: 50vw;
    width: 30vw;
    margin-top: -10vh;
  }
  .textGoal {
    width: 42vw;
    font-family: var(--title-font-family);
    font-size: 1.1rem;
    text-align: left;
    line-height: 2.5vh;
  }
  .textGoalTwo {
    width: 40vw;
    font-size: 1.1rem;
    padding-top: 5vh;
    text-align: left;
    line-height: 2.5vh;
  }
  .peleMele {
    position: absolute;
    margin: 15vh 10vw;
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
    cursor: pointer;
    &:hover {
      background-color: var(--fourth-bg-color);
      color: var(--fourth-font-color);
    }
  }
  .photo5 {
    width: 15vw;
    position: absolute;
    z-index: 1;
    margin: 0vh 23vw;
  }
  .photo6 {
    width: 20vw;
    height: 20vh;
    object-fit: cover;
    margin: 5vh 5vw;
    z-index: 1;
    position: absolute;
  }
  .photo7 {
    width: 10vw;
    height: 30vh;
    position: absolute;
    margin: 38vh 15vw;
    object-fit: cover;
  }
  .photo9 {
    width: 30vw;
    margin-top: 27vh;
    margin-left: -3vw;
  }
  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 100vh;
    .blocGoal {
      display: flex;
      flex-direction: column;
      width: 90vw;
    }
    .titleGoal {
      width: 60vw;
      margin-top: -3vh;
    }
    .parafGoal {
      display: flex;
    }
    .lineWhiteGoals {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
      padding-top: 5vh;
      margin-left: 5vw;
    }
    .containerTitleGoal {
      width: 90vw;
      margin-left: 2.5vh;
    }
    .contentGoal {
      width: 90vw;
    }
    .rightGoals {
      width: 70vw;
      margin-left: 5vw;
    }
    .lineWhiteGoalsText {
      border-top: var(--primary-font-color) 1px solid;
      width: 70vw;
    }
    .textGoal {
      width: 80vw;
      font-size: 5vw;
      font-size: 0.9rem;
      margin-top: 5vh;
    }
    .textGoalTwo {
      width: 70vw;
      font-size: 1.2rem;
    }
    .textFun {
      width: 50vw;
      margin-left: 0vw;
      margin-top: 1vh;
      font-size: 20px;
    }
    .btnMeet {
      width: 40vw;
      height: 3vh;
      font-size: 0.9rem;
      margin-left: 11vh;
      margin-top: 3vh;
    }
    .peleMele {
      width: 80vw;
      margin-top: 55vh;
    }
    .photo5 {
      width: 38vw;
      margin-left: 41vw;
      margin-top: 0vh;
    }
    .photo6 {
      width: 40vw;
      height: 12vh;
      margin-top: 5vh;
    }
    .photo7 {
      width: 25vw;
      height: 20vh;
      margin-top: 27vh;
      margin-left: 21vw;
    }
    .photo9 {
      width: 50vw;
      height: 15vh;
      margin-top: 19vh;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 100vh;
    .containerTitleGoal {
      margin-left: 0;
      font-size: 1.5rem;
      width: 50vw;
    }
    .textGoal {
      font-size: 0.9rem;
      width: 30vw;
    }
    .textGoalTwo {
      width: 35vw;
      font-size: 1.5rem;
    }
    .btnMeet {
      width: 25vw;
      margin-top: 3vh;
    }
    .peleMele {
      width: 80vw;
      margin-top: 53vh;
      height: 50vh;
    }
    .photo5 {
      width: 38vw;
      margin-left: 41vw;
      margin-top: 0vh;
    }
    .photo6 {
      width: 40vw;
      height: 12vh;
      margin-top: 4vh;
    }
    .photo7 {
      width: 20vw;
      height: 20vh;
      margin-top: 27vh;
      margin-left: 25vw;
    }
    .photo9 {
      width: 50vw;
      height: 15vh;
      margin-top: 19vh;
    }
  }
`;

export default SGoals;
