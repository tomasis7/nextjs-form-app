'use client';

import FormComponent from '../components/Form';
import styled from 'styled-components';

const FormPage = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

export default function Form() {
  return (
    <FormPage>
      <Title>Register New User</Title>
      <FormComponent />
    </FormPage>
  );
}