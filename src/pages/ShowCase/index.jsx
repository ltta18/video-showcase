import {
  React,
} from 'react';
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
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
    <div>
      <ShowCaseVideo
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        title="Pink Sweat$ & Crush - I Wanna Be Yours (In Studio)"
        author="Pink Sweats"
        view="699K"
        create_at="1 year ago"
      />
    </div>
  </Carousel>
);

export default ShowCase;
