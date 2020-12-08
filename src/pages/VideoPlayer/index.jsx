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

  const play = () => {
    player.current.actions.play();
  }

  useEffect(() => {
    player && play();
  }, [])

  useEffect(() => {
    if (player && player.current.manager.store.getState().paused) {
      console.log(2)
    }
  }, [player])

  return (
    <>
      <ArrowLeftOutlined
        className="back-arrow"
      />
      <Player
          ref={player}
          className="video-player"
          fluid={false}
          height="100%"
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
