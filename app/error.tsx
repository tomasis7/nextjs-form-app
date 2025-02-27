'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ErrorTitle = styled.h2`
  color: #e00;
  margin-bottom: 1rem;
`;

const ErrorText = styled.p`
  margin-bottom: 1.5rem;
`;

const ResetButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #0051a2;
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <ErrorTitle>Something went wrong!</ErrorTitle>
      <ErrorText>
        An error occurred while trying to display this page. Please try again.
      </ErrorText>
      <ResetButton onClick={reset}>
        Try again
      </ResetButton>
    </ErrorContainer>
  );
}