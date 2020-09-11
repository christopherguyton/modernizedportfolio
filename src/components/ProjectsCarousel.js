import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components
import DrumKit from '../images/DrumKit.jpg';
import SonicDash from '../images/SonicDash.jpg';
import TaskList from '../images/TaskList.jpg';
import VideoGames from '../images/VideoGames.jpg';
import SFA2 from '..images/SFA2.jpg'

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
                    {
                        id: 2,
                        title: 'JavaScript Task List',
                        subTitle: 'Add Tasks To A List and Persist to Local Storage',
                        imgSrc: TaskList,
                        link: ' https://tasklist-mb.netlify.app/',
                        selected: false
                    },
                    {
                        id: 3,
                        title: 'Video Games List',
                        subTitle: 'Create a list of video games! ES5 Style!',
                        imgSrc: VideoGames,
                        link: 'https://gameslists-behavior.netlify.app'
                    },
                    {
                        id: 4,
                        title: 'Street Fighter Alpha 2 Select Screen',
                        subTitle: 'Fun Street Fighter Themed Character Select Screen Web App',
                        imgSrc: SFA2,
                        link: 'https://streetfighter-character-select.netlify.app/',
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