import React from "react";

import * as S from "./style";

import btnStore from "@/assets/icon/app-store.png";
import btnPlay from "@/assets/icon/google-play.png";
import imgCar from "@/assets/icon/illustration.png";

const SectioBaixeApp = ({ }) => {
  return (
    <S.SectionBaixeApp>
      <div className="container containerApp">

        <div class="infoApp">
          <h1>Baixe o nosso app</h1>
          <p>Baixe o Finder App e junte-se à comunidade de entusiastas de carros.
            Não pare sua busca de carro quando sair do computador com nosso aplicativo
            para Android e iOS!</p>
          <div class="buttonsApp">
            <img src={btnStore} alt="Botão App Store" />
            <img src={btnPlay} alt="Botão Google Play" />
          </div>
        </div>


        <div class="imgApp">
          <img src={imgCar} alt="Imagem de carro no celular" />
        </div>

      </div>
    </S.SectionBaixeApp>
  );
};

export default SectioBaixeApp;
