import React from "react";
import { UpdateAccountForm } from "../../forms/UpdateAccount";
import { Wrapper, Title, Container } from '../../styles/PageStyles';

const Account = () => (
  <Wrapper>
    <Title>My Account</Title>
    <Container>
      <UpdateAccountForm />
    </Container>
  </Wrapper>
);

export default Account;
