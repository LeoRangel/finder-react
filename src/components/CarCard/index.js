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
              <Link
                to={`/car/?car_id=${id}`}
                className={`mySlide ${index === 0 && "active"}`}
                data-slide-index={index + 1}
                key={index}
              >
                <img src={item} alt="" loading="lazy" />
              </Link>
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
                <input
                  type="checkbox"
                  name="carCompare"
                  value="compare"
                  onChange={() => {}}
                />
                <small>Compare</small>
              </label>
            </div>

            <h3 className="carName">
              <Link to={`/car/?car_id=${id}`}>{name}</Link>
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
                <input
                  type="checkbox"
                  name="carCompare"
                  value="compare"
                  onChange={() => {}}
                />
                <small>Compare</small>
              </label>
            </div>

            <h3 className="carName">
              <Link to={`/car/?car_id=${id}`}>{name}</Link>
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
