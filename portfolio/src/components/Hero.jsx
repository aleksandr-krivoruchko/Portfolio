import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LeftSide = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const RightSide = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const Subtitle = styled.h3`
  font-size: 30px;
`;
const Description = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #da0ea2;
  }
`;

const Hero = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <LeftSide>
          <Title>Think.Make.Solve</Title>
          <Subtitle>What We Do</Subtitle>
          <Description>
            qweqwewqe eqw eqweqwe eqweqweqwe qweqweqwe w
          </Description>
          <Button>Read More</Button>
        </LeftSide>
        <RightSide>right</RightSide>
      </Container>
    </Section>
  );
};

export default Hero;
