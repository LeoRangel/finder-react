import React from "react";

import * as S from "./style";

const FeatureInfo = ({ areaInfo = "", iconCard = "" }) => {
  return (
    <S.ContainerSection>
      <div>
        <h1>Loren ipsun</h1>
        <p>{areaInfo}</p>
      </div>
      <div className="iconeCard">
        <img src={iconCard} alt="" />
      </div>
    </S.ContainerSection>
  );
};

export default FeatureInfo;
