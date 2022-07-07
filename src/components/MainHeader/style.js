import styled from "styled-components";
import shape from "@/assets/img/shape.png";

export const MainSection = styled.header`
  margin-bottom: 3rem;
  background-image: url(${shape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  .initial {
    margin-top: 9.8rem;
    width: 100%;
    /* height: 30vh; */
    display: flex;
    flex-direction: row;
    gap: 10rem;
  }

  .textHeader {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 460px;

    h1 {
      font-size: 5.6rem;
      /* width: 44rem; */
      font-weight: 700;
    }

    p {
      font-weight: 400;
      opacity: 0.7;
      /* width: 43rem; */
      font-size: 1.8rem;
      margin-top: 3.2rem;
    }
  }

  #imgMainCar {
    /* max-width: 76rem; */
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    width: 200px;
    flex: 1;
  }
`;
