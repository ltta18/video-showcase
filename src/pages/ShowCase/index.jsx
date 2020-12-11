import {
  React,
} from 'react';
import { Content } from 'antd/lib/layout/layout';
import Carousel from 'react-multi-carousel';
import ShowCaseVideo from '../../components/showCase/ShowCaseVideo';
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
    items: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
  },
};

const ShowCase = () => (
  <Content style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>
    <Carousel
      responsive={responsive}
      infinite={false}
      swipeable
    >
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
      <div>
        <ShowCaseVideo
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
          author="Pink Sweats"
          view="699K"
          createAt="1 year ago"
        />
      </div>
    </Carousel>
  </Content>
);

export default ShowCase;
