import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';


const Projects = (props) => {
    return(

    
    <div>
        <Jumbotron>
            <AnimationWrapper>
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lightning-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg> Projects</h1>
</AnimationWrapper>
<ListGroup>
<AnimationWrapper><ListGroupItem className="listy" tag="a" href="http://ec2-18-218-231-53.us-east-2.compute.amazonaws.com/">Apartment Connect</ListGroupItem></AnimationWrapper>
<AnimationWrapper><ListGroupItem className="listy" tag="a" href="#">4Sale</ListGroupItem></AnimationWrapper>
<AnimationWrapper><ListGroupItem className="listy" tag="a" href="#">FlatScreenGuru</ListGroupItem></AnimationWrapper>
<AnimationWrapper><ListGroupItem className="listy" tag="a" href="#">Alien Invasion</ListGroupItem></AnimationWrapper>
    </ListGroup>
        </Jumbotron>
    </div>
    )
    }
export default Projects;