import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.nav`
  width: 150px;
  height: 100vh;
  padding: 2.5rem;
  position: fixed;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.neutral1.hex};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;

  &.active {
    font-weight: 900;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent1.hex};
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <StyledNavLink to="/" exact>
        Velkommen
      </StyledNavLink>
      <StyledNavLink to="/logo">Logo</StyledNavLink>
      <StyledNavLink to="/colors">Farger</StyledNavLink>
      <StyledNavLink to="/typography">Typografi</StyledNavLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
