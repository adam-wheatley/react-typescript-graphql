import styled from "styled-components";
import Grid from 'styled-components-grid';

export const Wrapper = styled.div`
  padding: 50px 0;
  margin: 10px;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Title = styled.h1<any>`
  margin: 0 10px;
  ${p => p.center && `
    text-align: center;
  `}
`;

export const Container = styled(Grid)`
  background: ${p => p.bg ? p.bg : p.theme.white};
  padding: ${p => p.p ? p.p : '25px'};
  margin: ${p => p.m ? p.m : '25px 10px'};
  border-radius: ${p => p.theme.borderRadius};
  text-align: left;
  box-shadow: ${p => p.bs ? p.bs : p.theme.boxShadow(p.theme.white)};
  ${p => p.mw && `
    max-width: ${p.mw};
  `};
`;
