import React, {Component} from 'react';

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import './contact.css';

class Contact extends Component {

    render() {
        return (
            <div className="contactContainer">
                {/* <div className="contactText">Contact</div> */}
                <div className="contactWhaleContainer">
                    <div className="contactWhale">
                    <Form className="contactFormContainer">
                        <Row>
                            <Col>
                            <Form.Control placeholder="Company Name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Control placeholder="Email" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Phone Number" />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                            <Form.Control className="contactMessage" placeholder="Message" />
                            </Col>
                        </Row>
                        <Button className="contactButton" type="submit">Send me message!</Button>
                        </Form>
                        <div className="contactWhaleHole"></div>
                        <div className="contactUnderTeeth"></div>
                        <div className="contactWhaleTeeth"></div>
                        <div className="contactWhaleEye contactWhaleLeftEye"></div>
                        <div className="contactWhaleEye contactWhaleRightEye"></div>
                    </div>
                </div>
            </div>
        )
    } 

}

export default Contact;