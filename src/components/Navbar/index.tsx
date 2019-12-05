import React, { useEffect } from "react";
import Grid from "styled-components-grid";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import Burger from "./Burger";
import {
  Navbar,
  NavLink,
  List,
  NavLogo,
  Right,
  NavItem,
  Button
} from "./styles";
import { publicLinks, privateLinks, Links } from "./navLinks";
import { RouterProps } from "react-router";
import useAuth from "../../context/authentication/useAuth";
import { useLogoutMutation } from "../../generated/graphql";
import { setAccessToken } from "../../accessToken";

const Nav: React.FC<RouterProps> = ({ history: { push } }) => {
  const [open, setOpen] = React.useState(false);
  const [links, setLinks] = React.useState<Links[]>([]);
  const [logout, { client }] = useLogoutMutation();
  const { isAuthenticated, updateAuth } = useAuth();
  const node = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLinks(isAuthenticated ? privateLinks : publicLinks);
  }, [isAuthenticated]);

  return (
    <Grid>
      <Navbar>
        <List>
          <NavLogo>App</NavLogo>
          <Right visible={{ xs: false, lg: true }}>
            {links.map(({ text, path, props }) => (
              <NavItem key={path} {...props}>
                <NavLink to={path}>{text}</NavLink>
              </NavItem>
            ))}
            {isAuthenticated ? (
              <NavItem paddingTop="0">
                <Button
                  onClick={async () => {
                    await logout();
                    setAccessToken("");
                    // await client!.resetStore();
                    updateAuth(false);
                    push('/');
                  }}
                >
                  Logout
                </Button>
              </NavItem>
            ) : (
              <NavItem paddingTop="0">
                <Button onClick={() => push("/sign-up")}>Sign Up</Button>
              </NavItem>
            )}
          </Right>
          <Grid.Unit visible={{ xs: true, lg: false }}>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} links={links} setOpen={setOpen} />
            </div>
          </Grid.Unit>
        </List>
      </Navbar>
    </Grid>
  );
};

export default withRouter(Nav);
