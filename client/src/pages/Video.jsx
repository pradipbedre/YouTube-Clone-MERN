import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSuccess } from "../redux/videoSlice";
import { format } from "timeago.js";
import { like, dislike } from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";
/* ----------------------------------------------------------------------- */

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
  pointer: cursor;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  pointer: cursor;
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

/* ----------------------------------------------------------------------- */

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  /* ----------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState();
  /* ----------------------------------------------------------------------- */

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        console.log(videoRes.data.userId);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        console.log(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
        setChannel(channelRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [path, dispatch]);

  const handelLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handelDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handelSubscribe = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };
  console.log(channel);

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
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views} . {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handelLike}>
              {currentVideo.likes?.includes(currentUser._id) ? (
                <i class="fa-solid fa-thumbs-up"></i>
              ) : (
                <i class="fa-regular fa-thumbs-up"></i>
              )}

              {currentVideo.likes?.length}
            </Button>
            <Button onClick={handelDislike}>
              {currentVideo.dislikes?.includes(currentUser._id) ? (
                <i class="fa-solid fa-thumbs-down"></i>
              ) : (
                <i class="fa-regular fa-thumbs-down"></i>
              )}
              Dislike
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
            <Image src={channel && channel.img} />
            <ChannelDetails>
              <ChannelName>{channel && channel.name}</ChannelName>
              <ChannelCounter>
                {channel && channel.subscribedUsers.length} subscribers
              </ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe onClick={handelSubscribe}>
            {currentUser.subscribedUsers?.includes(channel && channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
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
