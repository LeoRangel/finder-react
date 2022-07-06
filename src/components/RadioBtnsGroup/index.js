import React from "react";

import * as S from "./style";

const RadioBtnsGroup = ({ isIconBtn = false, children, ...props }) => {
  return (
    <S.RadioBtnsGroup className={isIconBtn && "iconBtn"} {...props}>
      {children}
    </S.RadioBtnsGroup>
  );
};

export default RadioBtnsGroup;
