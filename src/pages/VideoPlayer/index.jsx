import { Button, Card } from "antd";
import { useRef, useState } from "react";
import { Player } from 'video-react';
import ControlBar from "video-react/lib/components/control-bar/ControlBar";
import { CaretRightOutlined, PauseOutlined, ForwardOutlined, BackwardOutlined } from '@ant-design/icons';
import 'video-react/dist/video-react.css';
import ReplayControl from "video-react/lib/components/control-bar/ReplayControl";
import ForwardControl from "video-react/lib/components/control-bar/ForwardControl";
import CurrentTimeDisplay from "video-react/lib/components/time-controls/CurrentTimeDisplay";
import TimeDivider from "video-react/lib/components/time-controls/TimeDivider";
import VolumeMenuButton from "video-react/lib/components/control-bar/VolumeMenuButton";

const VideoPlayer = () => {
  const player = useRef();
  const [isPlay, setIsPlay] = useState(true)

  const setMuted = muted => {
    player.muted = muted;
  }

  const handleStateChange = state => {
    // copy player state to this component's state
    player.current = state
  }

  const play = () => {
    isPlay ? player.current.actions.pause() : player.current.actions.play();
    setIsPlay(!isPlay);
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

  return (
      <Player
          autoPlay
          playsInline
          ref={player}
          className="video-player"
          height='100%'
          fluid={false}
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
          <ControlBar autoHide={true} autoPlay>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton />
        </ControlBar>
        </Player>
  );
}

export default VideoPlayer;
