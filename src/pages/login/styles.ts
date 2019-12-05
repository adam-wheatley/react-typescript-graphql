import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 10px;
`;

export const Container = styled.div`
    max-width: 500px;
    background: ${p => p.theme.white};
    padding: 50px;
    margin: 50px auto 0;
    border-radius: ${p => p.theme.borderRadius};
    text-align: left;
    box-shadow: ${p => p.theme.boxShadow(p.theme.white, 0.2)};
`;

export const Signup = styled.div`
    background: ${p => p.theme.primaryColor};
    box-shadow: ${p => p.theme.boxShadow(p.theme.primaryColor)};
    border-radius: ${p => p.theme.borderRadius};
    padding: 25px 50px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    color: white;
    margin-top: 25px;
`;