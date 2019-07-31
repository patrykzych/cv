import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./menu.css";

export default class Menu extends Component {

    render() {
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
                                <i class="d-md-none fas fa-ellipsis-v"></i>
                                <div className="d-none d-md-block menu">
                                    <span className="menuPosition clicked">HOME</span> 
                                    <span className="menuPosition">TECHNOLOGY</span> 
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
