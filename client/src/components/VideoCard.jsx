import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};

  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => (props.type === "sm" ? "flex" : "")};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  margin-left: ${(props) => props.type === "sm" && "12px"};
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${(props) => props.theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.textSoft};
`;

const VideoCard = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=1024x768"
          />
          <Texts>
            <Title>How to make money online?</Title>
            <ChannelName>Pradip Bedre</ChannelName>
            <Info>660,908 views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
