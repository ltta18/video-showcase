import { React, useRef } from 'react';
import {
  Card,
} from 'antd';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import 'video-react/dist/video-react.css';
// eslint-disable-next-line import/no-unresolved
import './showcase.css';

const ShowCaseVideo = () => {
  const player = useRef();

  const play = () => {
    player.current.actions.play();
  };

  const stop = () => {
    player.current.actions.pause();
  };

  return (
    <Link to="/films" style={{ width: 'fit-content' }}>
      <Card
        bordered={false}
        className="showcase-card"
        style={{ width: 200 }}
        onMouseEnter={play}
        onMouseLeave={stop}
      >
        <Player
          playsInline
          ref={player}
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <ControlBar className="showcase-player" />
        </Player>
        <div>
          <div className="video-title">Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)</div>
          <div className="video-author">Pink Sweats</div>
          <div className="video-subInfo">699K views • 1 year ago</div>
        </div>
      </Card>
    </Link>
  );
};

export default ShowCaseVideo;
