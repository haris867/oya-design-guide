import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.hex};
  color: white;
  padding: 1rem;
`;

const LogoContainerImage = styled.img`
  max-width: calc(50px + 3vw);
  max-height: 100px;
  margin: 0px 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoContainerImage src="./images/oya-logo-light.png"></LogoContainerImage>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
