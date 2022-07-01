import React from "react";

import * as S from "./style";

const CheckboxBtnToggle = ({ children, ...props }) => {
  return (
    <S.CheckboxBtnToggle {...props}>
      <div className="checkboxBtnToggle">
        <input type="checkbox" />
        <span className="slider round"></span>
      </div>
      {children}
    </S.CheckboxBtnToggle>
  );
};

export default CheckboxBtnToggle;
