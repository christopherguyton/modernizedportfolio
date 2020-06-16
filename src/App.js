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
        title: 'Music', path: '/music'
      },
      {
        title: 'Gaming', path: '/gaming'
      },
      {
        title: 'Projects', path: '/projects'
      },
      {
        title: 'About', path: '/about'
      },
      {
        title: 'Contact', path: '/contact'
      }
    ],
    home: {
      title: "Musician. Content Creator. Web Developer.",
      subTitle: 'Just pursuing my dream...',
      homeDescription: 'Thanks for stopping by! Click the images below to check out my current showcased projects. You can find a more in-depth look at my work via the navigation bar, a brief summary of my personal history and description of my work experience.'
      
    },
    music: {
      title: 'Discover My Side Gig',
      description: "I've been playing music for most of my life, starting out with the piano at age five and moving into the world of rock and roll as a teenager. After moving to the Bay Area in 2010, I adopted the stage name Chris Locs and have worked frequently as a bass player and a composer.",
      description2: "I am available to compose music on a contract basis. Visit the contact section if you're interested in collaborating with me!",
    },
    gaming: {
      title: 'Talking Nerdy To You'
    },
    projects: {
      title: 'Coming Soon...'
    },
    about: {
      title: 'About Chris',
      subTitle: 'Thanks for stopping by!',
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
   <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} homeDescription={this.state.home.homeDescription} />} />
   <Route path="/music" exact render={() => <MusicPage title={this.state.music.title} description={this.state.music.description} description2={this.state.music.description2}  />} />
   <Route path="/gaming" exact render={() => <GamingPage title={this.state.gaming.title}  />} />
   <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} />} />
   <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
   <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}  />} />

<Footer/>



    </Container>
    </Router>
   );
}
}


export default App;
