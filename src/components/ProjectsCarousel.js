import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components
import DrumKit from '../images/DrumKit.jpg';
import SonicDash from '../images/SonicDash.jpg';


class ProjectCarousel extends React.Component {
    constructor(props) {
    super(props);
        this.state ={
                items: [
                    {
                        id: 0,
                        title: 'Sonic Ring Grabber',
                        subTitle: 'Sonic Themed Mini-Game',
                        imgSrc: SonicDash,
                        link: 'https://sonicballgame.netlify.app',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'JavaScript DrumKit',
                        subTitle: 'Only Works on Desktop',
                        imgSrc: DrumKit,
                        link: 'https://misterbehavior-drumkit.netlify.app/',
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

export default ProjectCarousel;