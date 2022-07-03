import styled from "styled-components";

export const SectionBlog = styled.section`
  /* height: 470px; */

  .center-content {
    display: flex;
    gap: 2.4rem;
    /* justify-content: space-between; */

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .orange-bg--section {
    background-color: var(--primary-color);
    color: #fff;
  }

  .img-content {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1.2rem;
  }

  .img-content-perfil {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
  }

  .card-blog {
    width: 100%;
  }

  .card-blog-perfil {
    max-width: 200px;
    display: inline-flex;
    margin-top: 15px;
  }

  .card-blog-perfil div {
    margin-left: 1.5rem;
  }

  .card-date {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .link-blog1 {
    margin: 0.5rem 0px;
    color: var(--primary-color);

    a {
      color: var(--primary-color);
    }
  }

  .link-blog2 {
    margin: 0.3rem 0px;
    opacity: 0.7;
  }

  .main-blog {
    margin: 2.5rem 0px;
    text-align: center;
  }

  .linkable-blog {
    cursor: pointer;
  }
`;
