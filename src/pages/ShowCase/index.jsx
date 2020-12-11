import {
  React, useEffect, useState,
} from 'react';
import { Content } from 'antd/lib/layout/layout';
import Carousel from 'react-multi-carousel';
import ShowCaseVideo from '../../components/showCase/ShowCaseVideo';
import getVideos from '../../api/index';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ShowCase = () => {
  // eslint-disable-next-line no-unused-vars
  const [isHover, setIsHover] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getVideos();
      setVideos(response);
    };
    get();
  }, []);

  return (
    <Content style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>
      <Carousel
        responsive={responsive}
        infinite={false}
        swipeable
        // arrows={!isHover}
      >
        {videos.map((video) => (
          <div>
            <ShowCaseVideo
              src={video.url}
              title={video.title}
              author={video.author}
              view={video.view}
              createdAt={video.createdAt?.toString()}
              setHover={(val) => setIsHover(val)}
              id={video._id}
              key={video._id}
            />
          </div>
        ))}
      </Carousel>
    </Content>
  );
};

export default ShowCase;
