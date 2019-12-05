import { ReactElement } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

export const Navbar = styled(Grid.Unit)`
    background: ${p => p.theme.secondaryColor};
    color: ${p => p.theme.white};
    padding: 20px 20px 20px 0;
    font-size: 1.5rem;
`;

export const Right = styled(Grid.Unit)`
    display: ${props => props.size === 0 ? 'none' : 'auto'};
    float: right;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

interface NavItemProps { 
    border?: boolean;
    marginRight?: boolean;
    paddingTop?: String;
    children: ReactElement;
}

export const NavItem = styled.li<NavItemProps>`
    display: inline;
    padding-left: 25px;
    ${props => props.border ? `
        border-left: 1px solid ${props.theme.primaryColor};
        padding-left: 25px;
    ` : ''};
    margin-right: ${({ marginRight }) => marginRight ? '25px' : 'auto'};
    padding-top: ${({ paddingTop }) => paddingTop ? `${paddingTop}` : '12.5px'};
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.white};
`;

export const NavLogo = styled.a`
    float: left;
    padding: 12.5px 0;
`;

export const Button = styled.button`
    background: ${p => p.theme.primaryColor};
    color: ${p => p.theme.white};
    border: 0;
    font-size: 1.25rem;
    padding: 15px 25px;
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: ${p => p.theme.boxShadow(p.theme.primaryColor)};
    cursor: pointer;
    transition: all 1s ease;

    &:hover {
        box-shadow: inset 0 0px 0 #a21878;
    }
`;