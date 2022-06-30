import React from "react";
import { Link } from "react-router-dom";

import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import heartIcon from "@/assets/icons/heart.svg";
import locationIcon from "@/assets/icons/location.svg";
import mileageIcon from "@/assets/icons/mileage.svg";
import transmissionIcon from "@/assets/icons/transmission.svg";
import fuelIcon from "@/assets/icons/fuel.svg";

import imgDefault from "@/assets/img/default.png";

import IconButton from "@/components/IconButton";

import * as S from "./style";

const CarCard = ({
  direction = "vertical",
  link = "#",
  year,
  name,
  price,
  location,
  mileage,
  transmission,
  fuel,
}) => {
  return (
    <S.CarCard direction={direction}>
      <S.CardThumbnail direction={direction}>
        <div className="carCardSlider">
          <div className="mySlideList" id="car2">
            <a href="#" className="mySlide active" data-slide-index="1">
              <img src={imgDefault} alt="Imagem Carro" loading="lazy" />
            </a>
            <a href="#" className="mySlide" data-slide-index="2">
              <img src={imgDefault} alt="Imagem Carro" loading="lazy" />
            </a>
          </div>

          <IconButton className="prevCardSlide" onclick="prevCardSlide('car2')">
            <img src={chevronLeftIcon} alt="" />
          </IconButton>
          <IconButton className="nextCardSlide" onclick="nextCardSlide('car2')">
            <img src={chevronRightIcon} alt="" />
          </IconButton>
        </div>

        <IconButton isWhite className="carCardWishlist">
          <img src={heartIcon} alt="" />
        </IconButton>

        <div className="carCardBadges">
          <S.CarBadge className="badgeNew">Novo</S.CarBadge>
          <S.CarBadge className="badgeUsed">Usado</S.CarBadge>
        </div>
      </S.CardThumbnail>

      {direction === "horizontal" ? (
        <div className="carCardBodyFooter">
          <S.CardBody>
            <div className="carYearCompare">
              <div className="carYear">
                <small>{year}</small>
              </div>

              <label className="carCompare">
                <input type="checkbox" name="carCompare" value="compare" />
                <small>Compare</small>
              </label>
            </div>

            <h3 className="carName">
              <Link to={link}>{name}</Link>
            </h3>

            <p className="carPrice">
              <strong>{price}</strong>
            </p>

            <p className="carLocation">
              <img src={locationIcon} alt="" />
              <small>{location}</small>
            </p>
          </S.CardBody>

          <S.CardFooter>
            <ul className="carInfos">
              <li title="mileage">
                <img src={mileageIcon} alt="" />
                <small>{mileage}</small>
              </li>

              <li title="transmission">
                <img src={transmissionIcon} alt="" />
                <small>{transmission}</small>
              </li>

              <li title="fuel">
                <img src={fuelIcon} alt="" />
                <small>{fuel}</small>
              </li>
            </ul>
          </S.CardFooter>
        </div>
      ) : (
        <>
          <S.CardBody>
            <div className="carYearCompare">
              <div className="carYear">
                <small>{year}</small>
              </div>

              <label className="carCompare">
                <input type="checkbox" name="carCompare" value="compare" />
                <small>Compare</small>
              </label>
            </div>

            <h3 className="carName">
              <Link to={link}>{name}</Link>
            </h3>

            <p className="carPrice">
              <strong>{price}</strong>
            </p>

            <p className="carLocation">
              <img src={locationIcon} alt="" />
              <small>{location}</small>
            </p>
          </S.CardBody>

          <S.CardFooter>
            <ul className="carInfos">
              <li title="mileage">
                <img src={mileageIcon} alt="" />
                <small>{mileage}</small>
              </li>

              <li title="transmission">
                <img src={transmissionIcon} alt="" />
                <small>{transmission}</small>
              </li>

              <li title="fuel">
                <img src={fuelIcon} alt="" />
                <small>{fuel}</small>
              </li>
            </ul>
          </S.CardFooter>
        </>
      )}
    </S.CarCard>
  );
};

export default CarCard;
