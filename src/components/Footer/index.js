import React from "react";
import * as S from "./style";

import logoSite from "@/assets/img/logo-site.png";
import globeIcon from "@/assets/icons/globe.svg";
import pinIcon from "@/assets/icons/pin.svg";
import cellphoneIcon from "@/assets/icons/cellphone.svg";
import mail2Icon from "@/assets/icons/mail-2.svg";

import IconButton from "@/components/IconButton";
import SubscribeEmail from "@/components/SubscribeEmail";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.FooterContent>
      <div className="link-content-head">
        <div className="container">
          <Link to="#">
            <img src={logoSite} alt="Logo do site" />
          </Link>

          <fieldset>
            <label htmlFor="languageSite">
              <img src={globeIcon} alt="" />
            </label>
            <select name="languageSite" id="languageSite">
              <option value="ptbr" selected>
                pt-BR
              </option>
              <option value="enus">en-US</option>
            </select>

            <label htmlFor="locationSite">
              <img src={pinIcon} alt="" />
            </label>
            <select name="locationSite" id="locationSite">
              <option value="Brasília">Brasiília</option>
              <option value="Florianópolis">Florianópolis</option>
              <option value="João Pessoa">João Pessoa</option>
              <option value="São Paulo" selected>
                São Paulo
              </option>
            </select>
          </fieldset>
        </div>
      </div>

      <div className="link-content-mid">
        <div className="container">
          <div className="footer-links-news">
            <h2>Cadastre-se na newsletter</h2>
            <p>Não perca nenhuma oferta relevante!</p>
            <form id="subscribeForm">
              <fieldset>
                <SubscribeEmail />
              </fieldset>
            </form>
          </div>

          <div className="footer-links-mid">
            <h3>Comprar ou Vender</h3>

            <a href="#">Encontre um carro</a>
            <a href="#">Venda seu carro</a>
            <a href="#">Revendedores de carros</a>
            <a href="#">Comparar carros</a>
            <a href="#">Avaliação de carros online</a>
          </div>

          <div className="footer-links-mid">
            <h3>Sobre</h3>

            <a href="#">Sobre o Finder</a>
            <a href="#">Contate-nos</a>
            <a href="#">FAQs & suporte</a>
            <a href="#">App Mobile</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-links-mid">
            <h3>Perfil</h3>

            <a href="#">Minha conta</a>
            <a href="#">Lista de desejos</a>
            <a href="#">Minhas listagens</a>
            <a href="#">Add listagem</a>
          </div>

          <address className="footer-links-adress">
            <a href="tel:+1111111111">
              <img src={cellphoneIcon} alt="" />
              (11) 1111-1111
            </a>
            <a href="mailto:email@finder.com.br">
              <img src={mail2Icon} alt="" />
              email@finder.com.br
            </a>

            <div className="social-btns">
              <IconButton>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33187 2.32458H7.60996V0.0985833C7.38946 0.06825 6.63112 0 5.74796 0C3.90521 0 2.64288 1.15908 2.64288 3.28942V5.25H0.609375V7.7385H2.64288V14H5.13604V7.73908H7.08729L7.39704 5.25058H5.13546V3.53617C5.13604 2.81692 5.32971 2.32458 6.33187 2.32458Z"
                    fill="white"
                  />
                </svg>
              </IconButton>

              <IconButton>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5615 3.14925C13.1308 2.745 13.6097 2.24042 14 1.65942V1.65883C13.4791 1.88692 12.9249 2.03858 12.3463 2.11208C12.9412 1.75683 13.3957 1.19858 13.6092 0.526C13.0544 0.85675 12.4419 1.09008 11.7892 1.22075C11.2624 0.659583 10.5117 0.3125 9.69267 0.3125C8.10367 0.3125 6.82442 1.60225 6.82442 3.18308C6.82442 3.41058 6.84367 3.62933 6.89092 3.83758C4.50508 3.72092 2.39342 2.57758 0.97475 0.835167C0.727417 1.26508 0.581583 1.75683 0.581583 2.28592C0.581583 3.27992 1.09317 4.16075 1.85675 4.67117C1.39533 4.66242 0.94325 4.52825 0.56 4.31767V4.34917C0.56 5.74392 1.55458 6.90242 2.8595 7.16958C2.62558 7.23375 2.37125 7.26408 2.107 7.26408C1.92325 7.26408 1.73775 7.25358 1.56392 7.21508C1.9355 8.35142 2.99133 9.18733 4.2455 9.21475C3.269 9.97833 2.02883 10.4386 0.686583 10.4386C0.4515 10.4386 0.22575 10.4281 0 10.3995C1.27167 11.2191 2.77783 11.6875 4.403 11.6875C9.46808 11.6875 12.7692 7.46183 12.5615 3.14925Z"
                    fill="white"
                  />
                </svg>
              </IconButton>

              <IconButton>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.49335 7.85541L5.26177 11.1127C5.5931 11.1127 5.7366 10.9704 5.90869 10.7995L7.4621 9.31491L10.6809 11.6722C11.2713 12.0012 11.6872 11.8279 11.8464 11.1291L13.9593 1.22875L13.9599 1.22816C14.1471 0.355496 13.6443 0.0142463 13.0691 0.22833L0.649937 4.98308C-0.197646 5.31208 -0.184813 5.78458 0.505854 5.99866L3.68094 6.98625L11.056 2.3715C11.4031 2.14166 11.7187 2.26883 11.4591 2.49866L5.49335 7.85541Z"
                    fill="white"
                  />
                </svg>
              </IconButton>

              <IconButton>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.48142C0 8.52075 1.01733 10.3402 2.60808 11.5284V14L4.99158 12.6922C5.62742 12.8677 6.30117 12.9634 6.99942 12.9634C10.8652 12.9634 13.9994 10.0619 13.9994 6.482C14 2.90208 10.8657 0 7 0C3.13425 0 0 2.9015 0 6.48142H0ZM6.2615 4.66608L8.08733 6.56717L11.5214 4.66608L7.69475 8.72725L5.91267 6.82675L2.43425 8.72783L6.2615 4.66608Z"
                    fill="white"
                  />
                </svg>
              </IconButton>
            </div>
          </address>
        </div>
      </div>

      <div className="link-content-footer">
        <div className="container">
          <p>
            Copyright © Finder | Gama Academy. Todos os direitos reservados -
            Este é um projeto acadêmico.
          </p>

          <div className="terms-and-politic">
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
          </div>
        </div>
      </div>
    </S.FooterContent>
  );
};

export default Footer;
