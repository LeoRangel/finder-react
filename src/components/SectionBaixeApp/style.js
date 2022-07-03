import styled from "styled-components";

export const SectionBaixeApp = styled.section`
  .containerApp {
    display: flex;
    flex-direction: row;
    width: 1076px;
    height: 440px;
    /* margin-top: 48px;
    margin-bottom: 72px; */
  }

  .infoApp {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 526px;
    margin-right: 90px;
  }

  .infoApp h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .infoApp p {
    font-size: 18px;
    opacity: 0.7;
    margin-bottom: 48px;
  }

  .buttonsApp img {
    margin-right: 24px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .containerApp {
      width: auto;
      height: auto;
      margin-top: 38px;
      margin-bottom: 60px;
    }

    .infoApp {
      width: 100%;
      margin: 0;
    }

    .infoApp p {
      font-size: 14px;
      margin-bottom: 20px;
      width: 90%;
    }

    .buttonsApp img {
      margin-right: 14px;
      width: 140px;
    }

    .containerApp .imgApp {
      display: none;
    }
  }
`;
