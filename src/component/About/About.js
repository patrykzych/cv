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

import cloud from '../../image/cloudOne.png';
import cloudtwo from '../../image/cloudTwo.png';
import cloudthree from '../../image/cloud3.png';


import "./about.css";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animateTechnology: this.props.animateTechnology,
            manOnCenter: false,
            manInAbout: false,
            style: {
                cloudRight: 0,
                sizeMan: 20,
                position: "absolute"
            }
        }
    }

    man = React.createRef();

    componentDidMount = () => {
        var manTop = ReactDOM.findDOMNode(this.man.current).getBoundingClientRect();
        this.setState({
            manTop: manTop.top
        })
        window.addEventListener('scroll', this.handleScroll);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    handleScroll = () => {
        console.log("wejszlo")
        let scrollTop = window.scrollY
                
        let minHeight = 20,
        minRight = 0,
        sizeMan = Math.max(minHeight, (scrollTop/2290)*80),
        cloudRightOne = Math.max(minRight, (scrollTop/2290)*20),
        cloudRightTwo = Math.max(minRight, (scrollTop/2290)*40),
        cloudRightThree = Math.max(minRight, (scrollTop/2290)*50);
        if(scrollTop>326 && scrollTop < 3000) {
            console.log(this.state.height/2)
            if(scrollTop >= this.state.manTop && scrollTop <= this.state.manTop + this.state.height) {
                this.setState({
                    manOnCenter: true,
                    manInAbout: false,
                    style: {
                        cloudRightOne: cloudRightOne,
                        cloudRightTwo: cloudRightTwo,
                        cloudRightThree: cloudRightThree,
                        sizeMan: sizeMan,
                    }
                }); 
            } else if(scrollTop >= this.state.manTop + this.state.height) {
                this.setState({
                    manOnCenter: false,
                    manInAbout: true,
                    style: {
                        sizeMan: sizeMan,
                    }
                });
            } else {
                this.setState({
                    manOnCenter: false,
                    style: {
                        cloudRightOne: cloudRightOne,
                        cloudRightTwo: cloudRightTwo,
                        cloudRightThree: cloudRightThree,
                        sizeMan: sizeMan,
                    }
                });
            }
        }
    }

    render() {
        var cloudOne = 25 + this.state.style.cloudRightOne;
        var cloudTwo = 0 + this.state.style.cloudRightTwo;
        var cloud3 = -50 + this.state.style.cloudRightThree;
        return (
            <React.Fragment>
            <div  className="aboutContainer">
            <div id="wave-container">
                <div id="wave"></div>
            </div>
                <div className="aboutBackground1"></div>
                <div class="sun"></div>
                <div style={{"right": `${cloudTwo}%`}} class="cloud">
                    <img src={cloudtwo}></img>
                </div>
                <div style={{"right": `${cloudOne}%`}} class="cloud">
                    <img  src={cloud}></img>
                </div>
                <div style={{"right": `${cloud3}%`}} class="cloud">
                    <img  src={cloudthree}></img>
                </div>
                <div className="aboutBackground2"></div>
                <div className="aboutTextContainer"><div className="aboutText">Technology</div></div>
                <div ref={this.man} className={this.state.manOnCenter ? '' : 'aboutMan'} ><img className={this.state.manInAbout ? '' : ''} className={this.state.manOnCenter ? 'manOnCenter' : ''} style={{"minHeight": `${this.state.style.sizeMan}vh`, "maxHeight": `${this.state.style.sizeMan}vh`, "maxWidth": `${this.state.style.sizeMan}vh`}} src={man}></img></div>
                <Container >
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
                    <Row className="aboutNames">
                        <Col xs={3} md={1} ><div className="aboutNamesBlock">Git</div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}} ><div className="aboutNamesBlock">html</div></Col>
                        <Col md={1} xs={3}><div className="aboutNamesBlock">css</div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutNamesBlock">js</div></Col>
                        <Col md={1} xs={3}><div className="aboutNamesBlock">mongodb</div></Col>
                        <Col xs={{span: 2, offset: 2}} md={{span: 2, offset: 0}}></Col>
                        <Col md={1} xs={3}><div className="aboutNamesBlock">mysql</div></Col>
                        <Col md={1} xs={3}><div className="aboutNamesBlock">node</div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutNamesBlock">npm</div></Col>
                        <Col md={1} xs={3}><div className="aboutNamesBlock">React</div></Col>
                        <Col xs={3} md={{span: 1, offset: 0}}><div className="aboutNamesBlock">sass</div></Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default About;