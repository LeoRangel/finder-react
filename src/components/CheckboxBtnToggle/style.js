import styled from "styled-components";

export const CheckboxBtnToggle = styled.label`
  .checkboxBtnToggle {
    position: relative;
    display: inline-block;
    width: 3.75rem;
    height: 2.25rem;

    input {
      opacity: 0;
      width: 0;
      height: 0;
      border: none !important;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50px;

      &:before {
        position: absolute;
        content: "";
        height: 1.5rem;
        width: 1.5rem;
        left: 0.4rem;
        top: 50%;
        transform: translateY(-50%);
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
    }

    input:checked + .slider {
      background-color: var(--primary-color);
    }

    input:focus + .slider {
      box-shadow: var(--box-shadow-dafault);
    }

    input:checked + .slider:before {
      -webkit-transform: translate(1.35rem, -50%);
      -ms-transform: translate(1.35rem, -50%);
      transform: translate(1.35rem, -50%);
    }
  }
`;
