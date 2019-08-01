import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./menu.css";

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.technology)
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <div className="borderLogo">
                                    Patryk Zych<span style={{color: "red"}}>.</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={12}>
                            <div className="d-flex justify-content-center ">
                                <i className="d-md-none fas fa-ellipsis-v"></i>
                                <div className="d-none d-md-block menu">
                                    <span className="menuPosition clicked" onClick={() => this.props.executeScroll(this.props.home)}>HOME</span> 
                                    <span className="menuPosition" onClick={() => this.props.executeScroll(this.props.technology)}>TECHNOLOGY</span> 
                                    <span className="menuPosition">ABOUT</span> 
                                    <span className="menuPosition">CONTACT</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
               </Container>
            </React.Fragment>
        )
    }
}
