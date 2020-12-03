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
        <h1 className="display-3"> Apartment Connect!</h1>
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
        </CardBody>
      </Card>
      </Jumbotron>
    </Container>
  );
};

export default AppConnect;
