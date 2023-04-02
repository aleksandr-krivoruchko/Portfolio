import React from "react";
import styled from "styled-components";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Contacts />
      {/* <Test /> */}
    </Container>
  );
};

export default App;
