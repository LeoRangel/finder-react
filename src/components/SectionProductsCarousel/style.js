import styled from "styled-components";

export const SectionProductsCarousel = styled.section`
  max-width: 1296px;
  margin: auto auto 72px auto;
  padding: 0 1rem;

  .containerCarousel {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
  }

  #carousel {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 48px;
    max-height: 280px;
  }

  #leftElements {
    padding: 8px 0 7px 0;
  }

  #leftElements h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 130%;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 40px;
    font-size: 18px;
    opacity: 0.7;
  }

  /* #leftElements h6 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    opacity: 0.7;
    margin-bottom: 40px;
  } */

  #leftElements button {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 10px 24px;
    /* width: 158px;
    height: 44px; */
    /* background: var(--primary-color);
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%; */
    gap: 10px;
  }

  #products {
    display: flex;
    justify-content: space-between;
    width: 856px;
    height: 184px;
    overflow: hidden;
  }

  .product {
    width: 196px;
    height: 184px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product img {
    width: 168px;
    height: 148px;
    margin-bottom: 12px;
  }

  .product h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
  }

  #arrowsCarousel {
    width: 88px;
    display: flex;
    /* justify-content: space-between; */
    margin-top: 24px;
    gap: 1rem;
  }

  /* .arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
  }

  .arrow:hover {
    color: var(--primary-color);
    background-color: var(--white);
  } */

  @media (max-width: 1168px) {
    #leftElements h2 {
      font-size: 2.4rem;
    }
  }
`;
