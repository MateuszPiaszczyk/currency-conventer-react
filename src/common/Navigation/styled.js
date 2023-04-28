import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.color.clairvoyant};
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  &.${activeClassName} {
    font-weight: 700;
  }

  &:hover {
    border-bottom: 1px solid;
  }

  &:active {
    font-weight: 700;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
`;
