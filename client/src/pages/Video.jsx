import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess } from "../redux/videoSlice";
import { format } from "timeago.js";

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
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  /* ----------- */
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});

  /* ------------- */

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(`/users/find/${videoRes.userId}`);
        console.log("from video: ", videoRes.data);

       
      } catch (error) {
        console.log("video error", error);
      }
    };
    fetchVideos();
  }, [path]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/Lk5IyKDW1XI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title></Title>
        <Details>
          <Info>
            {/*   {currentVideo.views} views {format(currentVideo.createdAt)} */}
          </Info>
          <Buttons>
            <Button>
              <i class="fa-regular fa-thumbs-up"></i>
              {/* {currentVideo.like?.length} */}
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
            <Image src={channel.img} />
            <ChannelDetails>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers}</ChannelCounter>
              <Description></Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recommended>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
      </Recommended> */}
    </Container>
  );
};

export default Video;
