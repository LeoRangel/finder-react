import styled from "styled-components";

export const FooterContent = styled.footer`
  width: 100%;
  color: #fff;
  background: rgba(255, 255, 255, 0.04);

  h2,
  h3,
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  p,
  small {
    color: rgba(255, 255, 255, 0.7);
  }

  .link-content-head,
  .link-content-mid,
  .link-content-footer {
    width: 100%;

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      gap: 3rem;
      flex-wrap: wrap;
    }

    a {
      text-decoration: none;
      transition: 0.3s;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    a:hover {
      color: #fff;
    }

    @media (max-width: 556px) {
      .container {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .link-content-head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 3rem 0;

    .container {
      align-items: center;
    }

    /* Options */
    fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    select {
      background-color: transparent;
      /* border: none; */
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      padding-left: 0.8rem;
      width: min-content;
    }
  }

  .link-content-mid {
    padding: 5rem 0;

    .footer-links-news,
    .footer-links-mid,
    .footer-links-adress {
      width: auto;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 1rem;

      @media (max-width: 556px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }

    .social-btns {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }
  }

  .link-content-footer {
    padding: 4.8rem 0;

    .terms-and-politic {
      display: flex;
      gap: 2rem;
    }
  }
`;
