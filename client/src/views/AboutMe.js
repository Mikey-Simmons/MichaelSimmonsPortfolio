import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';
import mikey7 from './imgs/mikey7.jpg';
import mikey from './imgs/mikey.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const AboutMe = (props) => {
  return (


    <div className="blackout">
      
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>About Me</h1>
        <div className="about">

          

          <img src={mikey7} class="rounded mx-auto d-block" alt="Responsive image"></img>

          <p className="aboutme">I am a passionate African American web developer who loves learning new technologies and implementing them into real world solutions. My curiosity has driven me to become a lifelong learner. I started and finished an extremely difficult 14 week coding boot camp called Coding Dojo in the middle of the Covid-19 pandemic. Although it was challenging, I proved to myself that I can strive under extremely difficult circumstances and I gained an insane amount of technical knowledge. Having previously worked in sales, I love to work with people and prefer working in a team like environment. I'm an avid shoe collector and buying/selling shoes is another big passion of mine.
</p>

        </div>

        

      
    </div>
  )
}
export default AboutMe;