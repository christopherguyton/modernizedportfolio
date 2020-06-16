import React from 'react';

import Content from '../components/Content'

function AboutPage(props) {
    return(
        <div>
        <Content>
        <h1 className="pageh1"> Thanks For Stopping By!</h1><hr></hr>
        <p> My name is Chris. Nice to meet you! </p>
        
        <p>I am a musician and composer, a Youtube content creator, as well as an aspiring Web Developer. I'm constantly looking to learn new skills and develop myself and my proficency at my interests! </p>

        <p>For Audio/Video, I have skills using Adobe Premiere, Adobe Audition and Logic Pro X to name a few.</p>

        <p>As far as Web Development, I built this site with ReactJS, and I know my way around HTML5, CSS and JavaScript.</p>

        <p>I have experience as both a Project Manger and a Scrum Master working with Software Development Teams, IT Teams, Insurance Teams and Brand Packaging Teams.</p>
        
       <p>Please visit my <a href="https://linkedin.com/in/locsgehts" target="_blank" rel="noopener">LinkedIn</a> page and connect with me for a more in depth look at my work histoy and experience.</p>

        <h1 className="pageh1">Interested In Working Together?</h1>
        <hr></hr>
        <p>Head over to the Contact page and shoot me an email if you are interested in working together.</p>
        </Content>
    
        </div>
    );
}

export default AboutPage;
