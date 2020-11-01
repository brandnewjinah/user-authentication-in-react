import React from "react";

//import styles and assets
import styled from "styled-components";

const InputField = ({
  error,
  label,
  name,
  type,
  value,
  handleChange,
  handlePassword,
}) => {
  return (
    <Container>
      <Label>
        <label htmlFor="">{label}</label>
        {name === "password" && type === "password" ? (
          <Show onClick={handlePassword}>
            <i className="fa fa-eye"></i>
            <span style={{ marginLeft: "0.3em" }}>show</span>
          </Show>
        ) : name === "password" && type === "text" ? (
          <Show onClick={handlePassword}>
            <i className="fa fa-eye-slash"></i>
            <span style={{ marginLeft: "0.3em" }}>hide</span>
          </Show>
        ) : null}
      </Label>

      <Input
        className={error ? "error" : null}
        // className="error"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 1em;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const Show = styled.div`
  color: ${(props) => props.theme.color.green};
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 0.25em;
  padding: 0.75em;
  margin: 0.5em 0 0 0;

  &.error {
    border: 2px solid ${(props) => props.theme.color.red};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.green};
  }
`;

const Error = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.red};
  font-weight: bold;
  margin-top: 0.25em;
`;

export default InputField;
