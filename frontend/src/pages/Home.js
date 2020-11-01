import React, { useState } from "react";
import axios from "axios";

//import components
import InputField from "../components/InputField";

//import styles and assets
import styled from "styled-components";

const Loggedin = () => {
  return (
    <Container>
      <Header>
        <h1>Home</h1>
      </Header>
      <Main>
        <p>You're logged in</p>
        <div className="logout">Logout</div>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin: 3em 0;

  h1 {
    font-size: 2.5rem;
  }
`;

const Main = styled.main`
  .logout {
    text-decoration: underline;
    margin: 2em 0;
  }
`;

export default Loggedin;
