import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;
export const Subtitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  padding: 2rem 0;
`;

export const Bodytext = styled.p`
  font-size: 14px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

const LogoImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;
const LogoIconImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;

export default function Logo() {
  return (
    <div>
      <Helmet>
        <title>Oya | Logo</title>
      </Helmet>
      <Title>Vår logo</Title>
      <Subtitle>Litt om logoen</Subtitle>
      <Bodytext>
        Vår logo er et symbol på hvem vi er og hva vi står for. Den er designet
        for å være moderne og enkel, og representerer vår tilnærming til våre
        kunder - klar og ukomplisert. Logoen består av navnet vårt i den
        minimalistiske fonten Dongle i små bokstaver, og to bølger øverst til
        høyre som representerer kommunikasjon og samhandling mellom mennesker og
        systemer. I tillegg kan logoen brukes i et ikon-format ved å kun ta i
        bruk bokstaven “o” sammen med bølgene uten å miste essensen i logoen -
        det er i bunn og grunn den samme logoen uten de to siste bokstavene i
        navnet.
      </Bodytext>
      <ImageContainer>
        <LogoImage src="./images/oya-logo.png" />
        <LogoIconImage src="./images/oya-logo-icon.png" />
      </ImageContainer>
      <Subtitle>Fonttype</Subtitle>
      <Bodytext>Kommer snart 🫶🏽</Bodytext>
      <Subtitle>Bølger</Subtitle>
      <Bodytext>Kommer snart 🫶🏽</Bodytext>
    </div>
  );
}
