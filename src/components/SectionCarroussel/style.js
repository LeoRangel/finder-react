import styled from "styled-components";

export const SectionCarroussel = styled.div`
  .slick-slider {
    position: relative;
    width: 100%;

    article {
      margin: 0 1rem;
    }

    .slick-arrow {
      position: absolute;
      z-index: 99;

      &.next-arrow {
        top: 50%;
        right: -1rem;
        transform: translate(+100%, -50%);
      }
      &.prev-arrow {
        top: 50%;
        left: -1rem;
        transform: translate(-100%, -50%);
      }
    }

    .slick-dots {
      all: unset;
      position: relative !important;
      margin-top: 2rem !important;
      display: flex !important;
      gap: 1rem !important;
      justify-content: center !important;
      align-items: center !important;

      li {
        all: unset;
      }

      span {
        color: rgba(255, 255, 255, 0.4) !important;
        background: rgba(255, 255, 255, 0.4) !important;
        border-radius: 40px !important;
        width: 1.6rem !important;
        height: 0.6rem !important;
        transition: transform linear 0.2s !important;
        cursor: pointer !important;
        display: flex !important;
      }

      .slick-active span {
        background: #ffffff !important;
        width: 3.2rem !important;
      }
    }
  }
`;
