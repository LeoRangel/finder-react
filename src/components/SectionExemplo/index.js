import React from "react";

import * as S from "./style";

import SectionHeader from "../../components/SectionHeader";
import Button from "@/components/Button";

const SectionExemplo = ({}) => {
  return (
    <S.SectionExemplo>
      <div className="container">
        <SectionHeader
          title="Section de exemplo"
          actionLabel="Ver todos"
          actionLink="#"
          ariaLabel="Ir para página de ver todos os..."
        >
          <Button>Botão extra</Button>
        </SectionHeader>

        <div>Adicione aqui o conteúdo da section...</div>
      </div>
    </S.SectionExemplo>
  );
};

export default SectionExemplo;
