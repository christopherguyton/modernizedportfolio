// React Components

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


//Personal Components
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import GamingPage from './pages/GamingPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import avatar from './images/ChrisAvatar.PNG';
import avatar2 from './images/ChrisFace2.PNG';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    title: 'Christopher Guyton',
    headerLinks: [
      {
        title: 'Home', path: '/'
      },
      {
        about: 'About', path: '/about'
      },
      {
        Contact: 'Contact', path: '/contact'
      }
    ],
    home: {
      title: 'Pursuing That Dream Position',
      subTitle: 'Multitalented Gamer, Musician and Aspiring Web Developer',
    },
    music: {
      title: 'Discover My Other Talent'
    },
    gaming: {
      title: 'This is my nerdy side'
    },
    projects: {
      title: 'Check out my web projects so far'
    },
    about: {
      title: 'About Chris',
      
    },
    contact: {
      title: 'Put Me To Work',
   
    }
  }
}
 render() {
   return(
    <Router>
    <Container className="p-0" fluid={true}>
    <Navbar className="border-bottom " bg="light" expand="lg" id="mainbar">
    <Navbar.Brand><img src={avatar} width="15%" className="pr-2"/>Christopher Guyton</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-toggle" className="border-0"/>
    <Navbar.Collapse id="navbar-toggle">
    <Nav className="ml-auto">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/music">Music</Link>
    <Link className="nav-link" to="/gaming">Gaming</Link>
    <Link className="nav-link" to="/projects">Projects</Link>
    <Link className="nav-link" to="/about">About</Link>
    <Link className="nav-link" to="/contact">Contact</Link>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
   <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle}  />} />
   <Route path="/music" exact render={() => <MusicPage title={this.state.music.title}  />} />
   <Route path="/gaming" exact render={() => <GamingPage title={this.state.gaming.title}  />} />
   <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} s />} />
   <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}  />} />
   <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}  />} />

<Footer/>



    </Container>
    </Router>
   );
}
}


export default App;
