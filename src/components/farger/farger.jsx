import React from "react";
import theme from "../../theme/theme.jsx";
import * as S from "./index.styles.js";
import styled from "styled-components";

const LogoColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LogoColorBox = styled.div`
  height: 150px;
  width: 150px;
  background-color: ${({ bgColor }) =>
    bgColor}; // Ensure background color is applied

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
    border-radius: 30px;
  }
`;
const LogoColor = styled.svg`
  max-width: 100px;
  max-height: 80px;
  .path-fill {
    fill: ${({ fillColor }) => fillColor || "white"};
  }
  .path-stroke {
    stroke: ${({ strokeColor }) => strokeColor || "white"};
  }

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 40px;
  }
`;

export default function Colors() {
  const colors = Object.keys(theme.colors);

  const colorExamples = [
    { background: theme.colors.primary.hex, color: theme.colors.secondary.hex },
    { background: theme.colors.accent2.hex, color: theme.colors.primary.hex },
    { background: theme.colors.neutral2.hex, color: theme.colors.neutral1.hex },
    { background: theme.colors.neutral1.hex, color: theme.colors.accent2.hex },
    { background: theme.colors.accent1.hex, color: theme.colors.neutral1.hex },
    { background: theme.colors.primary.hex, color: theme.colors.accent1.hex },
    { background: theme.colors.neutral1.hex, color: theme.colors.accent1.hex },
    {
      background: theme.colors.secondary.hex,
      color: theme.colors.neutral1.hex,
    },
  ];

  return (
    <div>
      <S.Title>Farger</S.Title>
      <S.Section>
        <S.Subtitle>Palett</S.Subtitle>
        <S.Bodytext>
          Dette er fargene som representerer hvem vi er, og hvordan vi ønsker å
          bli oppfattet. Fargepaletten kombinerer pålitelighet med varme og gir
          oss et vennlig uttrykk. De mørke tonene formidler ro og stabilitet,
          mens de lysere gir paletten liv og energi. Sammen skaper de en
          atmosfære som gjør at våre kunder føler seg trygge og ivaretatt.
        </S.Bodytext>
        <S.ColorsContainer>
          {colors.map((key) => (
            <S.ColorBoxWrapper key={key}>
              <S.ColorBox color={theme.colors[key].hex} />
              <S.ColorName>{theme.colorNames[key]}</S.ColorName>
              <S.ColorCode>{theme.colors[key].hex}</S.ColorCode>
              <S.RgbCode>{theme.colors[key].rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          ))}
        </S.ColorsContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Fargekombinasjoner</S.Subtitle>
        <S.Bodytext>
          Denne oversikten viser hvilke farger som kan kombineres. Sørg for å
          bruke fargene riktig for å følge forskrift om universell utforming.
        </S.Bodytext>
        {colors.map((bgKey) => (
          <S.ColorRowWrapper key={bgKey} bgColor={theme.colors[bgKey].hex}>
            {colors.map((key) => (
              <S.ColorRowBoxWrapper key={key}>
                <S.ColorRowBox
                  color={theme.colors[key].hex}
                  hidden={S.hiddenColors[bgKey]?.includes(key)}
                />
              </S.ColorRowBoxWrapper>
            ))}
          </S.ColorRowWrapper>
        ))}
      </S.Section>
      <S.Section>
        <S.Subtitle>Eksempler</S.Subtitle>
        <S.Bodytext>
          Her er noen eksempler på hvordan fargene kan brukes sammen. Fargene
          kan brukes i ulike kombinasjoner for å skape ulike uttrykk og
          stemninger.
        </S.Bodytext>
        <LogoColorContainer>
          {colorExamples.map((example, index) => (
            <LogoColorBox key={index} bgColor={example.background}>
              <LogoColor
                width="221"
                height="124"
                viewBox="0 0 221 124"
                fill="none"
                fillColor={example.color}
                strokeColor={example.color}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-fill"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.5 100C42.6878 100 55 87.6878 55 72.5C55 57.3122 42.6878 45 27.5 45C12.3122 45 0 57.3122 0 72.5C0 87.6878 12.3122 100 27.5 100ZM27.5 89C36.6127 89 44 81.6127 44 72.5C44 63.3873 36.6127 56 27.5 56C18.3873 56 11 63.3873 11 72.5C11 81.6127 18.3873 89 27.5 89Z"
                />
                <path
                  className="path-fill"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M145.5 100C160.688 100 173 87.6878 173 72.5C173 57.3122 160.688 45 145.5 45C130.312 45 118 57.3122 118 72.5C118 87.6878 130.312 100 145.5 100ZM145.5 89C154.613 89 162 81.6127 162 72.5C162 63.3873 154.613 56 145.5 56C136.387 56 129 63.3873 129 72.5C129 81.6127 136.387 89 145.5 89Z"
                />
                <path
                  className="path-stroke"
                  d="M168.082 52L167.999 94"
                  stroke-width="11"
                  stroke-linecap="round"
                />
                <path
                  className="path-fill"
                  d="M72.0493 48.5208C70.8451 45.7321 67.6083 44.4476 64.8196 45.6518C62.0309 46.856 60.7465 50.0929 61.9507 52.8816L72.0493 48.5208ZM80.9507 96.8816L83.1311 101.931L93.2297 97.5701L91.0493 92.5208L80.9507 96.8816ZM61.9507 52.8816L80.9507 96.8816L91.0493 92.5208L72.0493 48.5208L61.9507 52.8816Z"
                />
                <path
                  className="path-stroke"
                  d="M108.643 50.4688L81.0005 118.201"
                  stroke-width="11"
                  stroke-linecap="round"
                />
                <path
                  className="path-stroke"
                  d="M168 5H168.962C194.643 5 215.462 25.8188 215.462 51.5V51.5"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  className="path-stroke"
                  d="M170.887 24.5625H171.528C186.051 24.5625 197.825 36.3359 197.825 50.8591V50.8591"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </LogoColor>
            </LogoColorBox>
          ))}
        </LogoColorContainer>
      </S.Section>
    </div>
  );
}
