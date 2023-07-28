import React from "react";
import styled from "styled-components";
import AnimatedCube from "./AnimatedCube";
import { Section, Container, Description, Subtitle, Button } from "./Hero";

const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 110vh;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  word-wrap: break-word;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const About = () => {
  return (
    <Section id="studio">
      <Container>
        <Left>
          <AnimatedCube />
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <Subtitle>Who we are</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            elementum magna, eget vehicula neque.
          </Description>
          <Button href="#works">See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
