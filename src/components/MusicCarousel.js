import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components
import VinylSpectrum from '../images/VinylSpectrum.jpg'
import CosmicDesire from '../images/CosmicDesire.jpg'
import ColorByNumbers from '../images/ColorByNumbers.jpg'
import plasticvillains from '../images/plasticvillains.jpg'

//Custom Components
import Bands from '../components/Bands';

class MusicCarousel extends React.Component {
    constructor(props) {
    super(props);
        this.state ={
                bands: [
                    {
                        id: 0,
                        groupname: "Vinyl Spectrum",
                        imgSrc: VinylSpectrum,
                        imgSrc2: CosmicDesire,
                        albumTitle: "Cosmic Desire",
                        albumRelease: "2013",
                        imgSrc3: ColorByNumbers,
                        albumTitle2:"Color By Numbers",
                        albumRelease2: "2015",
                        link: 'https://open.spotify.com/artist/62alsPIjErfHCfWAkRt5gm?si=BiY86EgNQ3GlBZ-6uP5GOA',
                        description: "I was active with Vinyl Spectrum between 2011-2019. The groups music has been featured several times in film, television and various television commercials. My role in this band was bass player, and I helped write and arrange a few of the songs as well. Most notable collaborations include Plush Interior (ft. Watsky) and P.S. 118 Reprise (featuring Lil' B)",
                       
                    },
                    {
                        id: 1,
                        groupname: "The Other Tones",
                      //  imgSrc: theothertones,
                        link: 'https://open.spotify.com/artist/62alsPIjErfHCfWAkRt5gm?si=BiY86EgNQ3GlBZ-6uP5GOA',
                        description: "I was active with The Other Tones between 2013-2018, and was the bands frontman, bass player and main songwriter. We released one album in that time titled First Will & Testament.",
                    },
                    {
                        id: 2,
                        groupname: "Plastic Villains",
                        imgSrc: plasticvillains,
                        link: 'https://open.spotify.com/artist/1bZQcogbOBt1N6yZ86hL8B?si=cEQr30FmR6aOuXtTQo59xQ',
                        description:'I was active with Plastic Villains between 2013-2015. We were a grundge rock band, and I played bass as well as back-up sang when we played live. We were featured quite a few times in local San Francisco publications before we disbanded',
                       
                    },
                    {
                        id: 3,
                        groupname: "Mister Behavior",
                        //imgSrc: misterbehavior,
                        description: 'This is my solo project, which changes genre quite often as I like to make several different types of music. The record linked here is primarily hip hop, but I have a few things in the works that bend genres as well.',
                        link: 'https://soundcloud.com/misterbehavior/sets/backpack-raps-and-other-tracks',
                      
                    },
                    {
                        id: 4,
                        groupname: "Outlaws & Preachers",
                        description: 'Outlaws & Preachers was active between the years of 2010-2012. We were a sort of a country inspired alt-rock group. I played bass in this group and back-up sang when we played live.',
                        link: 'https://outlawsandpreachers.bandcamp.com/',
                    },
                    {
                        id: 5,
                        groupname: "Dusty Cartridges",
                        description: "Dusty Cartridges was what we called a 'nerd core rap' group that had one release in 2011. We essentially made rap songs about video games, primarily video games from the 1990s. I was one of our lyricists, going by the name of 'Guy', and the other members were 'Cody' and 'Haggar'. That ones for the true nerds.",
                        link: 'https://soundcloud.com/stolenfat/sets/dusty-cartidges-hard-mode',
                    },
                
                ]
                
        }
    }



 
    makeBands = (band) => {
        return band.map(band => {
            return<Bands band={band} key={band.id}/>
        })
    }
    render() {
        return(
            <Container fluid={true}>
            <Row className="justify-content-right">
            {this.makeBands(this.state.bands)}
            </Row>
            </Container>
        );
    }
 }


 
export default MusicCarousel;