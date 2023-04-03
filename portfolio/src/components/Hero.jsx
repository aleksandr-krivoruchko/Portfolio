import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
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
  position: relative;
  height: 100vh;
  scroll-snap-align: center;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const CanvasStyled = styled.canvas``;

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
