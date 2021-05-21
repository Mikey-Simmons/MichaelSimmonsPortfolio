import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { AnimationWrapper } from 'react-hover-animation';
import mikey7 from './imgs/mikey7.jpg';
import mikey from './imgs/mikey.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const Techs = (props) => {
  return (


    <div className="blackout">
      
        

        <div className="techs">
          <h1 className="display-3">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
</svg> Technologies:
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

      
    </div>
  )
}
export default Techs;