import React, { useState } from "react";
import axios from "axios";

//import components
import InputField from "../components/InputField";

//import styles and assets
import styled from "styled-components";

const Registration = () => {
  const [account, setAccount] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const postData = async () => {
    const obj = {
      name: account.name,
      email: account.username,
      password: account.password,
    };
    const regUser = await axios.post("http://localhost:3900/api/users", obj);
  };

  const validate = () => {
    const errors = {};
    if (account.name === "") {
      errors.name = "Name is required";
    }
    if (account.username === "") {
      errors.username = "Username is required";
    }
    if (account.password === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    //call server
    postData();
  };

  const validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") {
        return "Name is required";
      }
    }
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
      if (value.length <= 3) {
        return "Password must be more than 3 characters";
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const newerrors = { ...errors };
    const errorMessage = validateProperty(input);
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

  return (
    <Container>
      <Header>
        <h1>Create Account</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputField
          error={errors.name}
          name="name"
          value={account.name}
          label="Name"
          type="text"
          handleChange={handleChange}
        />
        <InputField
          error={errors.username}
          name="username"
          value={account.username}
          label="Username"
          type="text"
          handleChange={handleChange}
        />
        <InputField
          error={errors.password}
          name="password"
          value={account.password}
          label="Password"
          type="password"
          handleChange={handleChange}
        />
        <button disabled={validate()}>Register</button>
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
