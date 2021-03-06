import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

//Custom Components
import homeavatar from '../images/MisterBehavior1.png';

function Hero(props) {
    console.log(props);
    return(
        <Jumbotron className="bg-dark jumbotron-fluid">
        <Container fluid={true}>
        <Row>
        <Col md={8}>
     <h2>{props.title}</h2>
     <h3 className="subTitle">{props.subTitle}</h3>
     <h4 className="descript">{props.homeDescription}</h4>
        </Col>
        <Col md={2}>
        <img src={homeavatar} alt={homeavatar} className="homeavatar"/>
       </Col>
        </Row>
        </Container>
        <Container fluid={true}>
       </Container>
        </Jumbotron>
    );
}

export default Hero;