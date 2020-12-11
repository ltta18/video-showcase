import { React, useRef } from 'react';
import PropTypes from 'prop-types';
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
  src, title, author, view, createAt,
}) => {
  const player = useRef();

  const play = () => {
    player.current.actions.play();
  };

  const stop = () => {
    player.current.actions.pause();
  };

  return (
    <Link to="/films" className="showcase-card-container">
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
        <div style={{ position: 'relative' }}>
          <div className="video-body">
            <div className="video-title">{title}</div>
            <div className="video-author">{author}</div>
            <div className="video-subInfo">
              {view}
              {' '}
              views •
              {' '}
              {createAt}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

ShowCaseVideo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  createAt: PropTypes.string.isRequired,
};

export default ShowCaseVideo;
