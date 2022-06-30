import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionHeader from "../../components/SectionHeader";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <div className="container">
            <SectionHeader
              title="Section de exemplo"
              actionLabel="Ver todos"
              actionLink="#"
              ariaLabel="Ir para página de ver todos os..."
            >
              <Button>Botão extra 1</Button>
              <Button>Botão extra 2</Button>
            </SectionHeader>
            <div>Conteúdo da section...</div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader
              title="Section de exemplo 2"
              actionLabel="Ver todos"
              actionLink="#"
              ariaLabel="Ir para página de ver todos os..."
            />
            <div>Conteúdo da section...</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
