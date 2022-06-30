import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  height: fit-content;
  background: ${(props) =>
    props.isTransparent ? "transparent" : "var(--primary-color)"};
  color: white;
  border: none;
  border-radius: 0.8rem;
  text-decoration: none;

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
