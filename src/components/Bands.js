import React from 'react';
import {Container} from 'react-bootstrap';

//Custom Components
import BandInfo from '../components/BandInfo';

function Bands(props) {
    return(
        <React.Fragment>
<img src={props.band.imgSrc} alt={props.band.imgSrc}/>
<img src={props.band.imgSrc2} width="10%" height="10%" className="albumimages"/>
<img src={props.band.imgSrc3} width="10%" height="10%" className="albumimages"/>
<Container fluid={true}>
<h1 className="pageh1">{props.band.groupname}</h1>
<p>{props.band.description}</p>
<hr></hr>
</Container>
</React.Fragment>
    );

}

export default Bands;