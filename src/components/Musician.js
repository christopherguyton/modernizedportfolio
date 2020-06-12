import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

//Custom Components
import musicphoto from '../images/ChrisBass.jpg';

function Musician(props) {
    console.log(props);
    return(
        <Jumbotron className="bg-dark jumbotron-fluid">
        <Container fluid={true}>
        <Row>
        <Col md={8}>
        <h1>Bassist, Singer, Songwriter</h1>
     <h2>{props.title}</h2>
     <h3 className="subTitle">{props.subTitle}</h3>
        </Col>
        <Col md={2}>
        <img src={musicphoto} className="homeavatar"/>
       </Col>
        </Row>
        </Container>
        <Container fluid={true}>
       </Container>
        </Jumbotron>
    );
}

export default Musician;