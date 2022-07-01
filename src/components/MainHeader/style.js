import styled from "styled-components";
import shape from '@/assets/img/shape.png';

export const MainSection = styled.header`
margin-bottom: 5rem;
	background-image: url(${shape});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;

	.initial {
		display: flex;
		/* height: 30vh; */
		width: 100%;
		margin-top: 12.5rem;
	}
	
	.textHeader {
		margin-right: 10rem;
	}
	
	.textHeader h1 {
		font-size: 5.6rem;
		width: 44rem;
		font-weight: 700;
	}
	
	.textHeader p {
		font-weight: 400;
		opacity: 0.7;
		width: 43rem;
		font-size: 1.8rem;
		margin-top: 3.2rem;
	}
	
	#imgMainCar {
		z-index: 1;
		max-width: 76rem;
	}
`