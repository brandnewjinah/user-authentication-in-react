import React, { useState } from "react";
import { Link } from "react-router-dom";

//import components
import InputField from "../components/Mailchimp_input";

//import styles and assets
import styled from "styled-components";

const Mailchimp_reg = () => {
  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [hidepw, setHidepw] = useState(true);
  const [checked, setChecked] = useState(false);

  const handlePassword = () => {
    setHidepw(!hidepw);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const validate = () => {
    const errors = {};
    if (!account.email.match(/@/)) {
      errors.email = "Email must";
    }
    if (account.username === "") {
      errors.username = "Username req.";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
  };

  return (
    <Container>
      <ErrorBox>
        <p>Please check your entry and try again</p>
      </ErrorBox>
      <Header>
        <h1>Welcome to Mailchimp</h1>
        <p>
          Find your people. Engage your customers. Build your brand. Do it all
          with Mailchimp’s Marketing Platform. Already have an account?
          <Link style={{ textDecoration: "none", color: "#007c89" }}>
            {" "}
            Log in
          </Link>
        </p>
      </Header>

      <form onSubmit={handleSubmit}>
        <InputField
          name="email"
          label="Email"
          type="text"
          error={errors.email}
          value={account.email}
          handleChange={handleChange}
        />
        <InputField
          name="username"
          label="Username"
          type="text"
          error={errors.username}
          value={account.username}
          handleChange={handleChange}
        />
        <InputField
          name="password"
          label="Password"
          type={hidepw ? "password" : "text"}
          value={account.password}
          handlePassword={handlePassword}
          handleChange={handleChange}
        />

        {account.password.match(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/
        ) ? (
          <PasswordGood>
            <i className="fa fa-check-circle-o"></i>
            <p style={{ marginLeft: "0.5em" }}>
              Your password is secure and you're all set!
            </p>
          </PasswordGood>
        ) : (
          <PasswordHints>
            <div>
              <ul>
                <li
                  className={
                    account.password.match(/(?=.*[a-z])/) ? "pw-comp" : "pw-req"
                  }
                >
                  One lowercase character
                </li>
                <li
                  className={
                    account.password.match(/(?=.*[A-Z])/) ? "pw-comp" : "pw-req"
                  }
                >
                  One uppercase character
                </li>
                <li
                  className={
                    account.password.match(/(?=.*\d)/) ? "pw-comp" : "pw-req"
                  }
                >
                  One number
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li
                  className={
                    account.password.match(/(?=.*[!@#$%^&*])/)
                      ? "pw-comp"
                      : "pw-req"
                  }
                >
                  One special character
                </li>
                <li
                  className={
                    account.password.match(/.{8,}/) ? "pw-comp" : "pw-req"
                  }
                >
                  8 characters minimum
                </li>
              </ul>
            </div>
          </PasswordHints>
        )}

        <Offers>
          <input
            type="checkbox"
            checked={checked}
            id="offers"
            onClick={handleCheck}
          />
          <label htmlFor="offers">
            I don't want to receive emails about new Mailchimp products, best
            practices, or special offers
          </label>
        </Offers>
        <Button>Sign Up</Button>
      </form>
      <p>
        By clicking the "Sign Up" button, you are creating a Mailchimp account,
        and you agree to Mailchimp's Terms of Use and Privacy Policy.
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 66%;
  max-width: 600px;
  margin: 4em auto;

  p,
  li,
  label {
    font-size: 0.75rem;
  }
`;

const ErrorBox = styled.div`
  background-color: ${(props) => props.theme.color.pink};
  padding: 1em 1em;
  margin-bottom: 1.5em;
`;

const Header = styled.header`
  margin-bottom: 3em;

  h1 {
    font-family: "Lora", serif;
    font-weight: normal;
    font-size: 2.25rem;
    margin-bottom: 0.25em;
  }
  p {
    font-size: 0.875rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme.color.black};
  }
`;

const PasswordHints = styled.div`
  display: flex;

  div {
    flex-grow: 1;
    margin: 1em 0 1.5em;
  }

  ul {
    list-style: none;

    li {
      line-height: 1.25rem;
    }

    .pw-comp {
      color: #b0b0b0;

      &:before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 0.53em;
        background-color: #b0b0b0;
        margin-right: 0.65em;
      }
    }

    .pw-req {
      &:before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 0.5em;
        background-color: #007c89;
        margin-right: 0.65em;
      }
    }
  }
`;

const PasswordGood = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.mint};
  padding: 0.75em 1em;
  p {
    font-weight: bold;
  }
`;

const Offers = styled.div`
  display: flex;
  margin: 2em 0;

  label {
    margin-left: 1em;
  }
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.color.green};
  color: white;
  padding: 0.875em;
  cursor: pointer;

  &:active {
    background-color: #00636e;
  }

  &:disabled {
    background-color: #c2c2c2;
  }
`;

export default Mailchimp_reg;
