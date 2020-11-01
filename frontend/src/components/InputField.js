import React from "react";

//import styles and assets
import styled from "styled-components";

const InputField = ({ error, label, name, type, value, handleChange }) => {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      <Input name={name} type={type} value={value} onChange={handleChange} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 1em;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 0.25em;
  padding: 0.75em;
  margin: 0.5em 0 0 0;
`;

const Error = styled.p`
  font-size: 0.875rem;
  color: red;
  margin-top: 0.25em;
`;

export default InputField;
