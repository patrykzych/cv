import React, {Component} from 'react';

import Menu from "./component/Menu";
import Image from "./component/Image";
import Technology from "./component/Technology";

import logo from './logo.svg';
import './App.css';

class App extends Component {

  technology = React.createRef();
  home = React.createRef();
  
  handleScrollToStats = (reff) => {
    window.scrollTo({
        top: reff.current.offsetTop,
        behavior: 'smooth'     
    })
}

  render() {
    return (
      <div ref={this.home}>
        <Menu home={this.home} technology={this.technology} executeScroll={this.handleScrollToStats}/>
        <div className="space" ></div>
        <Image />
        <div className="space" ref={this.technology}></div>
        <Technology />
      </div>
    );
  }
}

export default App;
