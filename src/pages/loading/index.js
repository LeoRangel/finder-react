import React from "react";

import * as S from "./style";

import Lottie from 'react-lottie';
import animationData from './../../lotties/loading-cars.json'
const Loading = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <S.Loading>
      <div className="container centerPage">
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
        />
	</div>

	<script>
		window.onload = function () {
			setTimeout(function () {
				let href = "./Catalog";
				window.location.href = href;
			}, 1000)
		}; 
	</script>
    </S.Loading>
  );
};

export default Loading;
