import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./style";

import playIcon from "@/assets/icons/play.svg";
import imageIcon from "@/assets/icons/image.svg";
import IconButton from "@/components/IconButton";

function SlickNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="slick-arrow next-arrow" onClick={onClick}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          fill="white"
        />
      </svg>
    </IconButton>
  );
}

function SlickPrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton className="slick-arrow prev-arrow" onClick={onClick}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
          fill="white"
        />
      </svg>
    </IconButton>
  );
}

const GalleryCarroussel = ({ gallery, video = "https://www.youtube.com/" }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    addPlayVideo();
  }, []);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={gallery[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    lazyLoad: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => updateActiveSlide(next + 1),
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  function updateActiveSlide(next) {
    setActiveSlide(next);
  }

  function addPlayVideo() {
    const slickThumb = document.querySelector(".slick-thumb");

    const playVideo = document.createElement("li");
    playVideo.setAttribute("class", "hidden-when-md");
    playVideo.innerHTML = `
      <a
        href="${video}"
        class="play-video"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="${playIcon}" alt="" />
        <p>Play video</p>
      </a>
    `;

    slickThumb.appendChild(playVideo);
  }

  return (
    <S.GalleryCarroussel>
      <Slider className="slick-slider" {...settings}>
        {gallery?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>

      <a
        href={video}
        className="play-video display-when-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={playIcon} alt="" />
        <p>Play video</p>
      </a>

      <div className="slider-count">
        <img src={imageIcon} alt="" />
        <span>
          {activeSlide}/{gallery?.length}
        </span>
      </div>
    </S.GalleryCarroussel>
  );
};

export default GalleryCarroussel;
