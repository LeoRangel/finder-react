import React from "react";

import * as S from "./style";

import avatarImg from "@/assets/img/avatar.jpeg";
import checkImg from "@/assets/img/car-banner/check.png";
import steeringWheelImg from "@/assets/img/car-banner/steering-wheel.png";
import drivingTestImg from "@/assets/img/car-banner/driving-test.png";
import accidentImg from "@/assets/img/car-banner/accident.png";

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
import GalleryCarroussel from "@/components/GalleryCarroussel";
import SectionYouMightBeInterested from "@/components/SectionYouMightBeInterested";

const Car = () => {
  return (
    <>
      <Navbar />

      <S.Car id="singleItemPage">
        <div className="container">
          <main>
            <section className="singleItemPageHeader">
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

                <ul className="singleItemOptions">
                  <li>
                    <IconButton>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.50002 4.83341C1.85569 4.83341 1.33335 5.35575 1.33335 6.00008C1.33335 6.64441 1.85569 7.16675 2.50002 7.16675C3.14435 7.16675 3.66669 6.64441 3.66669 6.00008C3.66669 5.35575 3.14435 4.83341 2.50002 4.83341ZM0.166687 6.00008C0.166687 4.71142 1.21136 3.66675 2.50002 3.66675C3.78868 3.66675 4.83335 4.71142 4.83335 6.00008C4.83335 7.28875 3.78868 8.33341 2.50002 8.33341C1.21136 8.33341 0.166687 7.28875 0.166687 6.00008Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.50002 1.33341C8.85569 1.33341 8.33335 1.85575 8.33335 2.50008C8.33335 3.14441 8.85569 3.66675 9.50002 3.66675C10.1444 3.66675 10.6667 3.14441 10.6667 2.50008C10.6667 1.85575 10.1444 1.33341 9.50002 1.33341ZM7.16669 2.50008C7.16669 1.21142 8.21136 0.166748 9.50002 0.166748C10.7887 0.166748 11.8334 1.21142 11.8334 2.50008C11.8334 3.78875 10.7887 4.83342 9.50002 4.83342C8.21136 4.83342 7.16669 3.78875 7.16669 2.50008Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.50002 8.33341C8.85569 8.33341 8.33335 8.85575 8.33335 9.50008C8.33335 10.1444 8.85569 10.6667 9.50002 10.6667C10.1444 10.6667 10.6667 10.1444 10.6667 9.50008C10.6667 8.85575 10.1444 8.33341 9.50002 8.33341ZM7.16669 9.50008C7.16669 8.21142 8.21136 7.16675 9.50002 7.16675C10.7887 7.16675 11.8334 8.21142 11.8334 9.50008C11.8334 10.7887 10.7887 11.8334 9.50002 11.8334C8.21136 11.8334 7.16669 10.7887 7.16669 9.50008Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.44359 2.99128C8.59113 3.27768 8.47856 3.62945 8.19216 3.77699L4.34216 5.76032C4.05576 5.90786 3.70399 5.79529 3.55645 5.5089C3.40891 5.2225 3.52148 4.87073 3.80788 4.72319L7.65788 2.73985C7.94428 2.59232 8.29605 2.70488 8.44359 2.99128Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.55645 6.49128C3.70399 6.20489 4.05576 6.09232 4.34216 6.23986L8.19216 8.22319C8.47856 8.37073 8.59113 8.7225 8.44359 9.0089C8.29605 9.2953 7.94428 9.40786 7.65788 9.26033L3.80788 7.27699C3.52148 7.12945 3.40891 6.77768 3.55645 6.49128Z"
                          fill="white"
                        />
                      </svg>
                    </IconButton>
                  </li>
                  <li>
                    <IconButton>
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.91253 1.51307C3.59242 1.47893 3.26871 1.51143 2.96178 1.60851C2.65485 1.7056 2.37136 1.86517 2.12915 2.07717C1.88695 2.28917 1.69128 2.549 1.55446 2.84031C1.41764 3.13162 1.34264 3.44809 1.33416 3.76979C1.32569 4.0915 1.38393 4.41147 1.50521 4.70957C1.6265 5.00768 1.80822 5.27745 2.03892 5.5019L2.0426 5.50549L6.00488 9.42899L9.95931 5.51329C9.97084 5.49894 9.9852 5.48095 10.0018 5.45992C10.0488 5.40029 10.1127 5.3174 10.1806 5.22427C10.3284 5.02158 10.453 4.82652 10.4978 4.71526C10.6177 4.41768 10.6749 4.09857 10.6657 3.77788C10.6566 3.4572 10.5814 3.14185 10.4448 2.85156C10.3081 2.56128 10.113 2.30231 9.87168 2.09086C9.63033 1.87941 9.34791 1.72004 9.04211 1.62273C8.73631 1.52542 8.4137 1.49226 8.09449 1.52533C7.77527 1.55841 7.46633 1.657 7.18699 1.81494C6.90765 1.97287 6.66393 2.18675 6.47108 2.44318C6.36054 2.59016 6.18716 2.67641 6.00325 2.6759C5.81935 2.67539 5.64645 2.58818 5.53673 2.44058C5.34471 2.18228 5.10127 1.96651 4.82174 1.80688C4.54221 1.64725 4.23264 1.54721 3.91253 1.51307ZM10.8254 6.2939C10.8271 6.2953 10.8272 6.29523 10.8272 6.29523L10.8295 6.29242L10.8347 6.28603L10.8532 6.26328C10.8689 6.24392 10.8911 6.21635 10.9179 6.18228C10.9715 6.11438 11.0447 6.01947 11.1234 5.91155C11.2688 5.71214 11.4748 5.41207 11.5799 5.15128C11.7598 4.70476 11.8456 4.22591 11.8319 3.7447C11.8182 3.26349 11.7054 2.79029 11.5003 2.35472C11.2953 1.91915 11.0026 1.53058 10.6405 1.21333C10.2784 0.896082 9.85466 0.656984 9.39588 0.510993C8.93711 0.365003 8.45314 0.315261 7.97425 0.364879C7.49537 0.414497 7.03188 0.562407 6.61279 0.799357C6.39553 0.922194 6.19263 1.06759 6.00727 1.23275C5.82173 1.06557 5.61833 0.918286 5.40029 0.793774C4.98092 0.554281 4.51649 0.404203 4.03626 0.352985C3.55603 0.301767 3.07039 0.350516 2.60993 0.496167C2.14946 0.641818 1.72414 0.881216 1.36075 1.19929C0.997359 1.51737 0.703767 1.90723 0.49847 2.34434C0.293172 2.78145 0.180619 3.25632 0.1679 3.73906C0.155182 4.22181 0.242574 4.70195 0.424572 5.14926C0.606234 5.59575 0.878225 5.99986 1.22346 6.33625L5.59395 10.6639L5.5944 10.6644C5.82174 10.8895 6.18799 10.8895 6.41532 10.6644L10.7472 6.37492C10.7759 6.35144 10.8027 6.32481 10.8272 6.29523L10.8254 6.2939Z"
                          fill="white"
                        />
                      </svg>
                    </IconButton>
                  </li>
                </ul>
              </div>
            </section>

            <section className="singleItemPageContent">
              <GalleryCarroussel
                gallery={[
                  "https://s3-alpha-sig.figma.com/img/97e5/2667/903fadc51cd3355f270d858f19660992?Expires=1657497600&Signature=FFfp4IpnRubeoQIKsxqRn1RzZzCJRuyEShaduwChjTgDCuVMklnbs6qJxnnt7syJrvjDgp6bpO7ONgLNg-V2VK0952MlMuqqvY2Vdas8KuNaWT8goJOqFvhe11Bgd3jApZT-jeRKhA9X1P2eL1rUUHx-n1zGst8xfhcnSYkxb4NfxLpzbcc~tH3-USFkEAQh5HgqylCKzLTt6hMeWzSmQaAu5M3GUVW3dk4d34MdYKY5xYnr4Un4FOKQWXvwchCDkn3rMiXp4VLy7W-5LGSZuoBb40WcarsWR~crkwwdW5q2oFzM2ylo264nS0P4YoFVVKUtCz5ZGoM8U4Yi3X-ReA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/cec2/d54c/c37ddb67c834286162bb519ca6017cd4?Expires=1657497600&Signature=KLmkS-BtS8f6gEZ6QpJ4kVEg94zC26dO8pX3n~RR9K8DUf3nOmbvAo-QimOCvoBZQVyrVEVnKpAbpQqD9WG2w1GYNZQvXDxckFpE~9F1yTDqPrF-RsVufcQCmXlKM~wKweQeFZDllUyRqsLHfl53sZCiB7IpYT6t5BAwdmYmAa7lPa237dUu-u2ymix4bzil-bJpIzgx00qRen46ocbPZO851swGb62xdL~GY-TKreuk5Bcnmn0MQmJS36mRrUWfXfGocrPAEbdOBRRcnvcgC2vgPAQE~eg8sDFGAPXFF6oORAZXWh5tZlfYnl4YD3h9TurbdiVWJEdWGyoOunvdpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/0bd1/85ee/ea7e858680dab67f6f234fac6fa0f3bd?Expires=1657497600&Signature=ZA2KKqmMl7beMGnGfRwhS40kGzEhO5h7NtVSDxyvQ4KYOeJ8w2LZc5d2xe1-p71qJ6yf72h1cXXpAk1pyQXRrVZEZsMvjOrtB9jxrciDxDGWk~O88U5LO2BR75ihbnEnHvXQQrXRj3EivjuQ688wfoPapw-yk0Wu9sXJMYxLPjaT2jyR6YsN~PEbMMLlFWt7jDm5-5EsukH2RPZgjTGO9DRFEG2WIoQtMGtxyZ3imnqDIXKtd1d5vIlgRaABx0P-TbYIB3P5~vg9IUmbk4-2W4yW6Auiy5GuGR0VSohl~IvCbIwaHzKRu3NdJKdoP8xHIAs5ZqVJryOEawfRwgVHjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  "https://s3-alpha-sig.figma.com/img/7365/a8dc/8322b69d69acf5f4f45c23bb0e2b0e39?Expires=1657497600&Signature=NSSRF6J29-xsKbHKqMlGaZsnIlDFbWeHf16W65o7IsA7GLuo4yesO6ZzB0rFVoFnjrjBhcaORb3CXdeFBp~T6Iv6fngTDt6pNhJJkuOoqGjEWeDdzUfT1AF3o4Yw6lyiw6j4IxzcboMJ4CdAK3JH-0HUZa9ldYTQfPoRDleLL2EuoPLzFNZRXZLdluOPHsh9JLqKjWtmRE3atALq6djRqE0T3qDwT7wiDvr2oZdi2xWQacnFHi0iIGfQaYpxb85ac-dmbKcjjWBj2QPwUQZFmUY809NVYtVSzeLZryqMZ7U~RWXZnLY8XohVRH034ISSWGDjY9QpsTlEY3Sx0qt9qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                ]}
              />

              <div className="specifications">
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

              <div className="banner">
                <div className="bannerItem">
                  <div className="bannerIcon">
                    <img src={checkImg} alt="" />
                  </div>
                  <span>Verificado e certificado pelo Finder</span>
                </div>

                <div className="bannerItem">
                  <div className="bannerIcon">
                    <img src={steeringWheelImg} alt="" />
                  </div>
                  <span>Único dono</span>
                </div>

                <div className="bannerItem">
                  <div className="bannerIcon">
                    <img src={drivingTestImg} alt="" />
                  </div>
                  <span>Bem equipado</span>
                </div>

                <div className="bannerItem">
                  <div className="bannerIcon">
                    <img src={accidentImg} alt="" />
                  </div>
                  <span>Nenhum acidente/dano relatado</span>
                </div>
              </div>

              <div className="specifications">
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

              <div className="infosList">
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

            <section className="singleItemPageSidebar">
              <div>
                <h2>R$ 60.990</h2>

                <div className="infosList">
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

              <div className="authorCard">
                <span>Vendedor particular</span>

                <div className="author">
                  <img src={avatarImg} alt="Foto do author" />
                  <div>
                    <h3>Usuário</h3>
                    <ul className="review">
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

                <a href="#">Outros anúncios deste vendedor</a>

                <a href="tel:+" className="myBtn btnOutlined">
                  <img src={phoneIcon} alt="" />
                  (11) *** ****
                </a>
                <a href="mailto:" className="myBtn">
                  <img src={mailIcon} alt="" />
                  Enviar email
                </a>
              </div>

              <div className="subscribe">
                <h3>
                  Envie-me por e-mail quedas de preços e novas listagens para
                  estes resultados de pesquisa:
                </h3>

                <form id="subscribeForm">
                  <fieldset>
                    <SubscribeEmail />

                    <div className="acceptAlert">
                      <label htmlFor="formCheckAcceptAlert">
                        <input
                          type="checkbox"
                          name="formCheckAcceptAlert"
                          id="formCheckAcceptAlert"
                          value="formCheckAcceptAlert"
                          onChange={() => {}}
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

        <SectionYouMightBeInterested />
      </S.Car>

      <Footer />
    </>
  );
};

export default Car;
