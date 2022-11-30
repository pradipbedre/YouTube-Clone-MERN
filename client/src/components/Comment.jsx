import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CommentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=1024x768" />
      <CommentDetails>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          unde et ullam praesentium dolorum rem quasi iste molestiae laudantium
          illo.
        </Text>
      </CommentDetails>
    </Container>
  );
};

export default Comment;
