import styled from 'styled-components'
import { Form } from "formik";
import Grid from 'styled-components-grid';

export const SubmitError = styled.p`
    padding: 5px;
    margin: 0 0 15px 0;
    color: ${p => p.theme.primaryColor};
`;

export const FormButton = styled.button`
    display: block;
    background: ${p => p.theme.primaryColor};
    color: #Fff;
    border: 0;
    font-size: 1.25rem;
    padding: 15px 25px;
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: ${p => p.theme.boxShadow(p.theme.primaryColor)};

    cursor: pointer;
    transition: all 1s ease;
    margin-bottom: 15px;

    &:disabled {
        cursor: not-allowed;
    }

    ${p => !p.disabled ? `
        &:hover {
            box-shadow: inset 0 0px 0 #a21878;
        }
    ` : ''};
`;

export const Label = styled.label`
  line-height: 2.5;
  display: block;
`;

export const Col = styled<any>(Grid.Unit)`
  padding: ${({ padding }) => (padding ? padding : "5px")};
`;

export const StyledFormik = styled(Form)`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin: 0 5px;
`;

export const Message = styled.a`
    text-decoration: none;
    color: ${p => p.theme.primaryColor};
`;