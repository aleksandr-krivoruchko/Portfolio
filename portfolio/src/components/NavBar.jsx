import React from "react";
import styled from "styled-components";
import { Context } from "../context";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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

const Link = styled.a`
  color: #fff;
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

const Button = styled.a`
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
  const [loop, setLoop] = React.useState(false);
  const { loopInput, setLoopInput } = React.useContext(Context);

  return (
    <Section>
      <Container>
        <a href="">
          <Logo src="img/my-logo.png" />
        </a>
        <Links>
          <List>
            <ListItem>
              <Link href="#home">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#studio">Studio</Link>
            </ListItem>
            <ListItem>
              <Link href="#works">Works</Link>
            </ListItem>
            <ListItem>
              <Link href="#contacts">Contacts</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          {loop ? (
            <input
              style={{
                marginRight: "20px",
                cursor: "pointer",
                outline: "none",
              }}
              type="text"
              placeholder="your name"
              autoFocus={true}
              value={loopInput}
              onChange={(e) => setLoopInput(e.target.value)}
            />
          ) : (
            <Icon src="img/search.png" onClick={() => setLoop(true)} />
          )}
          <Button href="#contacts" onClick={() => setLoop(false)}>
            Hire now
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;
