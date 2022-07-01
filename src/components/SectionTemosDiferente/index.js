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
        >
        </SectionHeader>
		<div class="sectionAll">
              <div class="containerCardAll">
                  <div class="containerCard">
                      <div class="infoCard">
                          <div>
                              <FeatureInfo
                                  areaInfo="That’s more than you’ll find on any other major online automotive marketplace in the USA."
                                  iconCard={iconFile}
                              >
                              </FeatureInfo>

                              <FeatureInfo
                                  areaInfo="Our powerful search makes it easy to personalize your results so you only see the cars and features you care about."
                                  iconCard={iconSearch}
                              >
                              </FeatureInfo>

                              <FeatureInfo
                                  areaInfo="Our team is constantly developing new features that make the process of buying and selling a car simpler."
                                  iconCard={iconSettings}
                              >
                              </FeatureInfo>

                          </div>
                      </div>
                  </div>
              </div>


              <div class="containerCar">
					<div class="imgCar">
					
                        <img src={ImgCar} alt="imagem do carro" />
					</div>
					<div class="imgLine">
                        <img src={ImgLine} alt="Imagem de Linha pontilhadas" />
					</div>
				</div>



                <div class="containerCardAllTwo">

                      <div class="containerCard">
                          <div>
                              <div class="infoCardTwo">
                              <FeatureInfoTwo
                                  areaInfo="We provide free access to key info like dealer reviews, market value, price drops."
                                  iconCard={iconInfo}
                              >
                              </FeatureInfoTwo>

                              <FeatureInfoTwo
                                  areaInfo="We focus on building the most transparent, trustworthy experience for our users, and we’ve proven that works for dealers, too."
                                  iconCard={iconUser}
                              >
                              </FeatureInfoTwo>


                              <FeatureInfoTwo
                                  areaInfo="Specify the parameters of your car to form its market value on the basis of similar cars on Finder."
                                  iconCard={iconCalculador}
                              >
                              </FeatureInfoTwo>
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
