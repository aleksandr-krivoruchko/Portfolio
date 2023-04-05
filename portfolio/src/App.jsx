import React from "react";
import styled from "styled-components";
import { Context } from "./context";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Works from "./components/Works";

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
  const [loopInput, setLoopInput] = React.useState(null);
  return (
    <Context.Provider value={{ loopInput, setLoopInput }}>
      <Container>
        <Hero />
        <About />
        <Works />
        <Contacts />
      </Container>
    </Context.Provider>
  );
};

export default App;
