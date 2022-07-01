import React from "react";

import * as S from "./style";

import avatarImg from "@/assets/img/avatar.jpeg";
import checkImg from "@/assets/img/car-banner/check.png";
import steeringWheelImg from "@/assets/img/car-banner/steering-wheel.png";
import drivingTestImg from "@/assets/img/car-banner/driving-test.png";
import accidentImg from "@/assets/img/car-banner/accident.png";

import shareIcon from "@/assets/icons/share.svg";
import heartIcon from "@/assets/icons/heart.svg";
import mileageIcon from "@/assets/icons/mileage.svg";
import locationIcon from "@/assets/icons/location.svg";
import starIcon from "@/assets/icons/star.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import mailIcon from "@/assets/icons/mail.svg";
// import sendIcon from "@/assets/icons/send.svg";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscribeEmail from "@/components/SubscribeEmail";
import Breadcrumbs from "@/components/Breadcrumbs";
import IconButton from "@/components/IconButton";

const Car = () => {
  return (
    <>
      <Navbar />

      <S.Car id="singleItemPage">
        <div class="container">
          <main>
            <section class="singleItemPageHeader">
              <div>
                <Breadcrumbs>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Usados</a>
                  </li>
                  <li>
                    <a href="#" disabled>
                      Mercedes-Benz E 400 Cabriolet
                    </a>
                  </li>
                </Breadcrumbs>
              </div>

              <div>
                <h1>Mercedes-Benz E 400 Cabriolet</h1>

                <ul class="singleItemOptions">
                  <li>
                    <IconButton>
                      <img src={shareIcon} alt="" />
                    </IconButton>
                  </li>
                  <li>
                    <IconButton>
                      <img src={heartIcon} alt="" />
                    </IconButton>
                  </li>
                </ul>
              </div>
            </section>

            <section class="singleItemPageContent">
              <div class="specifications">
                <h2>Especificações</h2>

                <p>
                  <strong>Ano:</strong> 2018
                </p>
                <p>
                  <strong>Quilometragem:</strong> 25K miles
                </p>
                <p>
                  <strong>Tipo:</strong> Convertible
                </p>
                <p>
                  <strong>Transmissão:</strong> Automático
                </p>
              </div>

              <div class="banner">
                <div class="bannerItem">
                  <div class="bannerIcon">
                    <img src={checkImg} alt="" />
                  </div>
                  <span>Verificado e certificado pelo Finder</span>
                </div>

                <div class="bannerItem">
                  <div class="bannerIcon">
                    <img src={steeringWheelImg} alt="" />
                  </div>
                  <span>Único dono</span>
                </div>

                <div class="bannerItem">
                  <div class="bannerIcon">
                    <img src={drivingTestImg} alt="" />
                  </div>
                  <span>Bem equipado</span>
                </div>

                <div class="bannerItem">
                  <div class="bannerIcon">
                    <img src={accidentImg} alt="" />
                  </div>
                  <span>Nenhum acidente/dano relatado</span>
                </div>
              </div>

              <div class="specifications">
                <h2>Descrição do vendedor</h2>

                <p>
                  Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet
                  non scelerisque turpis sed etiam ultrices. Blandit mollis
                  dignissim egestas consectetur porttitor. Vulputate dolor
                  pretium, dignissim eu augue sit ut convallis. Lectus est,
                  magna urna feugiat sed ultricies sed in lacinia. Fusce potenti
                  sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper
                  arcu.
                </p>
                <a href="#">Ver mais</a>
              </div>

              <hr />

              <div class="infosList">
                <div>
                  <span>
                    Publicado: Abril, <strong>2020</strong>
                  </span>
                </div>
                <div>
                  <span>
                    Número do anúncio: <strong>681013232</strong>
                  </span>
                </div>
                <div>
                  <span>
                    Visualizações: <strong>48</strong>
                  </span>
                </div>
              </div>
            </section>

            <section class="singleItemPageSidebar">
              <div>
                <h2>R$ 60.990</h2>

                <div class="infosList">
                  <div>
                    <img src={mileageIcon} alt="" />
                    <span>25.000 Km</span>
                  </div>
                  <div>
                    <img src={locationIcon} alt="" />
                    <a href="#">São Paulo</a>
                  </div>
                </div>
              </div>

              <div class="authorCard">
                <span>Vendedor particular</span>

                <div class="author">
                  <img src={avatarImg} alt="Foto do author" />
                  <div>
                    <h3>Usuário</h3>
                    <ul class="review">
                      <li>
                        <img src={starIcon} alt="" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" />
                      </li>
                      <li>
                        <span>(5 reviews)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <a href="#">Other ads by this seller</a>

                <a href="tel:+" class="myBtn btnOutlined">
                  <img src={phoneIcon} alt="" />
                  (11) *** ****
                </a>
                <a href="#" class="myBtn">
                  <img src={mailIcon} alt="" />
                  Enviar email
                </a>
              </div>

              <div class="subscribe">
                <h3>
                  Envie-me por e-mail quedas de preços e novas listagens para
                  estes resultados de pesquisa:
                </h3>

                <form id="subscribeForm">
                  <fieldset>
                    <SubscribeEmail />

                    <div class="acceptAlert">
                      <label for="formCheckAcceptAlert">
                        <input
                          type="checkbox"
                          name="formCheckAcceptAlert"
                          id="formCheckAcceptAlert"
                          value="formCheckAcceptAlert"
                        />
                        <small>
                          Concordo em receber alertas de queda de preço neste
                          veículo e informações úteis sobre compras.
                        </small>
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
            </section>
          </main>
        </div>
      </S.Car>

      <Footer />
    </>
  );
};

export default Car;
