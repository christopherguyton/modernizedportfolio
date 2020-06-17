import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';


class Commissions extends Component {
    render() {
        return(
         <div className="player-wrapper">
         <Row>
            <ReactPlayer className='react-player'
            url='https://youtu.be/2IG90yd2zX8'
            width='25%'
            height='50%'/>
            <ReactPlayer className='react-player'
            url='https://youtu.be/2VSjDHVxBY8'
            width='25%'
            height='50%'/>
            </Row>
            <br></br>
            <p>Video 1: LyfeBulb Informational Video. Contribution: Background Music</p>
            <p>Video 2: You Good w/ Talib Babb: Skit Background Music</p>
            </div>
           
        );
    }
}

export default Commissions;