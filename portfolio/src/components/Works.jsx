import React from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Illustration from "./Illustration";
import ProductDesign from "./ProductDesign";
import SocialMedia from "./SocialMedia";

const works = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

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
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 50%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const List = styled.ul``;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px white;
  margin-bottom: 20px;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: whitesmoke;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: text 500ms linear both;

      @keyframes text {
        to {
          width: 100%;
        }
      }
    }
  }
`;

function setModel(work) {
  let comp = <WebDesign />;
  switch (work) {
    case "Web Design":
      comp = <WebDesign />;
      break;
    case "Development":
      comp = <Development />;
      break;
    case "Illustration":
      comp = <Illustration />;
      break;
    case "Product Design":
      comp = <ProductDesign />;
      break;
    case "Social Media":
      comp = <SocialMedia />;
      break;

    default:
      break;
  }
  return comp;
}

const Works = () => {
  const [work, setWork] = React.useState("WebDesign");
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {works.map((item) => (
              <ListItem text={item} key={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{setModel(work)}</Right>
      </Container>
    </Section>
  );
};

export default Works;
