import styled from 'styled-components';

const SGoals = styled.section`
  background-color: var(--primary-bg-color);
  height: 90vh;
  color: var(--fourth-bg-color);
  padding-top: 10vh;
  .parafGoal {
    display: flex;
    flex-direction: column;
  }
  .containerTitleGoal {
    display: flex;
    width: 25vw;
    height: 10vh;
    font-family: var(--title-font-family);
    margin-left: 32vh;
  }
  .lineWhiteGoals {
    border-top: var(--primary-font-color) 1px solid;
    width: 85vw;
    padding-top: 5vh;
    margin-left: 8vw;
  }
  .lineWhiteGoalsText {
    border-top: var(--primary-font-color) 1px solid;
    width: 30vw;
    padding-top: 5vh;
  }
  .titleGoal {
    font-size: 13px;
    padding-top: 0.6vh;
  }
  .textFun {
    font-size: 25px;
    margin-left: 5vw;
  }
  .blocGoal {
    display: flex;
    width: 100%;
  }
  .rightGoals {
    margin-left: 63vw;
    width: 30vw;
  }
  .textGoal {
    width: 40vw;
    font-family: var(--title-font-family);
    font-size: 25px;
    text-align: left;
  }
  .textGoalTwo {
    width: 40vw;
    font-size: 25px;
    text-align: left;
  }

  /* MODE MOBILE*/
  @media screen and (min-width: 360px) and (max-width: 768px) {
    .titleGoal {
      width: 60vw;
    }
    .blocGoal {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .parafGoal {
      display: flex;
    }
    .contentGoal {
      width: 90vw;
    }
    .textGoal {
      width: 100vw;
      font-size: 5vw;
    }
    .textGoalTwo {
      width: 70vw;
      font-size: 14px;
      margin-left: 4%;
    }
    .more {
      margin-left: 32%;
    }
    .textMore {
      font-size: 14px;
      padding-right: 15px;
    }
    .arrow {
      width: 50px;
      margin-top: -15px;
    }
    .textFun {
      padding: 3%;
      width: 46%;
    }
    .peleMele {
      margin-top: 85%;
      margin-left: 0%;
    }
    .graphique {
      margin: 50% 0 0 70%;
      height: 180px;
    }
    .workDev {
      width: 150px;
      height: 100px;
      margin: 30% 0 0 35%;
      object-fit: cover;
    }
    .workOrga {
      margin: 90% 0 0 60%;
      height: 140px;
    }
    .colorPc {
      margin-top: 60%;
      height: 200px;
    }
  }
  /*MODE TABLET*/
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .textFun {
      padding: 3%;
      width: 18%;
    }
    .peleMele {
      margin-top: 20%;
      margin-left: 50%;
    }
    .graphique {
      margin: 50% 0 0 70%;
      height: 180px;
    }
    .workDev {
      width: 150px;
      height: 110px;
      margin: 30% 0 0 35%;
      object-fit: cover;
    }
    .workOrga {
      margin: 90% 0 0 60%;
      height: 130px;
    }
    .colorPc {
      margin-top: 60%;
      height: 200px;
    }
  }
  /*MODE MAC*/
  @media screen and (min-width: 1440px) {
  }
`;

export default SGoals;
