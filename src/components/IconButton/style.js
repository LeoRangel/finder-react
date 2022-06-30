import styled from "styled-components";

export const IconButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  background: ${(props) =>
    props.isWhite ? "#fff" : "rgba(255, 255, 255, 0.04)"};
  border: none;
  border-radius: 50%;
  box-shadow: var(--box-shadow-dafault);
  cursor: pointer;
  text-decoration: none;
  position: relative;

  img,
  svg,
  i {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => (props.isWhite ? "var(--primary-color)" : "#fff")};
    fill: ${(props) => (props.isWhite ? "var(--primary-color)" : "#fff")};
  }

  :hover {
    background-color: #fff;

    img,
    svg,
    path,
    i {
      color: var(--primary-color);
      fill: var(--primary-color);
    }
  }
`;
