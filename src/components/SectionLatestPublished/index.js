import React from "react";

import * as S from "./style";

import SectionHeader from "@/components/SectionHeader";
import RadioBtnsGroup from "@/components/RadioBtnsGroup";

const SectionLatestPublished = ({}) => {
  return (
    <S.SectionLatestPublished>
      <div className="container">
        <SectionHeader
          title="Últimos publicados"
          actionLabel="Ver todos"
          actionLink="/catalog"
          ariaLabel="Ir para página de ver ofertas"
        >
          <RadioBtnsGroup>
            <div>
              <input
                type="radio"
                id="formConditionNovo"
                name="formCondition"
                checked
              />
              <label for="formConditionNovo">Novo</label>
            </div>
            <div>
              <input
                type="radio"
                id="formConditionUsado"
                name="formCondition"
              />
              <label for="formConditionUsado">Usado</label>
            </div>
          </RadioBtnsGroup>
        </SectionHeader>

        <div></div>
      </div>
    </S.SectionLatestPublished>
  );
};

export default SectionLatestPublished;
