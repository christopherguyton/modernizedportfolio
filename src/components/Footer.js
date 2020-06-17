import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function Footer() {
    return(
        <footer className="mt-5">
        <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}>
        ChristopherGuyton87@gmail.com
        </Col>
        
        <Col className="p-0" md={2}>
        <a href="https://twitter.com/realmrbehavior" target="_blank" rel="noopener norefferer"><i className="fa fa-twitter fa-lg"></i></a>{'  '}
        <a href="https://github.com/christopherguyton" target="_blank" rel="noopener norefferer"> <i className="fa fa-github fa-lg"></i></a>{'  '}
        <a href="https://youtube.com/locstakes" target="_blank" rel="noopener norefferer"><i className="fa fa-youtube fa-lg"></i></a>{'  '}
        <a href="https://twitch.tv/mrbehavior" target="_blank" rel="noopener norefferer"><i className="fa fa-twitch fa-lg"></i></a>{'  '}
        </Col>
        <Col className="p-0 d-flex justify-content-end" md={3}>
        This site was created by Christopher Guyton<br></br>
        Using ReactJS Framework<br></br>
        Copyright 
        </Col>
        </Row>
        <Row>
        </Row>
        </Container>
        </footer>

    );

}

export default Footer;