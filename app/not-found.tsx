'use client';

import Link from 'next/link';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  margin-bottom: 1.5rem;
`;

const HomeLink = styled(Link)`
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    background-color: #0051a2;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>
        The page you are looking for does not exist or has been moved.
      </NotFoundText>
      <HomeLink href="/">
        Return to Home
      </HomeLink>
    </NotFoundContainer>
  );
}