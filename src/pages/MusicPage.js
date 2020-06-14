import React from 'react';


//Custom Components
import Musician from '../components/Musician';
import MusicCarousel from '../components/MusicCarousel';

function MusicPage(props) {
    return(
        <div>
        <Musician title={props.title} description={props.description} description2={props.description2}/>
        <MusicCarousel/>
        </div>
   
       
    );
}

export default MusicPage;
