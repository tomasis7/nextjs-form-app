import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const RootLayout = () => {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default RootLayout;
