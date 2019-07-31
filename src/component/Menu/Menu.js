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
                                    PATRYK ZYCH
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={12}>
                            <div className="d-flex justify-content-center ">
                                <div className="d-none d-md-block menu">
                                    HOME TECHNOLOGY ABOUT CONTACT
                                </div>
                            </div>
                        </Col>
                    </Row>
               </Container>
            </React.Fragment>
        )
    }
}
