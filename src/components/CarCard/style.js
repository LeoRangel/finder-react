import styled from "styled-components";

export const CarCard = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow-large);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04) !important;
  border-radius: 1.2rem;
  position: relative;
  color: white;

  /* Making the horizontal card responsive */
  ${(props) =>
    props.direction === "horizontal" &&
    `
      @media (min-width: 768px) {
        flex-direction: row;
        max-height: 240px;

        .carCardBodyFooter {
          width: 100%;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      }
    `}
`;

export const CardThumbnail = styled.header`
  width: 100%;
  height: 260px;
  position: relative;

  /* Making the horizontal card responsive */
  ${(props) =>
    props.direction === "horizontal" &&
    `
      @media (min-width: 768px) {
        max-width: 260px;
        height: 100%;
      }
    `}

  /* Slider */
  .carCardSlider {
    width: 100%;
    height: 100%;
    position: relative;

    .mySlideList {
      width: 100%;
      height: 100%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .mySlide {
        /* Hide the images by default */
        display: none;
        width: 100%;
        height: 100%;

        &.active {
          border: 2px solid var(--secondary-color);
          opacity: 1;
          display: flex;
        }
      }
    }

    .prevCardSlide,
    .nextCardSlide {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      transform: scale(0);
      transition: transform linear 0.2s;
      box-shadow: none;

      :hover {
        background: rgba(0, 0, 0, 0.5);
      }
    }

    .prevCardSlide {
      left: 0.8rem;
    }

    .nextCardSlide {
      right: 0.8rem;
    }
  }

  /* Wishlist */
  .carCardWishlist {
    position: absolute;
    top: 2rem;
    right: 2rem;
    transform: scale(0);
    transition: all linear 0.2s;
  }

  /* Badges */
  .carCardBadges {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  :hover {
    .carCardSlider .mySlideList img {
      /* Darkens the image when hovering */
      filter: brightness(0.8);
    }

    .prevCardSlide,
    .nextCardSlide {
      transform: scale(1);
    }

    .carCardWishlist {
      transform: scale(1);
    }
  }
`;

export const CarBadge = styled.div`
  padding: 0.2rem 1rem;
  border-radius: 0.6rem;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;

  &.badgeNew {
    background-color: var(--warning-color);
  }

  &.badgeUsed {
    background-color: var(--info-color);
  }
`;

export const CardBody = styled.div`
  padding: 2rem 2rem 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .carYearCompare {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 150%;
  }

  .carName {
    max-width: 100%;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    a {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 150%;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .carLocation {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: rgba(255, 255, 255, 0.7);

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 150%;
  }

  .carPrice {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

export const CardFooter = styled.footer`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  .carInfos {
    width: 100%;
    display: flex;
    gap: 1.2rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.15);
    padding-top: 1.6rem;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #1f1b2d;
      padding: 0.8rem;
      border-radius: 1.2rem;
      gap: 0.4rem;

      font-weight: 400;
      font-size: 1.2rem;
      line-height: 150%;

      max-width: 100%;
      text-transform: capitalize;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    li img {
      width: 2rem;
    }

    li small {
      max-width: 100%;
      text-transform: capitalize;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
