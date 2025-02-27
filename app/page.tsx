import Link from 'next/link';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0051a2;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to Next Form App</Title>
      <p>This app demonstrates form handling and user management with Next.js</p>
      <ButtonsContainer>
        <StyledLink href="/form">Register Now</StyledLink>
        <StyledLink href="/profile">View Profiles</StyledLink>
      </ButtonsContainer>
    </HomeContainer>
  );
}
