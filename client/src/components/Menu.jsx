import React from "react";
import styled from "styled-components";
import logo from "../img/Youtube.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.bgLighter};
  height: 100vh;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 5px 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
  &:hover {
    background-color: ${(props) => props.theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${(props) => props.theme.soft}; ;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 30px;
  cursor: pointer;
  border-radius: 3px;
`;

const Logo = styled.div`
  display:inline-block:
  align-items: center;
  gap: 5px;
  font-weight:bold;
  margin-bottom: 25px;
  margin-top:10px;
`;

const Img = styled.img`
  height: 25px;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <Img src={logo} />
          </Logo>
        </Link>
        <Item>
          <i class="fa-solid fa-house" />
          Home
        </Item>
        <Link to="trend" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <i class="fa-regular fa-compass" />
            Explore
          </Item>
        </Link>
        <Link
          to="subscription"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <i class="fa-brands fa-youtube" />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <i class="fa-sharp fa-solid fa-record-vinyl"></i>
          Library
        </Item>
        <Item>
          <i class="fa-solid fa-clock-rotate-left"></i>
          History
        </Item>
        <Hr />
        <Login>
          Signin in to like video, comment, and subscribe
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <i class="fa-solid fa-circle-user" /> Sign in
            </Button>
          </Link>
        </Login>
        <Title>Best Of Youtube</Title>
        <Item>
          <i class="fa-solid fa-music"></i>
          Music
        </Item>
        <Item>
          <i class="fa-solid fa-medal"></i>
          Sports
        </Item>
        <Item>
          <i class="fa-solid fa-gamepad"></i>
          Gaming
        </Item>
        <Item>
          <i class="fa-solid fa-film"></i>
          Movies
        </Item>
        <Item>
          <i class="fa-solid fa-newspaper"></i>
          News
        </Item>
        <Item>
          <i class="fa-sharp fa-solid fa-tv"></i>
          Live
        </Item>
        <Hr />
        <Item>
          <i class="fa-solid fa-gear"></i>
          Settings
        </Item>
        <Item>
          <i class="fa-regular fa-flag"></i>
          Report
        </Item>
        <Item>
          <i class="fa-regular fa-square"></i>
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <i class="fa-regular fa-lightbulb"></i>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
