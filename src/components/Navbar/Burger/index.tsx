import React from "react";
import styled from "styled-components";

interface StyledBurgerProps {
  open?: boolean;
}
const StyledBurger = styled.button<StyledBurgerProps>`
  float: right;
  position: absolute;
  top: 30px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${p => p.theme.primaryColor};
    border-radius: ${p => p.theme.borderRadius};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
    open: boolean;
    setOpen: Function;
}

const Burger: React.FC<Props> = ({ open, setOpen }) => {
  const [canUpdate, setCanUpdate] = React.useState(true);
  React.useEffect(() => {
    setCanUpdate(false)
    setTimeout(() => setCanUpdate(true), 100);
  }, [open]);

  return (
    <StyledBurger open={open} onClick={() => {
        if (canUpdate) setOpen(!open);
    }}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
