import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  padding: 0.5rem;

  &.active {
    font-weight: bold;
    color: #0066cc;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/form">Form</StyledNavLink>
      <StyledNavLink to="/profile">Profile</StyledNavLink>
    </Nav>
  );
};

export default Navigation;
