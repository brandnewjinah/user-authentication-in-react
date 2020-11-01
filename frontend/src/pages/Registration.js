import React, { useState } from "react";
import axios from "axios";

//import components
import InputField from "../components/InputField";

//import styles and assets
import styled from "styled-components";

const Registration = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    confirmpw: "",
  });

  const [errors, setErrors] = useState();

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
    if (account.password !== account.confirmpw) {
      errors.confirmpw = "Password does not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errormsg = validate();
    setErrors(errors || {});
    if (errors) return;
    postData();
  };

  const postData = async () => {
    const user = {
      email: account.email,
      password: account.password,
    };

    const registerUser = await axios.post(
      "http://localhost:5000/user/signup",
      user
    );
  };

  return (
    <Container>
      <Header>
        <h1>Register</h1>
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
          label="Password"
          name="password"
          type="password"
          value={account.password}
          error={errors && errors.password}
          handleChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          name="confirmpw"
          type="password"
          value={account.confirmpw}
          error={errors && errors.confirmpw}
          handleChange={handleChange}
        />
        <button>Register</button>
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

export default Registration;
