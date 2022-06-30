import styled from "styled-components";

export const NavContent = styled.nav`
  color: white;
  padding: 2rem 0;
  margin-bottom: 7.2rem;
   

  .container {
    width: 100%;
    display: flex;
    align-items: center;
	justify-content: space-between;
  },

  .navMenu{
	display: flex;
	align-items: center;
  }

  .alignMenu{
	display: flex;
  }
`;

export const UlItem = styled.ul`
	display: flex;
	font-weight: 300;

	li{
		margin: 0 25px 0 0;
		cursor: pointer;
		&:nth-child(1) {
			margin-right: 3rem;
			margin-left: 5.8rem;
		}
	}
`
