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

                <Container className="technologyContainer" style={{"minHeight": "100vh"}}>
                    <div className="technologyFishContainer technologyFish-1">
                        <div className="technologyFishBody technologyFishColor-1">
                            <div className="technologyFin technologyFishColor-1"></div>
                            <div className="technologyFinBottom technologyFishColor-1"></div>
                            <div className="technologyFishEye"></div>
                        </div>
                    </div>
                    <div className="technologyFishContainer technologyFish-2">
                        <div className="technologyFishBody technologyFishColor-2">
                            <div className="technologyFin technologyFishColor-2"></div>
                            <div className="technologyFinBottom technologyFishColor-2"></div>
                            <div className="technologyFishEye"></div>
                        </div>
                    </div>
                    <div className="technologyFishContainer technologyFish-3">
                        <div className="technologyFishBody technologyFishColor-3">
                            <div className="technologyFin technologyFishColor-3"></div>
                            <div className="technologyFinBottom technologyFishColor-3"></div>
                            <div className="technologyFishEye"></div>
                        </div>
                    </div>
                    <div id="bubbles">
                        <div className="bubble x1"></div>
                        <div className="bubble x2"></div>
                        <div className="bubble x3"></div>
                        <div className="bubble x4"></div>
                        <div className="bubble x5"></div>
                    </div>
                    <div className="technologyText">About Me</div>
                </Container>
            </React.Fragment>
        )
    }
}