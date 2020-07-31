import React from 'react';
import {Container} from 'react-bootstrap';

//Custom Components

function Bands(props) {
    return(
        <React.Fragment>
<img src={props.band.imgSrc} alt={props.band.imgSrc} width="25%"/>
<Container fluid={true}>
<h1 className="pageh1">{props.band.groupname}</h1>
<a href={props.band.link} target="_blank" rel="noopener noreferrer">Click To Listen</a>
<p>{props.band.description}</p>
<hr></hr>
</Container>
</React.Fragment>
    );

}

export default Bands;