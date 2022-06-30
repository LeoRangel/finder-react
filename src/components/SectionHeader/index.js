import React from "react";
import { Link } from "react-router-dom";

import arrowRightIcon from "@/assets/icons/arrow-right.svg";

import * as S from "./style";

const SectionHeader = ({
  title,
  actionLabel = "Ver todos",
  actionLink = "#",
  ariaLabel = "",
  children,
}) => {
  return (
    <S.SectionHeader>
      <h2 className="sectionTitle">{title}</h2>

      <div className="sectionHeaderOptions">
        {children}
        <Link to={actionLink}>
          {actionLabel}
          <img src={arrowRightIcon} alt="" />
        </Link>
      </div>
    </S.SectionHeader>
  );
};

export default SectionHeader;
