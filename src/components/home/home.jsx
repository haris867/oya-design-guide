import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 2rem;
`;

export const Bodytext = styled.p`
  font-size: 14px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

export default function Home() {
  return (
    <div>
      <Title>Velkommen til Oya sin designguide</Title>
      <Bodytext>
        Her finner du retningslinjer for hvordan Oya sin visuelle profil skal se
        ut. Dette inkluderer farger, typografi, logo og annen grafisk
        informasjon.
      </Bodytext>
    </div>
  );
}
