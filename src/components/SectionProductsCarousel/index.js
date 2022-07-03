import React from "react";

import * as S from "./style";

import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import seatCoversImg from "@/assets/img/products-carousel/seat-covers.png";
import tiresImg from "@/assets/img/products-carousel/tires.png";
import disksImg from "@/assets/img/products-carousel/disks.png";
import childrenChairImg from "@/assets/img/products-carousel/childrenChair.png";

import Button from "@/components/Button";
import IconButton from "@/components/IconButton";

const SectionProductsCarousel = ({}) => {
  return (
    <S.SectionProductsCarousel>
      <div class="container containerCarousel">
        <div id="carousel">
          <div id="leftElements">
            <h2>Loren ipsun</h2>
            <p>Loren ipsun sit amet</p>
            <Button>
              Ir para loja
              <img src={chevronRightIcon} alt="" />
            </Button>
          </div>
          <div id="products">
            <div class="product">
              <img src={seatCoversImg} alt="" />
              <h6>Bancos</h6>
            </div>
            <div class="product">
              <img src={tiresImg} alt="" />
              <h6>Pneus</h6>
            </div>
            <div class="product">
              <img src={disksImg} alt="" />
              <h6>Rodas</h6>
            </div>
            <div class="product">
              <img src={childrenChairImg} alt="" />
              <h6>Acessórios</h6>
            </div>
          </div>
        </div>
      </div>

      <div id="arrowsCarousel">
        <IconButton>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
              fill="white"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="white"
            />
          </svg>
        </IconButton>
      </div>
    </S.SectionProductsCarousel>
  );
};

export default SectionProductsCarousel;
