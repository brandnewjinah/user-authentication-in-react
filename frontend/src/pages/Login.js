import React, { useState } from "react";

//import components
import InputField from "../components/InputField";

//import styles and assets
import styled from "styled-components";
import axios from "axios";

const Login = (props) => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const validate = () => {
    const errors = {};
    if (!account.email.match(/@/)) {
      errors.email = "Not a valid email address";
    }
    if (account.email === "") {
      errors.email = "Email address is required";
    }
    if (!account.password.match(/.{8}/)) {
      errors.password = "Password must be at least 8 characters long";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errormsg = validate();
    setErrors(errormsg);
    if (errors) return;
    logUser();
  };

  const logUser = async () => {
    const user = {
      email: account.email,
      password: account.password,
    };
    const { data: jwt } = await axios.post(
      "http://localhost:5000/user/login",
      user
    );
    console.log(jwt);
    localStorage.setItem("token", jwt.token);
    props.history.push("/home");
  };

  return (
    <Container>
      <Header>
        <h1>Login</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          name="email"
          type="text"
          value={account.email}
          error={errors && errors.email}
          handleChange={handleChange}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          value={account.password}
          error={errors && errors.password}
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
