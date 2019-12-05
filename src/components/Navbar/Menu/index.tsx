import React, { ReactElement, useRef } from "react";
import styled from "styled-components";
import { Links } from "../navLinks";
import { NavLink } from "react-router-dom";
import Burger from "../Burger";
import Grid from "styled-components-grid";
import { useClickAway } from "react-use";

interface StyledMenuProps {
  open?: Boolean;
  children: ReactElement | null;
}

const StyledMenu = styled.div<StyledMenuProps>`
  z-index: 10;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.secondaryColor};
  transform: ${({ open }) => (open ? "translateX(50px)" : "translateX(-100%)")};
  height: 100vh;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  border-right: solid 1px ${p => p.theme.white};
  padding: 5rem 3rem;
  position: fixed;
  top: 0;
  left: -50px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    border-right: none;
  }
`;

interface Props {
  open: boolean;
  links: Links[];
  setOpen: Function;
}

export const List = styled.ul`
  list-style-type: none;
  padding: 25px 50px;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 25px;
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.white};
  text-decoration: none;
  &:hover {
    color: ${p => p.theme.primaryColor};
  }
`;

const Menu: React.FC<Props> = ({ open, links, setOpen }) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (open) setOpen(false);
  });

  const onLinkClick = () => setOpen(false);
  return (
    <StyledMenu open={open} ref={ref}>
      <Grid>
        <Grid.Unit visible={{ xs: true, sm: false }}>
          <Burger open={open} setOpen={setOpen} />
        </Grid.Unit>
        <List>
          {links.map(({ text, path }) => (
            <ListItem key={path}>
              <Link to={path} onClick={onLinkClick}>{text}</Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </StyledMenu>
  );
};

export default Menu;
