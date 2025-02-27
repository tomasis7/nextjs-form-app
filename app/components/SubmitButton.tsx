'use client';

import styled from "styled-components";

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0051a2;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface SubmitButtonProps {
  text: string;
  disabled?: boolean;
}

const SubmitButton = ({ text, disabled }: SubmitButtonProps) => {
  return <Button type="submit" disabled={disabled}>{text}</Button>;
};

export default SubmitButton;