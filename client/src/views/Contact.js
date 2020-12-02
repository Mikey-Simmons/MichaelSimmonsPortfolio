import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';

const Contact = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Contact Me</h1>
        
        <ListGroup flush>
      <ListGroupItem className="listy"  tag="a" href="tel:+12064681060">(206)-468-1060</ListGroupItem>
      <ListGroupItem className="listy" tag="a" href="mailto: mikeysimmons425@gmail.com">mikeysimmons425@gmail.com</ListGroupItem>
      <ListGroupItem className="listy" tag="a" href="https://www.linkedin.com/in/michael-simmons-23491a160/">LinkedIn</ListGroupItem>
      <ListGroupItem className="listy" tag="a" href="https://github.com/Mikey-Simmons">Github</ListGroupItem>
    </ListGroup>
    
          
        
      </Jumbotron>
    </div>
  );
};

export default Contact;