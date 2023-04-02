import React from "react";
import styled from "styled-components";

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
`;
const List = styled.ul``;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px white;
  margin-bottom: 20px;
  position: relative;

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

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {works.map((item) => (
              <ListItem text={item} key={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>right</Right>
      </Container>
    </Section>
  );
};

export default Works;
