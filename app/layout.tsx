import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import './globals.css';
import StyledComponentsRegistry from './registry';
import LayoutContainer from "./LayoutContainer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Form App',
  description: 'Migrated from React Router to Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <LayoutContainer>
            <Navigation />
            <main>{children}</main>
          </LayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
