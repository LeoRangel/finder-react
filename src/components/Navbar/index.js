import React from "react";
import { Link } from "react-router-dom";
import logoSite from "@/assets/img/logo-site.png";
import plusIcon from "@/assets/icons/plus.svg";
import userIcon from "@/assets/icons/user.svg";

import Button from "@/components/Button";

import * as S from "./style";

const Navbar = () => {
  return (
    <S.NavContent>
      <div className="container">
        <div className="navMenu">
          <Link to="/">
            <img src={logoSite} alt="Logo do site" />
          </Link>

          <S.UlItem className="hidden-when-lg">
            <li>|</li>
            <li>
              <Link to={"/catalog?condicion=Novo"}>Novos</Link>
            </li>
            <li>
              <Link to={"/catalog?condicion=Usado"}>Usados</Link>
            </li>
            <li>
              <Link to={"#"}>Vender</Link>
            </li>
            <li>
              <Link to={"/catalog"}>Comprar</Link>
            </li>
            <li>
              <Link to={"#"}>Novidades e reviews</Link>
            </li>
          </S.UlItem>
        </div>

        <div className="alignMenu">
          <Button isTransparent isDisable>
            <img src={userIcon} alt="" />
            Entrar
          </Button>

          <Button>
            <img src={plusIcon} alt="" />
            Vender
          </Button>
        </div>
      </div>
    </S.NavContent>
  );
};

export default Navbar;
