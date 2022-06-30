import React from "react";

import * as S from "./style";

const IconButton = ({
  onClick = () => {},
  isDisable = false,
  isWhite = false,
  children,
  ...props
}) => {
  return (
    <S.IconButton
      onClick={onClick}
      disabled={isDisable}
      isWhite={isWhite}
      {...props}
    >
      {children}
    </S.IconButton>
  );
};

export default IconButton;
