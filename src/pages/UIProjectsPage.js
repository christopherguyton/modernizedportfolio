import React from 'react';
import UIProjectCarousel from '../components/UIProjectsCarousel'
import UIProjects from '../components/UIProjects'

function UIProjectsPage(props) {
    return(
        <div>
        <UIProjects title={props.title} subTitle={props.subTitle} description={props.description}/>
        <UIProjectCarousel/>
        </div>
    );
}

export default UIProjectsPage;
