'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

const NavItem = styled.li<{ active: boolean }>`
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <Nav>
      <NavList>
        <NavItem active={pathname === '/'}></NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem active={pathname === '/form'}></NavItem>
          <Link href="/form">Registration</Link>
        </NavItem>
        <NavItem active={pathname === '/profile'}></NavItem>
          <Link href="/profile">Profile</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}