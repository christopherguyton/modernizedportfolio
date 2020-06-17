import React from 'react';
import Commissions from '../components/Commissions'

//Custom Components
import Musician from '../components/Musician';
import MusicCarousel from '../components/MusicCarousel';

function MusicPage(props) {
    return(
        <div>
        <Musician title={props.title} description={props.description} description2={props.description2}/>
        <h1 className="bandinfo">Rock Bands</h1>
        <hr></hr>
        <MusicCarousel/>
        <h1 className="bandinfo">Commissioned Work Samples</h1>
       <Commissions/>
        </div>
   
       
    );
}

export default MusicPage;
