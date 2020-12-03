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


function App() {
  
  const onClickHandler = (e) => {
    alert("Welcome to Michael Simmons Website!");
  const onHoverHandler = (e) =>{
    
  }
}
  return (
    <div className="App">
      
      <div className="jumbotron">
        <AnimationWrapper>
        <h1 onClick={ onClickHandler } className="display-4"><svg className="sun" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> Michael Simmons <svg className="moon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
</svg> </h1>
<AnimationWrapper>
        <p class="lead">Full-Stack Web Developer</p>
        </AnimationWrapper>
        </AnimationWrapper>
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
        </ul>
        
      </div>
      
<Router>
<HomePage path="/"></HomePage>
<Contact path="/contact"></Contact>
<AboutMe path="/aboutme"></AboutMe>
<Projects path="/projects"></Projects>
<AppConnect path ="/appconnect"></AppConnect>
<ForSale path="/4sale"></ForSale>

</Router>

    </div>
  );
}

export default App;
