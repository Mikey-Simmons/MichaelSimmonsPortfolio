import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';
import mikey7 from './imgs/mikey7.jpg';
import mikey from './imgs/mikey.jpg'
const AboutMe = (props) => {
    return(

    
    <div>
        <Jumbotron>
        <AnimationWrapper>
        <img src= {mikey7} class="img-fluid" alt="Responsive image"></img>
        </AnimationWrapper>
            <AnimationWrapper>
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> About Me!</h1>
</AnimationWrapper>
<AnimationWrapper>
<p>Hello there, my name is Michael Simmons!  I am a recent graduate from the school Coding Dojo where I studied Web Development.  
    I have a passion for learning new technologies and implementing them in real world scenarios.  
    Before I attended Coding Dojo I worked a variety of different sales jobs across the Seattle area.  
    Buying and selling hype sneakers is a big passion of mine, I’ve been collecting since I was in middle school.  
    Currently I live in Redmond Washington and I am looking for work!  
</p>
</AnimationWrapper>
        </Jumbotron>
    </div>
    )
    }
export default AboutMe;