import React from 'react';
import { useSpring, animated } from 'react-spring';

//Custom Components


function BandInfo(props) {

    const style = useSpring({
        opacity: 1, from: {opacity: 0}});


    return(
    <animated.div className="c-card-info" style={style}>
    </animated.div>
    );
}

export default BandInfo;