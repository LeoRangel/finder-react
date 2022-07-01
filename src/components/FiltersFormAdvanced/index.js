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

        <label for="formLocale" class="visually-hidden">
          Localização
        </label>
        <select name="formLocale" id="formLocale">
          <option value="">Escolha o local</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Tipo</legend>

        <div id="formType">
          <label for="formTypeSedan">
            <input
              type="checkbox"
              name="formType"
              id="formTypeSedan"
              value="formTypeSedan"
            />
            Sedan
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Marca e modelo</legend>

        <div>
          <label for="formBrand" class="visually-hidden">
            Marca
          </label>
          <select name="formBrand" id="formBrand">
            <option value="">Marca</option>
          </select>
        </div>

        <div>
          <label for="formModel" class="visually-hidden">
            Modelo
          </label>
          <select name="formModel" id="formModel" disabled>
            <option value="">Modelo</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Ano (Min - Max)</legend>

        <div class="doubleFields">
          <div>
            <label for="formYearMin" class="visually-hidden">
              Ano Min
            </label>
            <select name="formYearMin" id="formYearMin">
              <option value="">Todos</option>
            </select>
          </div>

          <span class="separator"></span>

          <div>
            <label for="formYearMax" class="visually-hidden">
              Ano Max
            </label>
            <select name="formYearMax" id="formYearMax">
              <option value="">Todos</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Preço (Min - Max)</legend>

        <div class="doubleFields">
          <div>
            <label for="inputPreçoMin" class="visually-hidden">
              Preço Min
            </label>
            <input
              type="number"
              name="inputPreçoMin"
              id="inputPreçoMin"
              placeholder="Ex.: 10000"
              min="0"
              value=""
            />
          </div>

          <span class="separator"></span>

          <div>
            <label for="inputPreçoMax" class="visually-hidden">
              Preço Max
            </label>
            <input
              type="number"
              name="inputPreçoMax"
              id="inputPreçoMax"
              placeholder="Ex.: 50000"
              min="0"
              value=""
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
          <label for="formFuelDiesel">
            <input
              type="checkbox"
              name="formFuel"
              id="formFuelDiesel"
              value="formDiesel"
            />
            Diesel
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Transmissão</legend>

        <div id="formTransmission">
          <label for="formTransmissionAutomatic">
            <input
              type="checkbox"
              name="formTransmission"
              id="formTransmissionAutomatic"
              value="formTransmissionAutomatic"
            />
            Automatic
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Quilometragem</legend>

        <label for="formMileage" class="visually-hidden">
          Quilometragem
        </label>
        <select name="formMileage" id="formMileage">
          <option value="">Todas</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Cor</legend>

        <div id="formColor">
          <label for="formColorPreto">
            <input
              type="checkbox"
              name="formColor"
              id="formColorPreto"
              value="formPreto"
            />
            Preto
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Adicional</legend>

        <div id="formAdditional">
          <label for="formAdditionalTetoSolar">
            <input
              type="checkbox"
              name="formAdditional"
              id="formAdditionalTetoSolar"
              value="formAdditionalTetoSolar"
            />
            Teto solar
          </label>
        </div>
      </fieldset>
    </S.FiltersFormAdvanced>
  );
};

export default FiltersFormAdvanced;
