import React from 'react';
import ProjectCarousel from '../components/ProjectsCarousel'
import Projects from '../components/Projects'

function ProjectsPage(props) {
    return(
        <div>
        <Projects title={props.title} subTitle={props.subTitle} description={props.description}/>
        <ProjectCarousel/>
        </div>
    );
}

export default ProjectsPage;
