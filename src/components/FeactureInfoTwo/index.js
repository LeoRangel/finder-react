import React from "react";

import * as S from "./style";

const FeatureInfoTwo = ({ areaInfo = "", iconCard = "" }) => {
  return (
    <S.ContainerSection>
      <div className="iconeCard">
        <img src={iconCard} alt="" />
      </div>
      <div>
        <h1>Loren ipsun</h1>
        <p>{areaInfo}</p>
      </div>
    </S.ContainerSection>
  );
};

export default FeatureInfoTwo;
