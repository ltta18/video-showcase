import {
  useEffect,
  useRef,
  useState
} from "react";
import { Player } from 'video-react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ControlBar from "video-react/lib/components/control-bar/ControlBar";
import ReplayControl from "video-react/lib/components/control-bar/ReplayControl";
import ForwardControl from "video-react/lib/components/control-bar/ForwardControl";
import CurrentTimeDisplay from "video-react/lib/components/time-controls/CurrentTimeDisplay";
import TimeDivider from "video-react/lib/components/time-controls/TimeDivider";
import VolumeMenuButton from "video-react/lib/components/control-bar/VolumeMenuButton";
import BigPlayButton from "video-react/lib/components/BigPlayButton";
import LoadingSpinner from "video-react/lib/components/LoadingSpinner";
import 'video-react/dist/video-react.css';
import './index.css';
import PlayToggle from "video-react/lib/components/control-bar/PlayToggle";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const player = useRef();
  const [isPlay, setIsPlay] = useState(false);

  const play = () => {
    player.current.actions.play();
  }

  const click = () => {
    console.log(2)
  }

  const enter = () => {
    const player = document.getElementsByClassName('back-arrow')[0];
    player.classList.add('back-arrow-hovered');
    setTimeout(() => player.classList.remove('back-arrow-hovered'), 500);
    clearTimeout()
  }

  const leave = () => {
    const player = document.getElementsByClassName('back-arrow')[0];
    player.classList.remove('back-arrow-hovered');
  }

  useEffect(() => {
    // player && play();
    {console.log(player)}
  }, [])

  return (
    <>
    <Link to="/">
      <ArrowLeftOutlined
        className="back-arrow"
      />
      </Link>
      <div style={{height: '100%'}} onMouseEnter={enter} onMouseLeave={leave} onMouseMove={enter}>
      <Player
          ref={curPlayer => player.current = curPlayer ? curPlayer.manager : curPlayer}
          className="video-player"
          fluid={false}
          height="100%"
          autoPlay
          onClick={click}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <LoadingSpinner />
          <BigPlayButton position="center"/>
          <ControlBar autoHide={true}>
            <PlayToggle/>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
        </div>
    </>
  );
}

export default VideoPlayer;
