import React from 'react';

import Hero from '../components/Hero';
import Resume from '../components/Resume';

function AboutPage(props) {
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} homeDescription={props.homeDescription}/>
        <Resume/>
        </div>
    );
}

export default AboutPage;
