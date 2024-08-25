import React from "react";
import styled from "styled-components";

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

export const SubSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export default function Merkevare() {
  return (
    <div>
      <Title>Vår merkevare</Title>
      <Subtitle>Merkevareposisjonering</Subtitle>
      <Bodytext>
        Oya leverer rimelige og brukervennlige telekommunikasjonsløsninger for
        små og mellomstore bedrifter. Vi forplikter oss til å levere enestående
        kundesupport og oppfølging, helt uten skjulte kostnader, slik at våre
        kunder alltid har teknologien og forutsigbarheten de trenger for å
        vokse.
      </Bodytext>

      <Subtitle>Visjon</Subtitle>
      <Bodytext>
        Å være den mest anerkjente aktøren innen telekommunikasjon for små og
        mellomstore bedrifter i Norge, kjent for å levere enkle og
        brukervennlige løsninger som dekker kundens behov.
      </Bodytext>
      <Subtitle>Misjon</Subtitle>
      <Bodytext>
        Oya skal hjelpe norske bedrifter med å holde seg tilkoblet gjennom enkle
        og ukompliserte telekommunikasjonsløsninger. Vi tilbyr en brukervennlig
        løsning for innkommende og utgående kommunikasjon, i tillegg til
        mobilabonnement for våre kunders ansatte. Vårt mål er å gjøre
        telekommunikasjon enkelt og forståelig for små og mellomstore bedrifter,
        med eksepsjonell oppfølging og kundeservice.
      </Bodytext>
      <Subtitle>Merkevareløfte</Subtitle>
      <Bodytext>
        Hos Oya lover vi å levere brukervennlige, pålitelige og
        kostnadseffektive telekommunikasjonsløsninger til små og mellomstore
        bedrifter. Vi streber etter å tilby enestående oppfølging og
        eksepsjonell kundeservice, slik at våre kunder alltid føler seg verdsatt
        og ivaretatt.
      </Bodytext>
      <Subtitle>Våre kjerneverdier</Subtitle>
      <SubSubtitle>Kundesentrisk</SubSubtitle>
      <Bodytext>
        Hos oss står kunden alltid i fokus. Vi tilbyr rask og personlig
        kundeservice med enestående oppfølging.
      </Bodytext>
      <SubSubtitle>Tilgjengelighet</SubSubtitle>
      <Bodytext>
        Vi er alltid tilgjengelige for våre kunder og hjelper der vi kan, så
        fort vi kan.
      </Bodytext>
      <SubSubtitle>Pålitelighet</SubSubtitle>
      <Bodytext>
        Våre kunder kan alltid stole på at vi leverer en pålitelig og stabil
        plattform.
      </Bodytext>
      <SubSubtitle>Transparens</SubSubtitle>
      <Bodytext>
        Oya har en transparent prismodell uten skjulte kostnader og gebyrer,
        slik at kundene alltid vet hva de betaler for og hva de kan forvente.
      </Bodytext>
      <SubSubtitle>Enkelhet</SubSubtitle>
      <Bodytext>
        Vi streber etter å gjøre kompliserte oppgaver enkle, og sørger for at
        løsningen vår er brukervennlig, enkel å forstå og lett å bruke.
      </Bodytext>
    </div>
  );
}
