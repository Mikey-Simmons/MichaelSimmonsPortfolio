import React from 'react';
import {
  Card, CardText, CardBody, Container,Jumbotron, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import app1 from './imgs/appconnect.PNG';
import { AnimationWrapper } from 'react-hover-animation';

const AppConnect = (props) => {
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
        
        <img width="100%" src={app1} alt="Card image cap" />
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
