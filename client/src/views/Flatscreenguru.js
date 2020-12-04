import React, {useState} from 'react';
import {
  Card, CardText, CardBody, Container,Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import flatscreen1 from './imgs/flatscreen.PNG';
import flatscreen2 from './imgs/flatscreen2.PNG';
import flatscreen3 from './imgs/flatscreen3.PNG';
import flatscreen4 from './imgs/flatscreen4.PNG';
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
        src: flatscreen1,

    },
    {
        src: flatscreen2,

    },
    {
        src: flatscreen3,

    },
    {
        src: flatscreen4,

    },
    
];
const Flatscreenguru = (props) => {
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
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tv" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
</svg> Flatscreenguru </h1>
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
          <CardText className="text1">Flatscreenguru is a full-stack web application developed with Django.
          I developed this application by myself, using Github as the repository.  
          Users can send a job request to the owner of the business and view photos of previous installations.
          

          </CardText>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/projects">Go Back!</CardLink>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/alieninvasion">Next Project!</CardLink>
          </AnimationWrapper>
        </CardBody>
      </Card>
      </Jumbotron>
    </Container>
  );
};

export default Flatscreenguru;
