import React from "react";

import * as S from "./style";

const Breadcrumbs = ({ children, ...props }) => {
  return <S.Breadcrumbs {...props}>{children}</S.Breadcrumbs>;
};

export default Breadcrumbs;
