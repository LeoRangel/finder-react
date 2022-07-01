import styled from "styled-components";

export const SubscribeEmail = styled.div`
  display: flex;

  label {
    position: relative;
    flex: 1;
    gap: 0;
  }

  label > img {
    position: absolute;
    left: 1.6rem;
  }

  input[type="email"] {
    height: 100%;
    padding-left: 5rem !important;
    border-radius: 8px 0 0 8px;
    border-right: none !important;
  }

  input[type="email"]:focus {
    border-right: none !important;
  }

  input[type="email"]:focus + .subscribeButton {
    outline: none !important;
    border: 1px solid var(--primary-color) !important;
    box-shadow: var(--box-shadow-dafault);
    border-left: none !important;
  }

  .subscribeButton {
    height: 100%;
    padding: 0.6rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0 8px 8px 0;
    border-left: none !important;
    margin: 0;
  }

  input[type="submit"],
  button,
  a {
    width: max-content;
    font-size: 1.6rem;
    padding: 1rem 2rem;
  }
`;
