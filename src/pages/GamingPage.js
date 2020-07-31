import React from 'react';


import Gamer from '../components/Gamer';
import GamingVideos from '../components/GamingVideos';

function GamingPage(props) {
    return(
        <div>
        <Gamer title={props.title} subTitle={props.subTitle} description={props.description}/>
        <GamingVideos/>
        </div>
   
    );
}

export default GamingPage;
