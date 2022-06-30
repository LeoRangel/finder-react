import React from "react";
import { Link } from "react-router-dom";
import logoSite from "@/assets/img/logo-site.png";
import plusIcon from "@/assets/icons/plus.svg";
import userIcon from "@/assets/icons/user.svg";

import * as S from "./style";

import Button from "../Button";

const Navbar = () => {
  return (
    <S.NavContent>
      <div className="container">
        <Link to="#">
          <img src={logoSite} alt="Logo do site" />
        </Link>

        <Button isTransparent isDisable>
          <img src={userIcon} alt="" />
          Entrar
        </Button>

        <Button>
          <img src={plusIcon} alt="" />
          Vender
        </Button>
      </div>
    </S.NavContent>
  );
};

export default Navbar;
