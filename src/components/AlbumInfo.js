import React from 'react';
import { useSpring, animated } from 'react-spring';

//Custom Components


function AlbumInfo(props) {

    const style = useSpring({
        opacity: 1, from: {opacity: 0}});


    return(
    <animated.div className="c-card-info" style={style}>
    <p className="c-card-title">{props.albumTitle}</p>
    <p className="c-card-subtitle">{props.albumRelease}</p>
    <a href={props.link} target="_blank" rel="noopener noreferrer">Check It Out</a>
    </animated.div>
    );
}

export default AlbumInfo;