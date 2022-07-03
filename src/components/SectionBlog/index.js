import React from "react";

import * as S from "./style";

import fuscaImg from "@/assets/img/blog/fusca.png";
import gtrImg from "@/assets/img/blog/gtr.png";
import harleyImg from "@/assets/img/blog/harley.png";
import user1Img from "@/assets/img/blog/user1.png";
import user2Img from "@/assets/img/blog/user2.png";
import user3Img from "@/assets/img/blog/user3.png";
import calendarIcon from "@/assets/icons/calendar.svg";

import SectionHeader from "@/components/SectionHeader";

const SectionBlog = ({}) => {
  return (
    <S.SectionBlog>
      <div className="container">
        <SectionHeader
          title="Últimas novidades"
          actionLabel="Ir para o blog"
          actionLink="#"
          ariaLabel="Ir para página de blog"
        />

        <div class="center-content">
          <article class="card-blog">
            <img class="img-content" src={fuscaImg} alt="" />
            <div class="link-blog1">
              <a href="#">Dicas</a>
            </div>
            <div class="link-blog2">
              <a href="#">Loren Ipsuns</a>
            </div>
            <div class="card-blog-perfil">
              <img class="img-content-perfil" src={user1Img} alt="" />
              <div>
                <p>Jacob Jones</p>
                <p class="card-date">
                  <img src={calendarIcon} alt="" />
                  24 de Nov
                </p>
              </div>
            </div>
          </article>

          <article class="card-blog">
            <img class="img-content" src={gtrImg} alt="" />
            <div class="link-blog1">
              <a href="#">Ofertas</a>
            </div>
            <div class="link-blog2">
              <a href="#">Loren Ipsuns</a>
            </div>
            <div class="card-blog-perfil">
              <img class="img-content-perfil" src={user2Img} alt="" />
              <div>
                <p>Annete Black</p>
                <p class="card-date">
                  <img src={calendarIcon} alt="" />
                  28 de Nov
                </p>
              </div>
            </div>
          </article>

          <article class="card-blog">
            <img class="img-content" src={harleyImg} alt="" />
            <div class="link-blog1">
              <a href="#">Ofertas</a>
            </div>
            <div class="link-blog2">
              <a href="#">Loren Ipsuns</a>
            </div>
            <div class="card-blog-perfil">
              <img class="img-content-perfil" src={user3Img} alt="" />
              <div>
                <p>Ralph Edwards</p>
                <p class="card-date">
                  <img src={calendarIcon} alt="" />
                  15 de Dez
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </S.SectionBlog>
  );
};

export default SectionBlog;
