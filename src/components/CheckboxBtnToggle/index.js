import React from "react";

import * as S from "./style";

const CheckboxBtnToggle = ({ children, ...props }) => {
  return (
    <S.CheckboxBtnToggle {...props}>
      <div class="checkboxBtnToggle">
        <input type="checkbox" />
        <span class="slider round"></span>
      </div>
      {children}
    </S.CheckboxBtnToggle>
  );
};

export default CheckboxBtnToggle;
