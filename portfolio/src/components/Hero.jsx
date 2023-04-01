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
  height: 100vh;
  scroll-snap-align: center;
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 35%;
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

const RightSide = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  height: 100vh;
  scroll-snap-align: center;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  animation: hero 1500ms infinite ease alternate;

  @keyframes hero {
    100% {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <LeftSide>
          <Title>Think.Make.Solve.</Title>
          <Subtitle>What We Do</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            elementum magna, eget vehicula neque. Morbi a turpis nec nulla
            gravida congue. Cras lobortis, enim id dapibus elementum, nunc augue
            condimentum nunc, at aliquet neque erat quis neque. Phasellus nisi
            lectus, porta a mattis gravida, imperdiet ut felis. Proin malesuada
            mi nec facilisis aliquet. Nulla interdum tortor non nibh molestie
            feugiat. Curabitur vel magna quis nulla laoreet volutpat. Maecenas
            quis vulputate neque, sed venenatis turpis. Sed scelerisque placerat
            massa, non pharetra velit mollis nec.
          </Description>
          <Button>Read More</Button>
        </LeftSide>
        <RightSide>
          <Img src="img/moon.png" />
        </RightSide>
      </Container>
    </Section>
  );
};

export default Hero;
