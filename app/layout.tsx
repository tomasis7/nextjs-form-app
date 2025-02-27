import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import './globals.css';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Form App',
  description: 'Migrated from React Router to Next.js',
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Container>
            <Navigation />
            <main>{children}</main>
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
