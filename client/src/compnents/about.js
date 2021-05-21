import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';

const About = (props) => {
    return(

    
    <div>
        <Jumbotron>
        
        
        
            <div className="about">
            
        <h1 className="display-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> About Me!</h1>   


<p className="aboutme">I am a passionate African American web developer who loves learning new technologies and implementing them into real world solutions. My curiosity has driven me to become a lifelong learner. I started and finished an extremely difficult 14 week coding boot camp called Coding Dojo in the middle of the Covid-19 pandemic. Although it was challenging, I proved to myself that I can strive under extremely difficult circumstances and I gained an insane amount of technical knowledge. Having previously worked in sales, I love to work with people and prefer working in a team like environment. I'm an avid shoe collector and buying/selling shoes is another big passion of mine. 
</p>

</div>

<div className="techs">
    <h1 className="display-3">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-plug-fill" viewBox="0 0 16 16">
  <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z"/>
</svg>Technologies:

    </h1>
    <ul class="list-group">
    
  <li class="list-group-item">
    <a href="https://www.w3schools.com/html/html_intro.asp">HTML </a>
    <a href="https://www.w3schools.com/css/css_intro.asp"> CSS </a>
    <a href="https://www.javascript.com/"> Javascript </a></li>
  
  
  <li class="list-group-item">
    <a href="https://go.java/?intcmp=gojava-banner-java-com"> Java </a><a href="https://reactjs.org/">Django</a><a href="https://reactjs.org/"> Flask </a> </li>
  
  
  <li class="list-group-item"><a href="https://reactjs.org/"> ReactJS </a><a href="https://www.mongodb.com/"> MongoDB </a><a href="https://expressjs.com/"> Express </a></li>
  
  
  <li class="list-group-item"><a href="https://spring.io/projects/spring-boot">Spring Boot</a><a href="https://www.npmjs.com/package/bcrypt"> bcrypt </a><a href="https://www.django-rest-framework.org/"> REST </a></li>
  
  
  <li class="list-group-item"><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> Bootstrap </a><a href="https://reactstrap.github.io/"> Reactstrap </a><a href="https://socket.io/"> Socket.io </a></li>
  
  
  <li class="list-group-item"><a href="https://www.selenium.dev/"> Selenium </a><a href="https://www.sqlite.org/index.html"> SQLite</a><a href="https://www.mysql.com/">  MySQL </a></li>
  
  
  <li class="list-group-item"><a href="https://www.pygame.org/news"> pygame </a><a href="https://nodejs.org/en/"> NodeJS </a> <a href="https://jquery.com/"> jQuery </a></li>
  
  
</ul>
</div>

        </Jumbotron>
    </div>
    )
    }
export default About;