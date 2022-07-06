import styled from "styled-components";

export const SearchCar = styled.form`
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    width: 100%;
    gap: 2rem;
  }

  #formSearchCar {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);

    @media (min-width: 1000px) {
      padding-left: 2rem;
    }

    @media (max-width: 1000px) {
      padding: 1.5rem;
    }

    label {
      width: 100%;
      display: flex;
      align-items: center;

      :not(:last-of-type) {
        @media (min-width: 1000px) {
          border-right: 0.5px solid rgba(255, 255, 255, 0.15);
          padding-right: 1rem;
          margin-right: 1rem;
        }

        @media (max-width: 1000px) {
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 1rem;
        }
      }

      i {
        background: transparent;
        color: var(--gray-500);
      }
    }

    input,
    select {
      /* width: 100%; */
      background-color: transparent;
      border: none;
      color: var(--gray-500);
    }

    input {
      @media (min-width: 1000px) {
        width: 22rem;
      }
    }

    button {
      height: 100%;
      padding: 1.4rem 3.2rem;

      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 1000px) {
    #formSearchCar {
      display: flex;
      flex-direction: column;
    }
  }
`;
