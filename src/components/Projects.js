import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

//Custom Components
import homeavatar from '../images/MisterBehavior1.png';

function Projects(props) {
    console.log(props);
    return(
        <Jumbotron className="bg-dark jumbotron-fluid">
        <Container fluid={true}>
        <Row>
        <Col md={8}>
        <h1>Web Developer In Training...</h1>
     <h2>{props.title}</h2>
     <Container>
     <h4 className="descript">{props.description}</h4>
     </Container>
        </Col>
        <Col md={2}>
        <img src={homeavatar} alt="" className="homeavatar"/>
       </Col>
        </Row>
        </Container>
        <Container fluid={true}>
       </Container>
        </Jumbotron>
    );
}

export default Projects;