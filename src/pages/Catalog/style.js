import styled from "styled-components";

export const Catalog = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
  padding: 5rem 0;

  aside {
    width: 100%;
    max-width: 300px;
  }

  main {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    aside {
      max-width: unset;
    }
  }
`;
