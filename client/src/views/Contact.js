import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';

const Contact = (props) => {
  return (
    <div>
      <Jumbotron>
      
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg> Contact Me!</h1>
        
        <ListGroup flush>
      <AnimationWrapper>
       <ListGroupItem className="listy"  tag="a" href="tel:+12064681060">(206)-468-1060</ListGroupItem></AnimationWrapper>
     
     <AnimationWrapper><ListGroupItem className="listy" tag="a" href="mailto: mikeysimmons425@gmail.com">mikeysimmons425@gmail.com</ListGroupItem></AnimationWrapper>
     <AnimationWrapper><ListGroupItem className="listy" tag="a" href="https://www.linkedin.com/in/michael-simmons-23491a160/">LinkedIn</ListGroupItem></AnimationWrapper>
     <AnimationWrapper>  <ListGroupItem className="listy" tag="a" href="https://github.com/Mikey-Simmons">Github</ListGroupItem></AnimationWrapper>
    </ListGroup>
    
          
        
      </Jumbotron>
    </div>
  );
};

export default Contact;