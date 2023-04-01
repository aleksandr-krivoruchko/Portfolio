import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 74px;
  word-wrap: break-word;
`;
const Subtitle = styled.h3`
  font-size: 30px;
  &::before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 5px;
    margin-right: 20px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 20px;
  }
`;
const Description = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: #da0ea2;
  }
`;

const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  animation: hero 1500ms infinite ease alternate;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>{/* <Img src="img/moon.png" /> */}</Left>
        <Right>
          <Title>Think outside the square space</Title>
          <Subtitle>Who we are</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            elementum magna, eget vehicula neque.
          </Description>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
