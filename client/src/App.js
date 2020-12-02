import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './views/HomePage';
import Contact from './views/Contact';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Michael Simmons</h1>
        
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/aboutme">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
        </ul>
      </div>
      
<Router>
<HomePage path="/"></HomePage>
<Contact path="/contact"></Contact>
</Router>

    </div>
  );
}

export default App;
