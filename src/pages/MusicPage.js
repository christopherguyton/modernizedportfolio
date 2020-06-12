import React from 'react';

import Musician from '../components/Musician';

function MusicPage(props) {
    return(
        <div>
        <Musician title={props.title} subTitle={props.subTitle}/> 
        </div>
   
       
    );
}

export default MusicPage;
