import React, {useEffect} from 'react';
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
  useEffect(() => {
    document.title = "ALV"
  }, [])
  
  return (
    
    <React.Fragment>
      <Router>
        <div style={{backgroundColor: '#1F2833'}}>
          <NavBar />
          <Switch>
            <Route component={Welcome} exact path='/' />
            <Route component={About} path='/about' />
            <Route component={Projects} path='/projects' />
          </Switch>
          <SocialMedia />
        <BottomBar />
        </div>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
