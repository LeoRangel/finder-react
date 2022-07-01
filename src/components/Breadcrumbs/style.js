import styled from "styled-components";

import chevronRightIcon from "@/assets/icons/chevron-right.svg";

export const Breadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.8rem;

  a {
    font-size: 1.4rem !important;
  }

  li {
    display: flex;
    align-items: center;
  }

  li:not(:last-child) a {
    color: rgba(255, 255, 255, 0.5);
  }

  li:not(:last-child)::after {
    background-image: url(${chevronRightIcon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.5);
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    content: "";
    margin-left: 0.8rem;
  }
`;
