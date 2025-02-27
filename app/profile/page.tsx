'use client';

import ProfileComponent from '../components/Profile';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

export default function Profile() {
  return (
    <ProfileContainer>
      <Title>Registered Users</Title>
      <ProfileComponent />
    </ProfileContainer>
  );
}