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
    <S.SearchCar>
      <div className="container">
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
					<label htmlFor="searchDecription">
						<i className="bi bi-search"></i>
						<input type="text" id="searchDecription" placeholder="Pesquise por..."/>
					</label>

					<label htmlFor="searchBrand">
						<i className="bi bi-star"></i>
						<select name="searchBrand" id="searchBrand" onChange={() => {}}>
							<option value="">Marca</option>
						</select>
					</label>

					<label htmlFor="searchModel">
						<i className="bi bi-view-stacked"></i>
						<select name="searchModel" id="searchModel" onChange={() => {}}>
							<option value="">Modelo</option>
							<option value="Jetta">Jetta</option>
						</select>
					</label>

					<label htmlFor="searchType">
						<i className="fa fa-car-side"></i>
						<select name="searchType" id="searchType" onChange={() => {}}>
							<option value="">Tipo</option>
							<option value="Sedan">Sedan</option>
						</select>
					</label>

					<label htmlFor="searchLocalization">
						<i className="bi bi-geo-alt"></i>
						<select name="searchLocalization" id="searchLocalization" onChange={() => {}}>
							<option value="0">Estado</option>
							<option value="1">RJ</option>
						</select>
					</label>

					<Button onClick={() => search()} type={'submit'}>
						Pesquisar
					</Button>
				</div>
		  </div>
    </S.SearchCar>
	)
}

export default SearchCar;
