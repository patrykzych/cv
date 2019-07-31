import React, {Component} from "react";

import html from "../../image/html.png";
import css from "../../image/css.png";
import react from "../../image/react.png";

import "./technology.css"

export default class Technology extends Component {
    
    render() {
        return(
            <React.Fragment>
                <div className="technology">
                    <div className="backgroundTechnology"></div>
                    <div className="technologyText">Technology.</div>
                    <div className="technologyContainer">
                        <div className="technologyBlock"><div className="technologyName">html</div><img src={html} alt="html" /></div>
                        <div className="technologyBlock"><div className="technologyName">css</div><img src={css} alt="css" /></div>
                        <div className="technologyBlock"><div className="technologyName">react</div><img src={react} alt="react" /></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}