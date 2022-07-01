import React, { useEffect, useState } from 'react';
import * as S from "./style";

import RadioBtnsGroup from "@/components/RadioBtnsGroup";
import Button from '../Button'

const SearchCar = () => {
	const search = () => {
		console.log(teste);
	}
	const [teste, setTeste] = useState([{}]);

	useEffect(() => {
		const url = "https://e-carros-api.herokuapp.com/brands";
		fetch(url)
		.then(resp =>{ return resp.json()})
		.then(response => {setTeste({response})})
	}, [])
	return (
		<div className="container">
			<S.SearchCar>
				
			<RadioBtnsGroup>
				<div>
					<input
						type="radio"
						id="searchNovo"
						name="condition"
						checked
					/>
					<label for="searchNovo">Novo</label>
				</div>
				<div>
					<input
						type="radio"
						id="searchUsado"
						name="condition"
					/>
					<label for="searchUsado">Usado</label>
				</div>
			</RadioBtnsGroup>

				<div id="formSearchCar">
					<label for="searchInput" class="labelFormat">
						<i class="bi bi-search"></i>
						<input type="text" id="searchInput" placeholder="Pesquise por..."/>
					</label>

					<span class="searchSeparator"></span>

					<label for="searchMarca" class="labelFormat">
						<i class="bi bi-star"></i>
						<select name="searchMarca" id="searchMarca" class="selectHeader">
							<option value="">Marca</option>
						</select>
					</label>

					<span class="searchSeparator"></span>

					<label for="searchModelo" class="labelFormat">
						<i class="bi bi-view-stacked"></i>
						<select name="searchModelo" id="searchModelo" class="selectHeader">
							<option value="">Modelo</option>
							<option value="Jetta">Jetta</option>
						</select>
					</label>

					<span class="searchSeparator"></span>

					<label for="searchTipo" class="labelFormat">
						<i class="fa fa-car-side"></i>
						<select name="searchTipo" id="searchTipo" class="selectHeader">
							<option value="">Tipo</option>
							<option value="Sedan">Sedan</option>
						</select>
					</label>

					<span class="searchSeparator"></span>

					<label for="searchLocal" class="labelFormat">
						<i class="bi bi-geo-alt"></i>
						<select name="searchLocal" id="searchLocal" class="selectHeader">
							<option value="">Estado</option>
							<option value="Sedan">RJ</option>
						</select>
					</label>

					<Button onClick={() => search()} type={'submit'}>
						Pesquisar
					</Button>
				</div>
			</S.SearchCar>
		</div>
	)
}

export default SearchCar;