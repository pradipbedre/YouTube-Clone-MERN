import React from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${(props) => props.theme.text};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${(props) => props.theme.textSoft};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Recommended = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textSoft};
  font-size: 13px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px, solid ${(props) => props.theme.textSoft};
  margin: 15px 0px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/Lk5IyKDW1XI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>How to make money online?</Title>
        <Details>
          <Info>660,908 views . 1 day ago</Info>
          <Buttons>
            <Button>
              <i class="fa-regular fa-thumbs-up"></i>123
            </Button>
            <Button>
              <i class="fa-regular fa-thumbs-down"></i>Dislike
            </Button>
            <Button>
              <i class="fa-solid fa-share"></i>Share
            </Button>
            <Button>
              <i class="fa-regular fa-floppy-disk"></i>Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=1024x768" />
            <ChannelDetails>
              <ChannelName>Pradip Bedre</ChannelName>
              <ChannelCounter>200k Subcriber</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                velit aspernatur sunt saepe assumenda quae dignissimos quos
                ducimus nulla quam!
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommended>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
      </Recommended>
    </Container>
  );
};

export default Video;
