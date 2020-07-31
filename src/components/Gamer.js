import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

//Image Components
import gamingavatar from '../images/GamingLife.png';

function Gamer(props) {
    console.log(props);
    return(
        <Jumbotron className="bg-dark jumbotron-fluid">
        <Container fluid={true}>
        <Row>
        <Col md={8}>
        <h1>Gaming Content For You!</h1>
     <h2>{props.title}</h2>
     <h3 className="subTitle">{props.subTitle}</h3>
     <h4 className="descript">{props.description}</h4>
        </Col>
        <Col md={2}>
        <img src={gamingavatar} alt="" className="homeavatar"/>
       </Col>
        </Row>
        </Container>
        <Container fluid={true}>
       </Container>
        </Jumbotron>
    );
}

export default Gamer;