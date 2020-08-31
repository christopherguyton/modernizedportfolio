import React from 'react';
import Card from './Card';
import {Row, Container} from 'reactstrap';

//Image Components


class UIProjectCarousel extends React.Component {
    constructor(props) {
    super(props);
        this.state ={
                items: [
               
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

export default UIProjectCarousel;