import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 400;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
`;
const Message = styled.textarea`
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
`;
const SubmitBtn = styled.button`
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

const Right = styled.div`
  flex: 1;
`;

const Contacts = () => {
  return (
    <Section id="contacts">
      <Container>
        <Left>
          <Form>
            <Title>Contact us</Title>
            <Input name="name" type="text" required placeholder="Name" />
            <Input name="email" type="email" required placeholder="Email" />
            <Message
              name="message"
              type="text"
              placeholder="Write your message"
              rows={10}
            />
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contacts;
