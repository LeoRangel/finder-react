import styled from "styled-components";

export const Car = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5rem 0;

  section {
    margin-bottom: 0;
  }

  /* :is(h1, h2, h3) {
    font-weight: 700;
    line-height: 130%;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  } */

  main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
  }

  .singleItemPageHeader {
    width: 100%;
  }

  .singleItemPageContent {
    flex: 1;
  }

  .singleItemPageSidebar {
    width: 100%;
    max-width: 450px;
  }

  @media (max-width: 992px) {
    main {
      flex-direction: column;
    }

    .singleItemPageSidebar {
      max-width: unset;
    }
  }

  /* Header */

  .singleItemPageHeader {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .singleItemPageHeader > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .singleItemPageHeader .option {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .singleItemPageHeader a {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    color: #fff;
    text-decoration: none;
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  /* Options */

  .singleItemOptions {
    list-style: none;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
  }

  /* Content */

  .singleItemPageContent {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .singleItemPageContent a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .specifications {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .specifications :is(h2, strong) {
    color: #fff;
  }

  .banner {
    background-color: rgba(255, 255, 255, 0.04);
    color: #fff;
    padding: 2.4rem;
    border-radius: 1.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    span {
      font-size: 1.4rem;
    }
    .bannerItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.2rem;
    }
    .bannerIcon {
      width: 8rem;
      height: 8rem;
      background-color: var(--gray-900);
      position: relative;
      border-radius: 1.2rem;
    }
    .bannerIcon :is(img, svg) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Sidebar */

  .singleItemPageSidebar {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .authorCard {
    background-color: rgba(255, 255, 255, 0.04);
    color: #fff;
    padding: 2.4rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      text-decoration: underline;
    }

    .author {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      & > img {
        width: 5.5rem;
        height: 5.5rem;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  .myBtn {
    height: fit-content;
    padding: 1.5rem 2.5rem;
    background-color: var(--primary-color);
    border: 1.25px solid var(--primary-color);
    border-radius: 0.8rem;
    display: flex;
    gap: 0.4rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none !important;

    &.btnOutlined {
      background-color: transparent;
      border-color: #fff;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .review {
    list-style: none;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    gap: 0.5rem;
  }

  /* Subscribe */

  .subscribe {
    background-color: rgba(255, 255, 255, 0.04);
    padding: 2.4rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .acceptAlert label {
      gap: 1rem;
    }

    small {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.7);
      flex: 1;
    }

    fieldset {
      gap: 2rem;
    }
  }

  /* Infos List */

  .infosList {
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-wrap: wrap;

    a {
      color: rgba(255, 255, 255, 0.7);
    }
    :is(img, svg) {
      fill: rgba(255, 255, 255, 0.7);
      filter: brightness(0.7);
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    & > div:not(:last-child) {
      padding-right: 2rem;
      margin-right: 2rem;
      border-right: 1px solid rgba(255, 255, 255, 0.15);
    }
  }

  /* SINGLE ITEM PAGE - END */

  /* SECTION VOCÊ PODE ESTAR INTERESSADO - INÍCIO */

  #youMightBeInterested {
    padding: 1rem 0;

    .container {
      flex-direction: column;
    }
  }

  /* SECTION VOCÊ PODE ESTAR INTERESSADO - FIM */

  /*SECTION SLIDER DE FOTOS**/

  :is(.carCardVerticalTwo) .carCardThumbnail {
    width: 100%;
    height: 420px;
    position: relative;
  }

  .containerIconPhotos {
    height: 100%;
  }

  .iconPhotos {
    position: absolute;
    top: 88%;
    right: 25px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  .iconPhotos img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%);
  }

  .iconPhotos p {
    margin-left: 28px;
    font-weight: 700;
    font-size: 20px;
  }

  .prevCardSlideTwo,
  .nextCardSlideTwo {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    top: 50%;
    border: none;
    background: white;
    transform: scale(1);
    /* transition: transform linear .2s; */
    cursor: pointer;
  }

  .prevCardSlideTwo {
    left: 8px;
  }

  .nextCardSlideTwo {
    right: 8px;
  }

  .sectionOptionPhotos {
    display: flex;
    flex-direction: row;
  }

  .sectionOptionPhotos img {
    margin-left: 15px;
    cursor: pointer;
  }
`;
