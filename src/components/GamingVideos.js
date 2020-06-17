import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player';


class GamingVideos extends Component {
    render() {
        return(
         <div className="player-wrapper">
         <Row>
            <ReactPlayer className='react-player'
            url='https://youtu.be/kSwxZOtvYZ8'
            width='25%'
            height='50%'/>
            <ReactPlayer className='react-player'
            url='https://youtu.be/UNSdZuYzU5k'
            width='25%'
            height='50%'/>
            <ReactPlayer className='react-player'
            url='https://youtu.be/IdGMgeIXGpU'
            width='25%'
            height='50%'/>
            <ReactPlayer className='react-player'
            url='https://youtu.be/PpSdHASwnXc'
            width='25%'
            height='50%'/>
            </Row>
            <br></br>
            </div>
           
        );
    }
}

export default GamingVideos;