import React from 'react';
import {
  Card, CardText, CardBody, Container,Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import app2 from './imgs/forsale.PNG';
import { AnimationWrapper } from 'react-hover-animation';

const ForSale = (props) => {
  return (
    <Container>
        <Jumbotron>
            <AnimationWrapper>
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
  <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg> 4Sale </h1>
</AnimationWrapper>
      <Card>
        
        <img width="100%" src={app2} alt="Card image cap" />
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
