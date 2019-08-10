import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./menu.css";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return(
            <React.Fragment>
                <Container className="menuBackground">
                <div class="meteor meteor-1"></div>
                <div class="meteor meteor-2"></div>
                <div class="meteor meteor-3"></div>
                    <Row>
                        <Col xs={6} md={12}>
                            <div className="d-flex justify-content-center">
                                <div className="borderLogo">
                                    Patryk Zych
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={12}>
                            <div className="d-flex justify-content-center ">
                                <i className="d-md-none fas fa-ellipsis-v"></i>
                                <div className="d-none d-md-block menu">
                                    <span className="menuPosition" onClick={() => this.props.executeScroll(this.props.home)}>HOME</span> 
                                    <span className="menuPosition" onClick={() => this.props.executeScroll(this.props.technology)}>TECHNOLOGY</span> 
                                    <span className="menuPosition" onClick={() => this.props.executeScroll(this.props.about)}>ABOUT</span> 
                                    <span className="menuPosition" onClick={() => this.props.executeScroll(this.props.contact)}>CONTACT</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
               </Container>
            </React.Fragment>
        )
    }
}
