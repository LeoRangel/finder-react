import React from "react";

import * as S from "./style";

import SectionHeader from "@/components/SectionHeader";
import CarCard from "@/components/CarCard";

const SectionOfertas = ({}) => {
  return (
    <S.SectionOfertas>
      <div className="container">
        <SectionHeader
          title="Ofertas"
          actionLabel="Ver todas as ofertas"
          actionLink="/catalog"
          ariaLabel="Ir para página de ver todos as ofertas"
        />

        <div class="ofertasCarGrid">
          <CarCard
            link="#"
            year="2014"
            name="Mercedes Benz Convertible Coupe"
            price="$25,880"
            location="New York"
            mileage="48K Mi"
            transmission="Automatic"
            fuel="Petrol"
          />

          <CarCard
            direction="horizontal"
            link="#"
            year="2014"
            name="Mercedes Benz Convertible Coupe"
            price="$25,880"
            location="New York"
            mileage="48K Mi"
            transmission="Automatic"
            fuel="Petrol"
          />

          <CarCard
            direction="horizontal"
            link="#"
            year="2014"
            name="Mercedes Benz Convertible Coupe"
            price="$25,880"
            location="New York"
            mileage="48K Mi"
            transmission="Automatic"
            fuel="Petrol"
          />
        </div>
      </div>
    </S.SectionOfertas>
  );
};

export default SectionOfertas;
