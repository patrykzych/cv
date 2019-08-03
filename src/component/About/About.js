import React, {Component} from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import man from '../../image/man.svg';
import html from '../../image/html.png';
import css from '../../image/css.png';
import js from '../../image/js.png';
import git from '../../image/git.png';
import mongodb from '../../image/mongodb.png';
import mysql from '../../image/mysql.png';
import node from '../../image/node.png';
import npm from '../../image/npm.png';
import react from '../../image/react.png';
import sass from '../../image/sass.png';
import bootstrap from '../../image/bootstrap.png';


import "./about.css";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animateTechnology: this.props.animateTechnology,
            imageTop: this.props.imageTop,
            aboutTop: this.props.aboutTop,
            sizeMan: 20,
        }
    }

    componentDidMount = () => {
        var difference = this.props.aboutTop - this.props.imageTop;
        console.log(this.state.aboutTop)
        console.log(difference)
        document.addEventListener('scroll', () => {
          if(window.scrollY >= this.props.imageTop && window.scrollY <= this.props.aboutTop) {

            this.setState({
              animateTechnology: true,
            })
          }
        });
      }

    render() {
        var style = {
            minHeight: `${this.state.sizeMan}vh`
        }
        return (
            <div className="aboutContainer">
                <div className="aboutBackground1"></div>
                <div className="aboutBackground2"></div>
                <div className="aboutTextContainer"><div className="aboutText">Technology</div></div>
                <div className="aboutMan"><img style={style} src={man}></img></div>
                <Container>
                    <Row className={this.props.animateTechnology ? 'float animate stay' : 'stay'}>
                        <Col xs={3} md={1} ><div className="aboutBlock"><img src={git}></img></div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}} ><div className="aboutBlock"><img src={html}></img></div></Col>
                        <Col md={1} xs={3}><div className="aboutBlock"><img src={css}></img></div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutBlock"><img src={js}></img></div></Col>
                        <Col md={1} xs={3}><div className="aboutBlock"><img src={mongodb}></img></div></Col>
                        <Col xs={{span: 2, offset: 2}} md={{span: 2, offset: 0}}></Col>
                        <Col md={1} xs={3}><div className="aboutBlock"><img src={mysql}></img></div></Col>
                        <Col md={1} xs={3}><div className="aboutBlock"><img src={node}></img></div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutBlock"><img src={npm}></img></div></Col>
                        <Col md={1} xs={3}><div className="aboutBlock"><img src={react}></img></div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutBlock"><img src={sass}></img></div></Col>
                        {/* <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutBlock"><img src={bootstrap}></img></div></Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;