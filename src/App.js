import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Menu from "./component/Menu";
import Image from "./component/Image";
import Technology from "./component/Technology";
import About from "./component/About";

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animateTechnology: false,  
    }
  }

  technology = React.createRef();
  home = React.createRef();
  about = React.createRef();
  image = React.createRef();

  componentDidMount = () => {
    var technologyTop = ReactDOM.findDOMNode(this.technology.current)
    .getBoundingClientRect();
    var imageTop = ReactDOM.findDOMNode(this.image.current)
    .getBoundingClientRect();
    var aboutTop = ReactDOM.findDOMNode(this.about.current)
    .getBoundingClientRect();
    this.setState({
      technologyTop: technologyTop.top,
      imageTop: imageTop.top,
      aboutTop: aboutTop.top,
    })
    document.addEventListener('scroll', () => {
      if(window.scrollY >= this.state.aboutTop-50) {
        this.setState({
          animateTechnology: true,
        })
      }
    });
  }
  

  handleScrollToStats = (reff) => {
    window.scrollTo({
        top: reff.current.offsetTop,
        behavior: 'smooth'     
    })
}

  render() {
    return (
      <div class="container" ref={this.home}>
        <Menu home={this.home} technology={this.technology} about={this.about} executeScroll={this.handleScrollToStats}/>
        <div className="space underMenu" ></div>
        <Image ref={this.image} />
        <div className=""  ref={this.technology} ></div>
        <div className="" ref={this.about} ></div>
        <About toTop={this.state.aboutTop} animateTechnology={this.state.animateTechnology}/>
        <div className="" ref={this.technology}></div>
        <Technology  />
      </div>
    );
  }
}

export default App;
