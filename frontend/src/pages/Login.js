import React, { useState } from "react";

//import components
import InputField from "../components/InputField";

//import styles and assets
import styled from "styled-components";

const Login = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateEach = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
      if (value.length <= 4) {
        return "Password must be more than 4 characters";
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const newerrors = { ...errors };
    const errorMessage = validateEach(input);
    if (errorMessage) {
      newerrors[input.name] = errorMessage;
    } else {
      delete newerrors[input.name];
    }
    setErrors(newerrors);

    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header>
        <h1>Login</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputField
          name="username"
          type="text"
          label="Username"
          value={account.username}
          error={errors.username}
          handleChange={handleChange}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          value={account.password}
          error={errors.password}
          handleChange={handleChange}
        />
        <button>Login</button>
      </Form>
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

const Form = styled.form`
  width: 100%;

  button {
    width: 100%;
    background-color: #3fccca;
    border: none;
    outline: none;
    border-radius: 0.25em;
    font-size: 1rem;
    color: #fff;
    padding: 1.25em 0;
    margin: 1em 0;
    cursor: pointer;
  }
`;

export default Login;
