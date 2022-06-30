import styled from "styled-components";

export const SectionHeader = styled.header`
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  align-items: flex-end;
  gap: 2rem;

  a {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    color: #fff;
    text-decoration: none;
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  .sectionHeaderOptions {
    display: flex;
    margin-top: auto;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
