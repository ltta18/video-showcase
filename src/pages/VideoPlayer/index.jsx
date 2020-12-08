import { Button, Card } from "antd";
import { useEffect, useRef, useState } from "react";
import { Player, playerReducer } from 'video-react';
import ControlBar from "video-react/lib/components/control-bar/ControlBar";
import { ArrowLeftOutlined, PauseOutlined, ForwardOutlined, BackwardOutlined } from '@ant-design/icons';
import 'video-react/dist/video-react.css';
import ReplayControl from "video-react/lib/components/control-bar/ReplayControl";
import ForwardControl from "video-react/lib/components/control-bar/ForwardControl";
import CurrentTimeDisplay from "video-react/lib/components/time-controls/CurrentTimeDisplay";
import TimeDivider from "video-react/lib/components/time-controls/TimeDivider";
import VolumeMenuButton from "video-react/lib/components/control-bar/VolumeMenuButton";
import './index.css';
import BigPlayButton from "video-react/lib/components/BigPlayButton";
import LoadingSpinner from "video-react/lib/components/LoadingSpinner";

const VideoPlayer = () => {
  const player = useRef();

  const setMuted = muted => {
    player.muted = muted;
  }

  const handleStateChange = state => {
    // copy player state to this component's state
    player.current = state
  }

  const play = () => {
    player.current.actions.play();
  }

  const changeCurrentTime = seconds => {
    const { currentTime } = player.current.video.video;
    player.current.actions.seek(currentTime + seconds);
  }

  const seek = (seconds) => {
    player.current.actions.seek(seconds);
  }

  const changeVolume = (steps) => {
    const { volume } = player.current.video.video;
    player.current.video.video.volume = volume + steps;
  }

  // useEffect(() => {
  //   player && play();
  // }, [])

  return (
    <>
      <ArrowLeftOutlined
        className="back-arrow"
      />
      <Player
          ref={player}
          className="video-player"
          fluid={false}
          autoPlay
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <LoadingSpinner />
          <BigPlayButton position="center" />
          <ControlBar autoHide={true}>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
    </>
  );
}

export default VideoPlayer;
