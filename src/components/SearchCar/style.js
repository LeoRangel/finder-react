import styled from "styled-components";

export const SearchCar = styled.nav`
	display: flex;
	flex-direction: column;
	margin-bottom: 8rem;
	width: 100%;
	gap: 2rem;

	button{
		height: 100%;
		width: 15rem;
		padding: 1.4rem 3.2rem;
	}

	#formSearchCar {
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 8px;
		padding: 0.8rem 1rem;
		gap: 3rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(255, 255, 255, 0.04);
	
	}
	
	#formSearchCar input,
	select {
		background: transparent;
		height: 6rem;
		border: none;
		color: var(--gray-700);
	}
	
	#formSearchCar input:focus,
	select:focus {
		box-shadow: 0 0 0 0;
		outline: 0;
	}
	
	.labelFormat {
		display: flex;
		align-items: center;
	}
	
	.labelFormat i {
		background: transparent;
		color: var(--gray-700);
		/* margin: 0; */
		padding: 0 10px;
	}
	
	#searchInput{
		color: var(--white) !important;
		max-width: 22rem;
	}
	
	.selectHeader {
		padding-right: 1rem;
		cursor: pointer;
	}
	
	.selectHeader option {
		background: var(--gray-900);
		color: var(--white);
		
	}
	
	.searchSeparator {
		display: flex;
		height: 4rem;
		opacity: 0.15;
		border: 0.5px solid #FFFFFF;
	}
`