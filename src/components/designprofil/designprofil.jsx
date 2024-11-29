import React from "react";
import { Helmet } from "react-helmet";
import theme from "../../theme/theme.jsx";
import * as S from "./index.styles.js";
import styled from "styled-components";

export default function Designprofil() {
  const colors = Object.keys(theme.colors);

  return (
    <div>
      <Helmet>
        <title>Oya | Handover</title>
      </Helmet>
      <S.Title>Vår designprofil</S.Title>
      <S.Section>
        <S.Subtitle>Logo</S.Subtitle>
        <S.SubSubtitle>Primærlogo</S.SubSubtitle>
        <S.ImageContainer>
          <S.LogoImage src="./images/logo-oyatel.png" alt="Oya logo" />
          {/* <S.LogoIconImage
          src="./images/logo-icon-oyatel.png"
          alt="Oya icon logo"
        /> */}
          <S.LightImageContainer>
            <S.LogoImage src="./images/logo-white-oyatel.png" alt="Oya logo" />
          </S.LightImageContainer>
        </S.ImageContainer>
        <S.SubSubtitle>Ikon</S.SubSubtitle>
        <S.ImageContainer>
          <S.LogoIconImage
            src="./images/logo-icon-oyatel.png"
            alt="Oya icon logo"
          />
          <S.LightImageContainer>
            <S.LogoIconImage
              src="./images/logo-white-icon-oyatel.png"
              alt="Oya icon logo"
            />
          </S.LightImageContainer>
        </S.ImageContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Farger</S.Subtitle>
        <S.Bodytext>
          Fullstendig fargepalett ligger under "Farger" i sidemenyen. Her er
          fargene man kan forholde seg til i forbinnelse med branding av apper:
        </S.Bodytext>
        <S.SubSubtitle>Hovedfarger</S.SubSubtitle>
        <S.TitleColorsContainer>
          <div>
            <h4>Primærfarge</h4>
            <S.ColorsContainer>
              <S.ColorBoxWrapper>
                <S.ColorBox color={theme.colors.primary.hex} />
                <S.ColorName>{theme.colorNames.primary}</S.ColorName>
                <S.ColorCode>{theme.colors.primary.hex}</S.ColorCode>
                <S.RgbCode>{theme.colors.primary.rgb}</S.RgbCode>
              </S.ColorBoxWrapper>
            </S.ColorsContainer>
          </div>
          <div>
            <h4>Sekundærfarge</h4>
            <S.ColorsContainer>
              <S.ColorBoxWrapper>
                <S.ColorBox color={theme.colors.secondary.hex} />
                <S.ColorName>{theme.colorNames.secondary}</S.ColorName>
                <S.ColorCode>{theme.colors.secondary.hex}</S.ColorCode>
                <S.RgbCode>{theme.colors.secondary.rgb}</S.RgbCode>
              </S.ColorBoxWrapper>
            </S.ColorsContainer>
          </div>
        </S.TitleColorsContainer>
        <S.SubSubtitle>Tekst og bakgrunn</S.SubSubtitle>
        <S.TitleColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.neutral1.hex} />
              <S.ColorName>{theme.colorNames.neutral1}</S.ColorName>
              <S.ColorCode>{theme.colors.neutral1.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.neutral1.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.neutral2.hex} />
              <S.ColorName>{theme.colorNames.neutral2}</S.ColorName>
              <S.ColorCode>{theme.colors.neutral2.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.neutral2.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
          <S.ColorsContainer>
            <S.ColorBoxWrapper>
              <S.ColorBox color={theme.colors.neutral3.hex} />
              <S.ColorName>{theme.colorNames.neutral3}</S.ColorName>
              <S.ColorCode>{theme.colors.neutral3.hex}</S.ColorCode>
              <S.RgbCode>{theme.colors.neutral3.rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          </S.ColorsContainer>
        </S.TitleColorsContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Typografi</S.Subtitle>
        <S.SubSubtitle>Font weights</S.SubSubtitle>
        <S.Bodytext>
          I utgangspunktet skal headings være ExtraBold og subheadings være
          SemiBold. Til vanlig tekst skal det brukes Regular. Medium kan brukes
          i sammenheng med Regular og ExtraBold.
        </S.Bodytext>
        <S.Bodytext>
          Light (300) kan brukes i tekst og elementer ved behov
        </S.Bodytext>
        <S.SubSubtitle>Manrope</S.SubSubtitle>
        <S.FontBox style={{ fontWeight: 400 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Regular</span>
            <span>Weight: 400</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 500 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Medium</span>
            <span>Weight: 500</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 600 }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Semibold</span>
            <span>Weight: 600</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox style={{ fontWeight: 800, paddingBottom: "30px" }}>
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>ExtraBold</span>
            <span>Weight: 800</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.SubSubtitle>Fallback: Inter</S.SubSubtitle>
        <S.FontBox
          style={{
            fontWeight: 400,
            fontFamily: "Inter, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Regular</span>
            <span>Weight: 400</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>Medium</span>
            <span>Weight: 500</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>SemiBold</span>
            <span>Weight: 600</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
        <S.FontBox
          style={{
            fontWeight: 800,
            fontFamily: "Inter, sans-serif",
            padding: "1rem 0",
          }}
        >
          <S.FontLetters>Aa</S.FontLetters>
          <S.AlphabetContainer>
            <S.AlphabetLetters>ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.AlphabetLetters>
            <S.AlphabetLetters>abcdefghijklmnopqrstuvwxyz</S.AlphabetLetters>
            <S.AlphabetLetters>1234567890(,.;:?!$&*)</S.AlphabetLetters>
          </S.AlphabetContainer>
          <S.StyleInfo>
            <span>ExtraBold</span>
            <span>Weight: 800</span>
            <span>Style: normal</span>
          </S.StyleInfo>
        </S.FontBox>
      </S.Section>
      <S.Section>
        <S.Subtitle>Komponenter</S.Subtitle>
        <S.SubSubtitle>Kort</S.SubSubtitle>
        <S.Bodytext>
          Kort og andre komponenter skal ha en border-radius på 3em / 50px.
          <S.Card>
            <h2
              style={{
                color: "#F8F8F8",
                padding: "40px 0 0 0",
                textAlign: "center",
              }}
            >
              Ditt nye telefonsystem.
            </h2>
            <h4 style={{ color: "#F8F8F8", textAlign: "center" }}>
              Enkelt og greit.
            </h4>
            <div style={{ textAlign: "center" }}>
              <S.DarkPrimaryButton>Les mer</S.DarkPrimaryButton>
            </div>
          </S.Card>
        </S.Bodytext>
        <S.SubSubtitle>Knapper</S.SubSubtitle>
        <S.Bodytext>
          Knapper skal ha en border-radius på 2em / 30px. Primærknapp skal ha
          fylt bakgrunn og sekundærknapp skal ha en fylt border.
        </S.Bodytext>
        <h4>Lys bakgrunn</h4>
        <S.ButtonContainer>
          <div>
            <p>Primærknapp</p>
            <S.PrimaryButton>Les mer</S.PrimaryButton>
          </div>
          <div>
            <p>Sekundærknapp</p>
            <S.SecondaryButton>Les mer</S.SecondaryButton>
          </div>
        </S.ButtonContainer>
        <h4>Mørk bakgrunn</h4>
        <S.DarkButtonContainer>
          <div>
            <p style={{ color: "#F8F8F8" }}>Primærknapp</p>
            <S.DarkPrimaryButton>Les mer</S.DarkPrimaryButton>
          </div>
          <div>
            <p style={{ color: "#F8F8F8" }}>Sekundærknapp</p>
            <S.DarkSecondaryButton>Les mer</S.DarkSecondaryButton>
          </div>
        </S.DarkButtonContainer>
      </S.Section>
      <S.Section></S.Section>
    </div>
  );
}
