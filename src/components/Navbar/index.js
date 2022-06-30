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
					<Link to="#">
						<img src={logoSite} alt="Logo do site" />
					</Link>

					<S.UlItem>
						<li>|</li>
						<li>Novos</li>
						<li>Usados</li>
						<li>Vender</li>
						<li>Comprar</li>
						<li>Novidades e reviews</li>
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
