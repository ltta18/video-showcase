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

const ShowCaseVideo = ({
  src, title, author, view, create_at,
}) => {
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
          <source src={src} />
          <ControlBar className="showcase-player" />
        </Player>
        <div>
          <div className="video-title">{title}</div>
          <div className="video-author">{author}</div>
          <div className="video-subInfo">
            {view}
            {' '}
            views •
            {' '}
            {create_at}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ShowCaseVideo;
