import React from 'react';

import * as S from './style'

import Opel from '@/assets/icons/opel.svg';
import Audi from '@/assets/icons/audi.svg';
import Mercedes from '@/assets/icons/mercedes.svg';
import Toyota from '@/assets/icons/toyota.svg';
import Mazda from '@/assets/icons/mazda.svg';
import Nissan from '@/assets/icons/nissan.svg';
import Lexus from '@/assets/icons/lexus.svg';
import Honda from '@/assets/icons/honda.svg';
import Renault from '@/assets/icons/renault.svg';
import Infiniti from '@/assets/icons/infiniti.svg';
import Mitsubishi from '@/assets/icons/mitsubishi.svg';
import Hyundai from '@/assets/icons/hyundai.svg';

const Brands = () => {
	return(
		<S.Brands>
			<div className="container">
				<div id="brandsLogo">
					<img src={Opel} alt="Opel" title="Opel"/>
					<img src={Audi} alt="Audi" title="Audi"/>
					<img src={Mercedes} alt="Mercedes" title="Mercedes"/>
					<img src={Toyota} alt="Toyota" title="Toyota"/>
					<img src={Mazda} alt="Mazda" title="Mazda"/>
					<img src={Nissan} alt="Nissan" title="Nissan"/>
					<img src={Hyundai} alt="Hyundai" title="Hyundai"/>
					<img src={Lexus} alt="Lexus" title="Lexus"/>
					<img src={Honda} alt="Honda" title="Honda"/>
					<img src={Renault} alt="Renault" title="Renault"/>
					<img src={Infiniti} alt="Infiniti" title="Infiniti"/>
					<img src={Mitsubishi} alt="Mitsubishi" title="Mitsubishi"/>
				</div>
		</div>
		</S.Brands>

	)
}

export default Brands;
