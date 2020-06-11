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
        <h1>Welcome To My Online Portfolio!</h1>
     <h2>{props.title}</h2>
     <h3 className="subTitle">{props.subTitle}</h3>
        </Col>
        <Col>
        <img src={homeavatar} className="homeavatar"/>
       </Col>
        </Row>
        </Container>
        <Container fluid={true}>
       </Container>
        </Jumbotron>
    );
}

export default Hero;