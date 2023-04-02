import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;
const Links = styled.div`
  display: flex;
  justify-content: space-around;
`;
const List = styled.ul`
  display: flex;
  gap: 30px;
`;
const ListItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.img`
  height: 20px;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
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

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Logo src="img/logo.png" />
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contacts</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;
