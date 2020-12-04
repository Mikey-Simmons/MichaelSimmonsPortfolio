import React, {useState} from 'react';
import {
  Card, CardText, CardBody, Container, Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import app2 from './imgs/forsale.PNG';
import { AnimationWrapper } from 'react-hover-animation';
import forsale from './imgs/forsale.PNG';
import forsale2 from './imgs/forsale2.PNG';
import forsale3 from './imgs/forsale3.PNG';
import forsale4 from './imgs/forsale4.PNG';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const items = [
  {
    src: forsale,

  },
  {
    src: forsale2,

  },
  {
    src: forsale3,

  },
  {
    src: forsale4,

  },

];
const ForSale = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <Container>
      <Jumbotron>
        <AnimationWrapper>
          <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z" />
            <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg> 4Sale </h1>
        </AnimationWrapper>
        <Card>

        <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          <CardBody>
            <AnimationWrapper>
              <CardText className="text1">4Sale is a full-stack web application developed with Django.  Users can post items they want to sell, watch items they want to buy, and
              email other users to purchase items.  This app was developed by Blake Bonasera, Tia Li Fouroohi, and I during our time together at Coding Dojo.
              We used GitHub as a repository to collaborate with each other.
          </CardText>
            </AnimationWrapper>
            <AnimationWrapper>
              <CardLink className="linkcard" href="/projects">Go Back!</CardLink>
            </AnimationWrapper>
            <AnimationWrapper>
              <CardLink className="linkcard" href="/flatscreenguru">Next Project!</CardLink>
            </AnimationWrapper>
          </CardBody>
        </Card>
      </Jumbotron>
    </Container>
  );
};

export default ForSale;
