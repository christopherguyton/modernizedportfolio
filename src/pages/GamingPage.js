import React from 'react';
import { Carousel } from 'reactstrap';

import Gamer from '../components/Gamer';

function GamingPage(props) {
    return(
        <div>
        <Gamer title={props.title} subTitle={props.subTitle}/> 
        </div>
   
    );
}

export default GamingPage;
