import React, { useState } from 'react'
import {
  Card, CardText, CardBody, Container,Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import app1 from './imgs/appconnect.PNG';
import app2 from './imgs/appconnect2.PNG';
import app3 from './imgs/appconnect3.PNG';
import { AnimationWrapper } from 'react-hover-animation';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: app1,

    },
    {
        src: app2,

    },
    {
        src: app3,

    },
    
];
const AppConnect = (props) => {
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
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg> Apartment Connect!</h1>
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
          <CardText className="text1">Apartment Connect is a full stack web application developed with MongoDB, Express, ReactJs, and NodeJs.
              Users can submit repair requests for their apartment as well as scheduele times for the gym.  Maintenance workers can see all repairs that need to be done.
              This was a group project developed by Blake Bonasera, Harold Danks, Nathaniel Burge, and I. The application was deployed via AWS and EC2.
          </CardText>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/projects">Go Back!</CardLink>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="http://ec2-18-218-231-53.us-east-2.compute.amazonaws.com/">Apartment Connect!</CardLink>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/4sale">Next Project!</CardLink>
          </AnimationWrapper>
        </CardBody>
      </Card>
      </Jumbotron>
    </Container>
  );
};

export default AppConnect;
