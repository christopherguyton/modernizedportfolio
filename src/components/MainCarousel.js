import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components
import Lilspectrum from '../images/Lilspectrum.jpg';
import GameOmen from '../images/GameOmen.jpg';
import SonicDash from '../images/SonicDash.jpg';


class Carousel extends React.Component {
    constructor(props) {
    super(props);
        this.state ={
                items: [
                    {
                        id: 0,
                        title: 'Sonic Ring Grabber',
                        subTitle: 'Sonic Themed Mini-Game',
                        imgSrc: SonicDash,
                        link: 'http://sonicballgame.netlify.app',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Omen Of Sorrow Review',
                        subTitle: 'Written, Edited and Produced by Me!',
                        imgSrc: GameOmen,
                        link: 'https://www.youtube.com/watch?v=eZbr5nV9sOo',
                        selected: false
                    },
                    {
                        id: 2,
                        title: 'Collab W/ Lil B',
                        subTitle: 'Song by Vinyl Spectrum',
                        imgSrc: Lilspectrum,
                        link: 'https://open.spotify.com/album/1e9OYnebzW6FBgV33dTeeM?si=meSORx8eS86ea3JApm7CxA',
                        selected: false
                    },
                ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return<Card item={item} click={(event => this.handleCardClick(item.id, event))} key={item.id}/>
        })
    }

    render() {
        return(
           <Container fluid={true}>
           <Row className="justify-content-around">
           {this.makeItems(this.state.items)}
           
           </Row>
           </Container>
        );
    }
 }

export default Carousel;