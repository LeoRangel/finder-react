import React, { useEffect } from "react";

import useApp from "@/hooks/useApp";

import Footer from "@/components/Footer";
// import SectionExemplo from "@/components/SectionExemplo";
import SectionOfertas from "@/components/SectionOfertas";
import SectionLatestPublished from "@/components/SectionLatestPublished";
import MainHeader from "@/components/MainHeader";
import SearchCar from "@/components/SearchCar";
import Brands from "@/components/Brands";
import SectionTemosDiferente from "@/components/SectionTemosDiferente";
import SectionBaixeApp from "@/components/SectionBaixeApp";
import SectionMoreSearched from "@/components/SectionMoreSearched";
import SectionProductsCarousel from "@/components/SectionProductsCarousel";
import SectionBlog from "@/components/SectionBlog";

const Home = () => {
  // const { brandsList, colorsList } = useApp();

  return (
    <>
      <MainHeader />

      <main>
        <SearchCar />

        <SectionMoreSearched />

        <SectionOfertas />

        <Brands /* brandsList={brandsList} */ />

        <SectionTemosDiferente />

        <SectionLatestPublished />

        <SectionProductsCarousel />

        <SectionBaixeApp />

        <SectionBlog />
      </main>

      <Footer />
    </>
  );
};

export default Home;
