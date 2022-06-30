import styled from "styled-components";

export const RadioBtnsGroup = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: row;
  gap: 0.6rem !important;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    color: var(--primary-color);
    background: white;
  }

  &.iconBtn input[type="radio"]:checked + label {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  &.iconBtn label {
    padding: 8px;
    background: transparent;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    padding: 8px 16px;
    color: white;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    border: none;
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
