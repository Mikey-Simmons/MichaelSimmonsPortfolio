import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './views/HomePage';
import Contact from './views/Contact';
import { Router } from '@reach/router';
import { AnimationWrapper } from 'react-hover-animation';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import AppConnect from './views/AppConnect';
import ForSale from './views/ForSale';
import Flatscreenguru from './views/Flatscreenguru';
import AlienInvasion from './views/AlienInvasion';
import PuppyLand from './views/PuppyLand';
import Sound from 'react-sound';
import Song1 from './views/music/song1.mp3';
import handleSongFinishedPlaying from 'react-sound';
import handleSongLoading from 'react-sound';
import handleSongPlaying from 'react-sound';
import setIsPlaying from "react-sound"
import isPlaying from "react-sound"
import { useState } from 'react';
import React from 'react';
import { Wave } from 'react-animated-text';
import Techs from './views/Techs'

function App() {
  
  const onClickHandler = (e) => {
    alert("Welcome to Michael Simmons Website!");
}
const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false)
}

  return (
    
    
    <div className="App">
     
      
      <div className="jumbotron">
        <div className="toolbar">
        
        <h1 onClick={ onClickHandler } className="display-4">Michael Simmons</h1>

        
        
        <ul class="nav justify-content-center">
          <li class="nav-item">
          <AnimationWrapper>
            <a class="nav-link active" href="/"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> Home</a>
            </AnimationWrapper>
          </li>
          <li class="nav-item">
          <AnimationWrapper>
            <a class="nav-link" href="/aboutme"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> About Me</a>
            </AnimationWrapper>
          </li>
          <li class="nav-item">
          <AnimationWrapper>
            <a class="nav-link" href="/contact"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg> Contact</a>
            </AnimationWrapper>
          </li>
          <li class="nav-item">
          <AnimationWrapper>
            <a class="nav-link" href="/projects"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lightning-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg> Projects</a>
            </AnimationWrapper>
          </li>
          <li class="nav-item">
          <AnimationWrapper>
            <a class="nav-link" href="/techs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
</svg> Technologies</a>
            </AnimationWrapper>
          </li>
        </ul>
        </div>
        
      </div>
      
<Router>
<HomePage path="/"></HomePage>
<Contact path="/contact"></Contact>
<AboutMe path="/aboutme"></AboutMe>
<Projects path="/projects"></Projects>
<AppConnect path ="/appconnect"></AppConnect>
<ForSale path="/4sale"></ForSale>
<Flatscreenguru path="/flatscreenguru"></Flatscreenguru>
<AlienInvasion path="/alieninvasion"></AlienInvasion>
<PuppyLand path="/puppyland"></PuppyLand>
<Techs path="/techs"></Techs>
</Router>

    </div>
  );
}

export default App;
