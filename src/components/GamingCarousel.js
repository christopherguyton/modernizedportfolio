import React from 'react';

class GamingCarousel extends React.Component {
    constructor(props) {
    super(props);
        this.state ={
                items: [
                    {
                        id: 0,
                        title: 'Sonic Ring Grabber',
                        subTitle: 'Sonic Themed Mini-Game',
                        imgSrc: './images/SonicSpinballJP.png',
                        link: 'http://misterbehavior.com/sonicballgame',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Omen Of Sorrow Review',
                        subTitle: 'Written, Edited and Produced by Me!',
                        imgSrc: youtube,
                        link: 'https://www.youtube.com/watch?v=eZbr5nV9sOo',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Collab W/ Lil B',
                        subTitle: 'Song by Vinyl Spectrum',
                        imgSrc: spotify,
                        link: 'https://open.spotify.com/album/1e9OYnebzW6FBgV33dTeeM?si=meSORx8eS86ea3JApm7CxA',
                        selected: false
                    },
                ]
        }
    }

    render() {
        return(

            <p>Carousel Works</p>
        );
    }
 }

export default GamingCarousel;