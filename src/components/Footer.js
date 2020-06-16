import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import faStyles from 'font-awesome/css/font-awesome.css';

function Footer() {
    return(
        <footer className="mt-5">
        <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}>
        ChristopherGuyton87@gmail.com
        </Col>
        
        <Col className="p-0" md={1}>
        <Link to="/twitter"><i className="fa fa-twitter fa-lg"></i></Link>{'  '}
        <Link to="/github"> <i className="fa fa-github fa-lg"></i></Link>{'  '}
        <Link to="/youtube"><i className="fa fa-youtube fa-lg"></i></Link>{'  '}
        <Link to="/twitch"><i className="fa fa-twitch fa-lg"></i></Link>{'  '}
        </Col>
        <Col className="p-0 d-flex justify-content-end" md={3}>
        This site was created by Christopher Guyton<br></br>
        Using ReactJS Framework
        </Col>
        </Row>
        <Row>
        </Row>
        </Container>
        </footer>

    );

}

export default Footer;