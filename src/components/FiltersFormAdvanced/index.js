import React from "react";

import * as S from "./style";

import RadioBtnsGroup from "@/components/RadioBtnsGroup";
import CheckboxBtnToggle from "@/components/CheckboxBtnToggle";

const FiltersFormAdvanced = ({ ...props }) => {
  return (
    <S.FiltersFormAdvanced {...props}>
      <RadioBtnsGroup>
        <div>
          <input
            type="radio"
            id="formConditionNovo"
            name="formCondition"
            checked
            onChange={() => {}}
          />
          <label htmlFor="formConditionNovo">Novo</label>
        </div>
        <div>
          <input
            type="radio"
            id="formConditionUsado"
            name="formCondition"
            onChange={() => {}}
          />
          <label htmlFor="formConditionUsado">Usado</label>
        </div>
      </RadioBtnsGroup>

      <hr />
      <h2>Filtros</h2>
      <hr />

      <fieldset>
        <legend>Localização</legend>

        <label htmlFor="formLocale" className="visually-hidden">
          Localização
        </label>
        <select name="formLocale" id="formLocale" onChange={() => {}}>
          <option value="">Escolha o local</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Tipo</legend>

        <div id="formType">
          <label htmlFor="formTypeSedan">
            <input
              type="checkbox"
              name="formType"
              id="formTypeSedan"
              value="formTypeSedan"
              onChange={() => {}}
            />
            Sedan
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Marca e modelo</legend>

        <div>
          <label htmlFor="formBrand" className="visually-hidden">
            Marca
          </label>
          <select name="formBrand" id="formBrand" onChange={() => {}}>
            <option value="">Marca</option>
          </select>
        </div>

        <div>
          <label htmlFor="formModel" className="visually-hidden">
            Modelo
          </label>
          <select name="formModel" id="formModel" disabled onChange={() => {}}>
            <option value="">Modelo</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Ano (Min - Max)</legend>

        <div className="doubleFields">
          <div>
            <label htmlFor="formYearMin" className="visually-hidden">
              Ano Min
            </label>
            <select name="formYearMin" id="formYearMin" onChange={() => {}}>
              <option value="">Todos</option>
            </select>
          </div>

          <span className="separator"></span>

          <div>
            <label htmlFor="formYearMax" className="visually-hidden">
              Ano Max
            </label>
            <select name="formYearMax" id="formYearMax" onChange={() => {}}>
              <option value="">Todos</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Preço (Min - Max)</legend>

        <div className="doubleFields">
          <div>
            <label htmlFor="inputPreçoMin" className="visually-hidden">
              Preço Min
            </label>
            <input
              type="number"
              name="inputPreçoMin"
              id="inputPreçoMin"
              placeholder="Ex.: 10000"
              min="0"
              value=""
              onChange={() => {}}
            />
          </div>

          <span className="separator"></span>

          <div>
            <label htmlFor="inputPreçoMax" className="visually-hidden">
              Preço Max
            </label>
            <input
              type="number"
              name="inputPreçoMax"
              id="inputPreçoMax"
              placeholder="Ex.: 50000"
              min="0"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>

        <br />
        <div>
          <CheckboxBtnToggle>Preço Negociado</CheckboxBtnToggle>
        </div>
      </fieldset>

      <fieldset>
        <legend>Combustível</legend>

        <div id="formFuel">
          <label htmlFor="formFuelDiesel">
            <input
              type="checkbox"
              name="formFuel"
              id="formFuelDiesel"
              value="formDiesel"
              onChange={() => {}}
            />
            Diesel
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Transmissão</legend>

        <div id="formTransmission">
          <label htmlFor="formTransmissionAutomatic">
            <input
              type="checkbox"
              name="formTransmission"
              id="formTransmissionAutomatic"
              value="formTransmissionAutomatic"
              onChange={() => {}}
            />
            Automatic
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Quilometragem</legend>

        <label htmlFor="formMileage" className="visually-hidden">
          Quilometragem
        </label>
        <select name="formMileage" id="formMileage" onChange={() => {}}>
          <option value="">Todas</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Cor</legend>

        <div id="formColor">
          <label htmlFor="formColorPreto">
            <input
              type="checkbox"
              name="formColor"
              id="formColorPreto"
              value="formPreto"
              onChange={() => {}}
            />
            Preto
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Adicional</legend>

        <div id="formAdditional">
          <label htmlFor="formAdditionalTetoSolar">
            <input
              type="checkbox"
              name="formAdditional"
              id="formAdditionalTetoSolar"
              value="formAdditionalTetoSolar"
              onChange={() => {}}
            />
            Teto solar
          </label>
        </div>
      </fieldset>
    </S.FiltersFormAdvanced>
  );
};

export default FiltersFormAdvanced;
