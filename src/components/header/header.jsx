import React from "react";
import { NavLink } from "react-router-dom";
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

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <NavLink to="/">
          <LogoContainerImage src="./images/oya-logo-light.png"></LogoContainerImage>
        </NavLink>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
