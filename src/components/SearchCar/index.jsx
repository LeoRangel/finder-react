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
						onChange={() => {}}
					/>
					<label htmlFor="searchNovo">Novo</label>
				</div>
				<div>
					<input
						type="radio"
						id="searchUsado"
						name="condition"
						onChange={() => {}}
					/>
					<label htmlFor="searchUsado">Usado</label>
				</div>
			</RadioBtnsGroup>

				<div id="formSearchCar">
					<label htmlFor="searchInput" className="labelFormat">
						<i className="bi bi-search"></i>
						<input type="text" id="searchInput" placeholder="Pesquise por..."/>
					</label>

					<span className="searchSeparator"></span>

					<label htmlFor="searchMarca" className="labelFormat">
						<i className="bi bi-star"></i>
						<select name="searchMarca" id="searchMarca" className="selectHeader" onChange={() => {}}>
							<option value="">Marca</option>
						</select>
					</label>

					<span className="searchSeparator"></span>

					<label htmlFor="searchModelo" className="labelFormat">
						<i className="bi bi-view-stacked"></i>
						<select name="searchModelo" id="searchModelo" className="selectHeader" onChange={() => {}}>
							<option value="">Modelo</option>
							<option value="Jetta">Jetta</option>
						</select>
					</label>

					<span className="searchSeparator"></span>

					<label htmlFor="searchTipo" className="labelFormat">
						<i className="fa fa-car-side"></i>
						<select name="searchTipo" id="searchTipo" className="selectHeader" onChange={() => {}}>
							<option value="">Tipo</option>
							<option value="Sedan">Sedan</option>
						</select>
					</label>

					<span className="searchSeparator"></span>

					<label htmlFor="searchLocal" className="labelFormat">
						<i className="bi bi-geo-alt"></i>
						<select name="searchLocal" id="searchLocal" className="selectHeader" onChange={() => {}}>
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
