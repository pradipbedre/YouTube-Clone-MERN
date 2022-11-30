import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh-56px);
  color: ${(props) => props.theme.text};
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh-56px);
  background-color: ${(props) => props.theme.bgLighter};
  border: 1px solid ${(props) => props.theme.soft};
  padding: 20px 50px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  margin: 10px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => props.theme.soft};
  color: ${(props) => props.theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${(props) => props.theme.textSoft};
  margin-top: 10px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Link = styled.div`
  margin-left: 30px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>Sign in to your account</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Title>Sign up</Title>
        <Input placeholder="username" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
