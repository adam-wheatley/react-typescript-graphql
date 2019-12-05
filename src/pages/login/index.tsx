import React from "react";
import { LoginForm } from "../../forms/Login";
import { Wrapper, Title } from "../../styles/PageStyles";
import { Container, Signup, Wrapper as LoginWrapper } from "./styles";

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Title center>Log in to your Account</Title>
      <LoginWrapper>
        <Container>
          <LoginForm />
        </Container>
        <Signup>
          Not got an account? Sign up <a href="/">here!</a>
        </Signup>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
