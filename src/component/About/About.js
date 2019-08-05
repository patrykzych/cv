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
            manOnCenter: false,
            style: {
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
        sizeMan = Math.max(minHeight, (scrollTop/2290)*80);
        if(scrollTop>326 && scrollTop < 3000) {
            console.log(this.state.height/2)
            if(scrollTop >= this.state.manTop) {
                this.setState({
                    manOnCenter: true,
                    style: {
                        sizeMan: sizeMan,
                    }
                });
            } else {
                this.setState({
                    manOnCenter: false,
                    style: {
                        sizeMan: sizeMan,
                    }
                });
            }
        }
    }

    render() {
        console.log(this.state.manTop);
        return (
            <React.Fragment>
            <div  className="aboutContainer">
            <div id="wave-container">
  <div id="wave">
  </div>
</div>
                <div className="aboutBackground1"></div>

                <div className="aboutBackground2"></div>
                <div className="aboutTextContainer"><div className="aboutText">Technology</div></div>
                <div ref={this.man} className={this.state.manOnCenter ? '' : 'aboutMan'} ><img className={this.state.manOnCenter ? 'manOnCenter' : ''} style={{"minHeight": `${this.state.style.sizeMan}vh`, "maxHeight": `${this.state.style.sizeMan}vh`, "maxWidth": `${this.state.style.sizeMan}vh`}} src={man}></img></div>
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