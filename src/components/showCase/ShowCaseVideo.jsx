import {
  React, useEffect, useRef, useState,
} from 'react';
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
  src, title, author, view, createdAt, setHover, id,
}) => {
  const player = useRef();
  const [duration, setDuration] = useState();

  const play = () => {
    player.current.actions.play();
    setHover(true);
  };

  const stop = () => {
    player.current.actions.pause();
    setHover(false);
  };

  useEffect(() => {
    const film = document.getElementById(id).getElementsByTagName('video')[0];
    if (!Number.isNaN(film.duration)) setDuration(true);
  }, [player]);

  return (
    <Link to={`/films/${id}`} className="showcase-card-container">
      <Card
        bordered={false}
        className="showcase-card"
        style={{ width: 200, position: 'relative' }}
        onMouseEnter={play}
        onMouseLeave={stop}
        id={id}
      >
        <Player
          playsInline
          ref={player}
          style={{ position: 'relative' }}
        >
          <source src={src} />
          <div className="showcase-duration">{!Number.isNaN(duration) && duration}</div>
          <ControlBar className="showcase-player" />
        </Player>
        <div className="video-body-container">
          <div className="video-body">
            <div className="video-title">{title}</div>
            <div className="video-author">{author}</div>
            <div className="video-subInfo">
              {view}
              {' '}
              views •
              {' '}
              {createdAt}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

ShowCaseVideo.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  setHover: PropTypes.func.isRequired,
};

export default ShowCaseVideo;
