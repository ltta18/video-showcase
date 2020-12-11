import {
  React,
  useRef,
} from 'react';
import { Player } from 'video-react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import ReplayControl from 'video-react/lib/components/control-bar/ReplayControl';
import ForwardControl from 'video-react/lib/components/control-bar/ForwardControl';
import CurrentTimeDisplay from 'video-react/lib/components/time-controls/CurrentTimeDisplay';
import TimeDivider from 'video-react/lib/components/time-controls/TimeDivider';
import VolumeMenuButton from 'video-react/lib/components/control-bar/VolumeMenuButton';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import LoadingSpinner from 'video-react/lib/components/LoadingSpinner';
import PlayToggle from 'video-react/lib/components/control-bar/PlayToggle';
import 'video-react/dist/video-react.css';
import './index.css';

const VideoPlayer = () => {
  const player = useRef();

  const leave = () => {
    if (!player.current?.getState().player.paused) {
      const arrow = document.getElementsByClassName('back-arrow')[0];
      arrow?.classList.remove('back-arrow-hovered');
    }
  };

  const enter = () => {
    const arrow = document.getElementsByClassName('back-arrow')[0];
    arrow?.classList.add('back-arrow-hovered');
    setTimeout(() => leave(), 500);
    clearTimeout();
  };

  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined className="back-arrow" />
      </Link>
      <div
        style={{ height: '100%' }}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onMouseMove={enter}
        onClick={enter}
      >
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
          <ControlBar autoHide>
            <PlayToggle />
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
};

export default VideoPlayer;
