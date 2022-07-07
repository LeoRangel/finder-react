import styled from "styled-components";

export const GalleryCarroussel = styled.div`
  position: relative;
  --slide-height: 400px;

  @media (max-width: 768px) {
    --slide-height: 300px;
  }

  .slick-slider {
    position: relative;
    width: 100%;

    article {
      margin: 0 1rem;
    }

    .slick-slide {
      margin-bottom: 1.6rem;
      height: var(--slide-height);
      overflow: hidden;
      border-radius: 0.8rem;
      padding: 0;
      background-color: rgba(255, 255, 255, 0.04);

      div {
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 0.8rem;
      }
    }

    .slick-arrow {
      position: absolute;
      z-index: 99;

      &.next-arrow {
        top: 50%;
        right: 1rem;
        transform: translate(0, -120%);
      }
      &.prev-arrow {
        top: 50%;
        left: 1rem;
        transform: translate(0, -120%);
      }
    }

    .slick-dots {
      position: relative !important;
      bottom: unset !important;
      display: flex !important;
      text-align: left !important;
      gap: 1.6rem;

      li {
        display: flex;
        width: 100%;
        height: 8rem;
        cursor: pointer;
        overflow: hidden;
        border-radius: 0.8rem;
        padding: 0;
        margin: 0;
        filter: brightness(0.8);
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.04);

        &.slick-active {
          border: 1px solid var(--primary-color) !important;
          filter: brightness(1);
        }

        a {
          width: 100%;
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          height: 5rem;
        }
      }
    }
  }

  .slider-count {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    color: #fff;
    right: 2rem;
    top: calc(var(--slide-height) - 2rem);
    transform: translateY(-100%);
    box-shadow: var(--box-shadow-dafault);
  }

  .play-video {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    color: #fff !important;
    text-decoration: none !important;
    filter: brightness(1) !important;
    border-radius: 0.8rem;

    :hover {
      filter: brightness(0.8) !important;
    }

    img {
      width: auto !important;
      height: auto !important;
    }

    @media (max-width: 768px) {
      margin-top: 2rem;
      padding: 1.5rem;
      flex-direction: row;
    }
  }
`;
