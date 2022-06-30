import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionExemplo from "../../components/SectionExemplo";
import SectionOfertas from "../../components/SectionOfertas";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <SectionExemplo />

        <SectionOfertas />
      </main>

      <Footer />
    </>
  );
};

export default Home;
