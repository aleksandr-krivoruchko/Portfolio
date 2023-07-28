import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 35%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 120vh;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  word-wrap: break-word;
  white-space: pre-wrap;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  font-size: 30px;
  color: #da0ea2;
  &::before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 5px;
    margin-right: 20px;
    vertical-align: middle;
    background-color: #da0ea2;
    border-radius: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    /* margin-bottom: 30px; */
  }
`;
export const Description = styled.p`
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    padding: 10px;
  }
`;

export const Button = styled.a`
  width: 200px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background-color: #da0ea2;
  }
`;

const RightSide = styled.div`
  position: relative;
  scroll-snap-align: center;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 80vh;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 22%;
  left: 22%;
  z-index: 5;
  width: 400px;
  height: auto;
  object-fit: contain;
  animation: hero 1500ms infinite ease alternate;

  @keyframes hero {
    100% {
      transform: translateY(30px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 250px;
    top: 15%;
    left: 22%;
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
            gravida congue.
          </Description>
          <Button href="#studio">Read More</Button>
        </LeftSide>
        <RightSide>
          <Img src="img/moon.png" />
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[20, 20, 5]} />
            <Sphere args={[1, 100, 200]} scale={2.3}>
              <MeshDistortMaterial
                attach="material"
                color="#5e1c69"
                distort={0.5}
                speed={2}
              />
            </Sphere>
            <MeshDistortMaterial />
          </Canvas>
        </RightSide>
      </Container>
    </Section>
  );
};

export default Hero;
