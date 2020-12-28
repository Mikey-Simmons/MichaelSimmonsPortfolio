import React, {useState} from 'react';
import {
  Card, CardText, CardBody, Container, Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import app2 from './imgs/forsale.PNG';
import { AnimationWrapper } from 'react-hover-animation';
import puppy1 from './imgs/puppy1.PNG';
import puppy2  from './imgs/puppy2.PNG';
import puppy3 from './imgs/puppy3.PNG';
import puppy4 from './imgs/puppy4.PNG';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const items = [
  {
    src: puppy1,

  },
  {
    src: puppy2,

  },
  {
    src: puppy3,

  },
  {
    src: puppy4,

  },

];
const PuppyLand = (props) => {
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
          <h1 className="display-3"> PuppyLand </h1>
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
              <CardText className="text1">PuppyLand is a full stack Django web application where users can buy inquire about buying a puppy and contact breeders.
              The app has Django admin functionality so the breeders could add dogs they want to sell, and edit all the dog's info.  Users have to fillout a questionaire to see if they are a right fit to purchase a puppy.  
          </CardText>
            </AnimationWrapper>
            <AnimationWrapper>
              <CardLink className="linkcard" href="/projects">Go Back!</CardLink>
            </AnimationWrapper>
            
          </CardBody>
        </Card>
      </Jumbotron>
    </Container>
  );
};

export default PuppyLand;
