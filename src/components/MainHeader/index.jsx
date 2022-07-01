import React from 'react';

import * as S from './style'

import MainCar from '@/assets/img/carroPrincipal.png'
import Navbar from '../Navbar';

const MainHeader = () => {

	return (
		<S.MainSection>
			<Navbar />
			<div className="container">
				<div className="initial">
					<div className="textHeader">
						<h1>Compre e venda com facilidade.</h1>
						<p>O Finder é um mercado digital líder para a indústria automotiva que conecta compradores de carros
							a vendedores.</p>
					</div>
					<img id="imgMainCar" src={MainCar} alt="Carro Principal" />
				</div>
			</div>
		</S.MainSection>
	)
}
export default MainHeader;
