import styled from "styled-components";

export const Button = styled.button`
  width: min-content;
  background: ${(props) =>
    props.isTransparent ? "transparent" : "var(--primary-color)"};
  color: white;
  border: none;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  gap: 0.6rem;

  :hover {
    filter: brightness(95%);
  }
`;
