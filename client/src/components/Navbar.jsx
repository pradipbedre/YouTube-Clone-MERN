import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: flex-end;
  position: relative;
`;
const SearchContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 3px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search" />
          <i class="fa-solid fa-magnifying-glass" />
        </SearchContainer>
        <Button>
          <i class="fa-solid fa-circle-user" /> Sign in
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
