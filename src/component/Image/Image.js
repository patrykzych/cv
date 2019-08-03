import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./image.css";

class Image extends Component {
    ref = React.createRef();

    componentDidMount = () => {
        const { current } = this.ref;
        window.addEventListener('scroll', function(e){
            var scrolled = window.pageYOffset;
            var coords = '0% '+ (- (scrolled *0.25) + 'px');
            current.style.backgroundPosition  = coords;
          });
    };

    render() {
        return (
            <div className="mainImageContainer">    
                <div className="mainImage" ref={this.ref} ></div>
                <div className="textImage">Web Developer</div>
            </div>
        )
    }
}

export default Image;