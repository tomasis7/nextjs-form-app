'use client';

import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: #e00;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

interface PasswordFieldProps {
  name: string;
  register: any;
  error?: string;
}

const PasswordField = ({ name, register, error }: PasswordFieldProps) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>Lösenord</Label>
      <Input id={name} type="password" {...register(name)} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default PasswordField;