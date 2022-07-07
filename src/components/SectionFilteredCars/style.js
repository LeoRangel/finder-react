import styled from "styled-components";

export const SectionFilteredCars = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* Grid */
  .filteredCarsGrid {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /* Header and Footer */
  .filteredCarsHeader,
  .filteredCarsFooter {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 150%;
      color: #fff;
      text-decoration: none;
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    h1 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 130%;
    }
  }

  /* Options */
  .filteredCarsOptions {
    & > fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    & > fieldset:first-child {
      flex: 1;
    }

    label {
      margin: 0;
      gap: 1.2rem;
    }

    select {
      width: max-content;
    }

    .btnCompare {
      display: flex;
      padding-left: 2rem;
      border-left: 1px solid rgba(255, 255, 255, 0.15);

      button {
        width: 100%;
        background-color: transparent;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        display: flex;
        gap: 0.8rem;
        align-items: center;
        cursor: pointer;
        border: none;
      }

      @media (max-width: 768px) {
        padding-left: unset;
        border-left: none;
      }
    }
  }

  /* PAGINATION - START */

  .pagination {
    list-style: none;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);

    li :is(a, button) {
      width: 2.4rem;
      height: 2.4rem;
      line-height: 150%;
      border-radius: 50%;
      color: rgba(255, 255, 255, 0.7);
      position: relative;
      border: none;
      background: transparent;
      cursor: pointer;
    }

    li :is(a, button) img {
      filter: brightness(0.7);
    }

    li :is(a, button).active {
      font-weight: 700;
      color: var(--primary-color);
      background-color: #fff;
    }

    li :is(a, button):not(.active):hover {
      color: #fff;
    }

    li :is(a, button):not(.active):hover img {
      filter: brightness(1);
    }

    li :is(a, button) :is(span, img, svg) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
