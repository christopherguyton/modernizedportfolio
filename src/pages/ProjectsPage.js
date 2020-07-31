import React from 'react';
import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectsCarousel'

function ProjectsPage(props) {
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} description={props.description}/>
        <ProjectCarousel/>
        </div>
    );
}

export default ProjectsPage;
