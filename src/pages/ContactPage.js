import React from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import Axios from 'axios';
import Content from '../components/Content'


    function ContactPage(props) {
        return(
            <div>
            <Content>
            <p>PlaceHolder</p>
        <p>pLaceholder</p>
           
            <h1 className="pageh1">Contacting Me Is Easy!</h1>
            <hr></hr>
           <p>Just shoot me an <a href = "mailto: christopherguyton87@gmail.com">Email</a> and I'll get back to you within 48 hours! Thanks for the interest and for stopping by my site!</p>

            </Content>
        
            </div>
        );
    }

    //Form that didn't work


    // class ContactPage extends Component {
    //     constructor(props){
    //         super(props);
    //         this.state ={
    //             name: '',
    //             email: '',
    //             message: '',
    //             disabled: false,
    //             emailSent: null
    //         }
    //     }

    //     handleChange = (event) => {

    //         const target = event.target;
    //         const value = target.type === 'checkbox' ? target.checked : target.value;
    //         const name = target.name;

    //         this.setState({
    //             [name]: value
    //         })
    //     }

    //     handleSubmit = (event) => {
    //      event.preventDefault();

    //      this.setState ({
    //          disabled: true,
    //      });

    //      Axios.post('https://misterbehavior-backend.netlify.app/api/email', this.state)
    //      .then(res => {
    //          if (res.data.success) {
    //             res.setHeader("Access-Control-Allow-Origin", "*");
    //             res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    //             this.setState({
    //                 disabled: false,
    //                 emailSent: true,
    //             });
    //         } else {
    //              this.setState({
    //             disabled: false,
    //             emailSent: false,
    //         }) 
    //     }
    // })
    //         .catch(err => {
    //            this.setState({
    //                disabled: false,
    //                emailSent: false,
    //            });
    //         });
    //     }


    //     render() {
    //         return(
    //            <div>
    //            <Content>
    //            <h1 className="pageh1">Let's Work Together</h1><hr></hr>
    //            <Form onSubmit={this.handleSubmit}>
    //            <Form.Group>
    //            <Form.Label htmlFor="fullname">Full Name</Form.Label>
    //             <Form.Control id="fullname" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
    //            </Form.Group>

    //            <Form.Group>
    //            <Form.Label htmlFor="email">Email Address</Form.Label>
    //             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
    //            </Form.Group>

    //            <Form.Group>
    //            <Form.Label htmlFor="message">Message</Form.Label>
    //             <Form.Control id="message" name="message" as="textarea" rows="6" value={this.state.message} onChange={this.handleChange}/>
    //            </Form.Group>

    //            <Button className="d-inline-block" variant="outline-primary" type="submit" disable={this.state.disabled}>Send</Button>


    //            {this.state.emailSent === true && <p className="d-inline success-msg">Thanks For Your Message! I'll Be In Touch With You Soon!</p>}
    //            {this.state.emailSent === false && <p className="d-inline err-msg">Something Went Wrong. Please Try Again Shortly.</p>}
    //            </Form>
    //            </Content>
    //            </div>
    //         );
    //     }
    // }
export default ContactPage;
