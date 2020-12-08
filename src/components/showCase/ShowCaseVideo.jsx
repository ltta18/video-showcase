import { Button, Card } from "antd";
import { useRef, useState } from "react";
import { Player } from 'video-react';
import ControlBar from "video-react/lib/components/control-bar/ControlBar";
import { CaretRightOutlined, PauseOutlined, ForwardOutlined, BackwardOutlined } from '@ant-design/icons';
import './showcase.css';
import 'video-react/dist/video-react.css';
import { Link } from "react-router-dom";

const ShowCaseVideo = () => {
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
    <Link to="/films">
    <Card
      bordered={false}
      style={{ width: 200 }}
    >
      <Player
          autoPlay
          playsInline
          ref={player}
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
          <ControlBar className="showcase-player"/>
        </Player>
      <div className="py-3">
            {isPlay
            ? <PauseOutlined onClick={play} className="mr-3"/>
            : <CaretRightOutlined onClick={play} className="mr-3"/>
            }
        </div>
        <div className="pb-3">
          <BackwardOutlined onClick={() => changeCurrentTime(-10)} className="mr-3"/>
          <ForwardOutlined onClick={() => changeCurrentTime(10)} className="mr-3"/>
        </div>
        <div className="pb-3">
          <Button onClick={() => changeVolume(0.1)} className="mr-3">
            volume+=0.1
          </Button>
          <Button onClick={() => changeVolume(-0.1)} className="mr-3">
            volume-=0.1
          </Button>
          <Button onClick={() => setMuted(true)} className="mr-3">
            muted=true
          </Button>
          <Button onClick={() => setMuted(false)} className="mr-3">
            muted=false
          </Button>
        </div>
        {console.log(player)}
    </Card>
    </Link>
  );
}

export default ShowCaseVideo;
