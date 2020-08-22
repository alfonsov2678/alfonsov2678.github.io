import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar'
import About from './components/about'
import SocialMedia from './components/socialMedia'
import Container from '@material-ui/core/Container';
import BottomBar from './components/bottomBar'
import Welcome from './components/welcome'
import Projects from './components/projects'

function App() {
  return (
    
    <React.Fragment>
      <Router>
        <div >
        <Container>
          <NavBar />
          <Switch>
            <Route component={Welcome} exact path='/' />
            <Route component={About} path='/about' />
            <Route component={Projects} path='/projects' />
          </Switch>
          <SocialMedia />
        </Container>
        <BottomBar />
        </div>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
