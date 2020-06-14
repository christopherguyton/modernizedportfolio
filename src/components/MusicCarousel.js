import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components
import VinylSpectrum from '../images/VinylSpectrum.jpg'
import CosmicDesire from '../images/CosmicDesire.jpg'
import ColorByNumbers from '../images/ColorByNumbers.jpg'

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
                        link1: 'https://open.spotify.com/artist/62alsPIjErfHCfWAkRt5gm?si=BiY86EgNQ3GlBZ-6uP5GOA',
                        description: "I was active with Vinyl Spectrum between 2011-2019. The groups music has been featured several times in film, television and various television commercials. My role in this band was bass player, and I helped write and arrange a few of the songs as well. Most notable collaborations include Plush Interior (ft. Watsky) and P.S. 118 Reprise (featuring Lil' B)",
                       
                    },
                    {
                        id: 1,
                        groupname: "The Other Tones",
                      //  imgSrc: theothertones,
                        link: 'https://open.spotify.com/artist/62alsPIjErfHCfWAkRt5gm?si=BiY86EgNQ3GlBZ-6uP5GOA',
                        description: '',
                    },
                    {
                        id: 2,
                        groupname: "Plastic Villains",
                    //imgSrc: plasticvillains,
                        description:'',
                       
                    },
                    {
                        id: 3,
                        groupname: "Mister Behavior",
                        //imgSrc: misterbehavior,
                        description: '',
                      
                    },
                
                ]
        }
    }

 
    makeBands = (band) => {
        return band.map(band => {
            return<Bands band={band} key={band.id} key={band.id}/>
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