import React from "react";

import * as S from "./style";

import SectionHeader from "@/components/SectionHeader";
import FeatureInfo from "@/components/FeactureInfo";
import FeatureInfoTwo from "@/components/FeactureInfoTwo";

import iconFile from "@/assets/icon/icon_file.png";
import iconSearch from "@/assets/icon/icon_search.png";
import iconSettings from "@/assets/icon/icon_settings.png";
import iconInfo from "@/assets/icon/icon_info.png";
import iconUser from "@/assets/icon/icon_user.png";
import iconCalculador from "@/assets/icon/icon_calculador.png";

import ImgCar from "@/assets/icon/auto.svg";
import ImgLine from "@/assets/icon/road-line.svg";

const SectionTemosDiferente = ({}) => {
  return (
    <S.SectionTemosDiferente>
      <div className="container">
        <SectionHeader
          title="O que temos de diferente"
          actionLabel="Como vender carros no finder"
          actionLink="/catalog"
          ariaLabel="Ir para página de ver ofertas"
        ></SectionHeader>
        <div className="sectionAll">
          <div className="containerCardAll">
            <div className="containerCard">
              <div className="infoCard">
                <div>
                  <FeatureInfo
                    areaInfo="Isso é mais do que você encontrará em qualquer outro grande mercado automotivo online no Brasil."
                    iconCard={iconFile}
                  ></FeatureInfo>

                  <FeatureInfo
                    areaInfo="Nossa pesquisa avançada facilita a personalização de seus resultados para que você veja apenas os carros e os recursos que interessam a você."
                    iconCard={iconSearch}
                  ></FeatureInfo>

                  <FeatureInfo
                    areaInfo="Nossa equipe está constantemente desenvolvendo novos recursos que simplificam o processo de compra e venda de um carro."
                    iconCard={iconSettings}
                  ></FeatureInfo>
                </div>
              </div>
            </div>
          </div>

          <div className="containerCar">
            <div className="imgCar">
              <img src={ImgCar} alt="imagem do carro" />
            </div>
            <div className="imgLine">
              <img src={ImgLine} alt="Imagem de Linha pontilhadas" />
            </div>
          </div>

          <div className="containerCardAllTwo">
            <div className="containerCard">
              <div>
                <div className="infoCardTwo">
                  <FeatureInfoTwo
                    areaInfo="Acesso gratuito a informações como avaliações de revendedores, valor de mercado, queda de preços."
                    iconCard={iconInfo}
                  ></FeatureInfoTwo>

                  <FeatureInfoTwo
                    areaInfo="Nos concentramos em criar a experiência mais transparente e confiável para os usuários e provamos que isso também funciona para os revendedores."
                    iconCard={iconUser}
                  ></FeatureInfoTwo>

                  <FeatureInfoTwo
                    areaInfo="Especifique os parâmetros do seu carro para formar seu valor de mercado com base em carros semelhantes no Finder."
                    iconCard={iconCalculador}
                  ></FeatureInfoTwo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.SectionTemosDiferente>
  );
};

export default SectionTemosDiferente;
