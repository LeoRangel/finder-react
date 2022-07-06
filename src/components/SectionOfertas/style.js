import styled from "styled-components";

export const SectionOfertas = styled.section`
  .ofertasCarGrid {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template: "card1 card2" auto "card1 card3" auto / 1fr 1fr;
  }

  .ofertasCarGrid article:nth-child(1) {
    grid-area: card1;
  }

  .ofertasCarGrid article:nth-child(2) {
    grid-area: card2;
  }

  .ofertasCarGrid article:nth-child(3) {
    grid-area: card3;
  }

  @media (max-width: 1200px) {
    .ofertasCarGrid {
      grid-template: unset !important;
      grid-template-columns: repeat(1, 1fr);
    }

    .ofertasCarGrid article {
      grid-area: unset !important;
    }
  }
`;
