import React from "react";
import { Link } from "react-router-dom";

import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import heartIcon from "@/assets/icons/heart.svg";
import locationIcon from "@/assets/icons/location.svg";
import mileageIcon from "@/assets/icons/mileage.svg";
import transmissionIcon from "@/assets/icons/transmission.svg";
import fuelIcon from "@/assets/icons/fuel.svg";

import IconButton from "@/components/IconButton";

import * as S from "./style";

const CarCard = ({
  direction = "vertical",
  id,
  images,
  link = "#",
  condition,
  year,
  name,
  price,
  location,
  mileage,
  transmission,
  fuel,
}) => {
  function prevCardSlide(id) {
    showCardSlides(-1, id);
  }

  function nextCardSlide(id) {
    showCardSlides(1, id);
  }

  function showCardSlides(num, id) {
    let sliderCount = document.getElementById(id).childElementCount;
    let currentSlide = document.querySelector(`#${id} .mySlide.active`);
    var slideIndex = parseInt(currentSlide.dataset.slideIndex);

    slideIndex += num;

    // Slider loop
    if (slideIndex > sliderCount) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = sliderCount;
    }

    currentSlide.classList.toggle("active");

    let newSlide = document.querySelectorAll(
      `#${id} .mySlide[data-slide-index~="${slideIndex}"]`
    )[0];
    newSlide.classList.toggle("active");
  }

  return (
    <S.CarCard direction={direction}>
      <S.CardThumbnail direction={direction}>
        <div className="carCardSlider">
          <div className="mySlideList" id={`car${id}`}>
            {images?.map((item, index) => (
              <a
                href={`/car/?car_id=${id}`}
                className={`mySlide ${index === 0 && "active"}`}
                data-slide-index={index + 1}
                key={index}
              >
                <img src={item} alt="" loading="lazy" />
              </a>
            ))}
          </div>

          <IconButton
            className="prevCardSlide"
            onClick={() => prevCardSlide(`car${id}`)}
          >
            <img src={chevronLeftIcon} alt="" />
          </IconButton>
          <IconButton
            className="nextCardSlide"
            onClick={() => nextCardSlide(`car${id}`)}
          >
            <img src={chevronRightIcon} alt="" />
          </IconButton>
        </div>

        <IconButton isWhite className="carCardWishlist">
          <img src={heartIcon} alt="" />
        </IconButton>

        <div className="carCardBadges">
          {condition === "Novo" ? (
            <S.CarBadge className="badgeNew">Novo</S.CarBadge>
          ) : (
            <S.CarBadge className="badgeUsed">Usado</S.CarBadge>
          )}
        </div>
      </S.CardThumbnail>

      {direction === "horizontal" ? (
        <div className="carCardBodyFooter">
          <S.CardBody>
            <div className="carYearCompare">
              <div className="carYear">
                <small>{year}</small>
              </div>

              <label>
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

              <label>
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
