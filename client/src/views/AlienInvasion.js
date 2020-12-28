import React from 'react';
import {
  Card, CardText, CardBody, Container,Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import vid from './imgs/alien.mp4';
import { AnimationWrapper } from 'react-hover-animation';

const AlienInvasion = (props) => {
  return (
    <Container>
        <Jumbotron>
            <AnimationWrapper>
        <h1 className="display-3"><svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg> Alien Invasion </h1>
</AnimationWrapper>

      <Card>
          <video  controls>
              <source src ={vid} type="video/mp4"></source>

          </video>
        
        
        <CardBody>
            <AnimationWrapper>
          <CardText className="text1">Alien Invasion is my take on the classic game Space Invaders! I developed it using pygame with Python.  
          The game gets increasingly difficult as you progress and there is a scoring system as well as a highscore.  
          </CardText>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/projects">Go Back!</CardLink>
          </AnimationWrapper>
          <AnimationWrapper>
          <CardLink className="linkcard" href="/puppyland">Next Project</CardLink>
          </AnimationWrapper>
          
          
        </CardBody>
      </Card>
      </Jumbotron>
    </Container>
  );
};

export default AlienInvasion;
