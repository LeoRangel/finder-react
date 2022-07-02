import React from "react";

import * as S from "./style";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FiltersFormAdvanced from "@/components/FiltersFormAdvanced";
import SectionFilteredCars from "@/components/SectionFilteredCars";

const Catalog = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <S.Catalog>
          <aside>
            <FiltersFormAdvanced />
          </aside>

          <main>
            <SectionFilteredCars />
          </main>
        </S.Catalog>
      </div>

      <Footer />
    </>
  );
};

export default Catalog;
