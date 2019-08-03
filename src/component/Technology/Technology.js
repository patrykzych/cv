import React, {Component} from "react";

import html from "../../image/html.png";
import css from "../../image/css.png";
import react from "../../image/react.png";
import git from "../../image/git.png";
import js from "../../image/js.png";
import mongodb from "../../image/mongodb.png";
import mysql from "../../image/mysql.png";
import node from "../../image/node.png";
import npm from "../../image/npm.png";
import sass from "../../image/sass.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./technology.css"

export default class Technology extends Component {

    animate = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            animateTechnology: this.props.animateTechnology,
            endAnimate: false
        }
    }
    componentDidMount = () => {
    //     document.addEventListener('scroll', () => {
    //     if(this.props.animateTechnology && !this.state.endAnimate) {
    //         console.log("!!!!")
    //         this.animate.current.scrollTo({
    //             left: this.animate.current.offsetWidth,
    //             behavior: 'smooth'     
    //         })
    //         // this.animate.current.scrollLeft += 20;
    //         this.setState({
    //             endAnimate: true,
    //           })
    //     }
    // });
    }


    render() {
        return(
            <React.Fragment>
                <Container style={{"minHeight": "100vh"}}>
                <Row >

                </Row>
                </Container>
            </React.Fragment>
        )
    }
}