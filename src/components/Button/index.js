import React from "react";

import * as S from "./style";

const Button = ({
  onClick = () => {},
  isDisable = false,
  isTransparent = false,
  children,
  ...props
}) => {
  return (
    <S.Button
      onClick={onClick}
      disabled={isDisable}
      isTransparent={isTransparent}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
