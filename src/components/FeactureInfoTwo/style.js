import styled from "styled-components";

export const ContainerSection = styled.section`
display: flex;
flex-direction: row;
margin-bottom: 6.4rem;
text-align: start;


  h1 {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
  }

  p {
    font-weight: 300;
    font-size: 1.4rem;
    text-align: start;
    width: 36.6rem;
    margin-top: .4rem;
    opacity: 0.7;
  }

  .iconeCard{
    margin-top: .2rem;
    padding-right:  1.5rem; 
  }


  
@media(max-width: 768px) {

  .iconeCard{
    margin-top: .2rem;
    padding-right:  1.5rem;
  }
  
  .titleCard img{
    padding-left: .5rem;
  }
  
  .infoCard h1{
    text-align: start;
    }
  
  h1 {
      font-size: 1.4rem;
  }
  
  p{
    font-weight: 300;
    font-size: 1.4rem;
    text-align: start;
    width: 37.6rem;
    margin-top: .4rem;
    opacity: 0.7;
  }
  }
  

`;
