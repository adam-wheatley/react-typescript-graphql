import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import App from "./App";
import { client } from "./apolloClient";
import Globals from "./styles/Global";
import { theme } from "./styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <React.Fragment>
        <Normalize />
        <Globals />
        <App />
      </React.Fragment>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
