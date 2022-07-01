import React from "react";

import Footer from "@/components/Footer";
import SectionExemplo from "@/components/SectionExemplo";
import SectionOfertas from "@/components/SectionOfertas";
import SectionLatestPublished from "@/components/SectionLatestPublished";
import MainHeader from "../../components/MainHeader";
import SearchCar from "../../components/SearchCar";
import Brands from "../../components/Brands";

const Home = () => {
  return (
    <>
		<MainHeader/>

      <main>
		<SearchCar/>

        <SectionExemplo />

        <SectionOfertas />

		<Brands/>

        <SectionLatestPublished />
      </main>

      <Footer />
    </>
  );
};

export default Home;
