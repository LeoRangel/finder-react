import styled from "styled-components";

export const Brands = styled.section`
  /* margin-top: 9.6rem; */
  margin-bottom: 10rem;

  #brandsLogo {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  #brandsLogo img {
    cursor: pointer;
    filter: brightness(0.7);

    :hover {
      filter: brightness(1);
    }
  }
`;
