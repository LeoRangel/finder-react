import React from "react";

import * as S from "./style";

import sedanImg from "@/assets/img/more-searched/sedan.png";
import suvImg from "@/assets/img/more-searched/suv.png";
import wagonImg from "@/assets/img/more-searched/wagon.png";
import crossoverImg from "@/assets/img/more-searched/crossover.png";
import coupeImg from "@/assets/img/more-searched/coupe.png";
import pickupImg from "@/assets/img/more-searched/pickup.png";
import sportCoupeImg from "@/assets/img/more-searched/sportCoupe.png";
import compactImg from "@/assets/img/more-searched/compact.png";
import convertibleImg from "@/assets/img/more-searched/convertible.png";
import familyMpvImg from "@/assets/img/more-searched/familyMpv.png";

import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router-dom";

const SectionMoreSearched = ({}) => {
  return (
    <S.SectionMoreSearched>
      <div className="container">
        <SectionHeader
          title="Mais procurados"
          actionLabel="Ver todos"
          actionLink="/catalog"
          ariaLabel="Ir para página de ver todas as ofertas"
        />

        <div>
          <div id="cardsCarTypes">
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={sedanImg} />
                <h6 className="carTypeTitle">Sedan</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={suvImg} />
                <h6 className="carTypeTitle">SUV</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={wagonImg} />
                <h6 className="carTypeTitle">Wagon</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={crossoverImg} />
                <h6 className="carTypeTitle">Crossover</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={coupeImg} />
                <h6 className="carTypeTitle">Coupe</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={pickupImg} />
                <h6 className="carTypeTitle">Pickup</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={sportCoupeImg} />
                <h6 className="carTypeTitle">Sport Coupe</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={compactImg} />
                <h6 className="carTypeTitle">Compact</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={convertibleImg} />
                <h6 className="carTypeTitle">Convertible</h6>
              </Link>
            </div>
            <div className="cardCarType">
              <Link to="#" aria-label="Card clicável com um tipo de carro">
                <img src={familyMpvImg} />
                <h6 className="carTypeTitle">Family MPV</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </S.SectionMoreSearched>
  );
};

export default SectionMoreSearched;
