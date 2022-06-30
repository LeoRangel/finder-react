import React from "react";

import * as S from "./style";

const RadioBtnsGroup = ({ isIconBtn = false, children, ...props }) => {
  return <S.RadioBtnsGroup {...props}>{children}</S.RadioBtnsGroup>;
};

export default RadioBtnsGroup;
