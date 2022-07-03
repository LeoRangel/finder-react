import styled from "styled-components";

export const SectionMoreSearched = styled.section`
  .container {
    flex-direction: column;
    /* margin-bottom: 72px; */
  }

  #cardsCarTypes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .cardCarType {
    margin-top: 20px;
  }

  .cardCarType a {
    width: 240px;
    height: 160px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
  }

  .carTypeTitle {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: var(--white);
    opacity: 0.7;
    margin-top: 31.8px;
  }

  .cardCarType a:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  .cardCarType a:hover .carTypeTitle {
    opacity: 1;
  }

  @media (max-width: 512px) {
    .cardCarType a {
      width: 180px;
      height: 120px;
    }

    .cardCarType img {
      width: 90px;
    }

    .carTypeTitle {
      font-size: 14px;
      margin-top: 20px;
    }
  }

  @media (max-width: 392px) {
    .cardCarType a {
      width: 148px;
      height: 100px;
    }

    .cardCarType img {
      width: 75px;
    }

    .carTypeTitle {
      font-size: 12px;
      margin-top: 15px;
    }
  }
`;
