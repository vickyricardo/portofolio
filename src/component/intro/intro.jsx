import React from "react";
import "./intro.css";
import image from "../../img/img.png";

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Vicky Ricardo Savero</h1>
                    
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Back-End Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>

                    <div className="i-desc"> 
                    Computer science enthusiast who is highly motivated to learn new things.
                    Currently working on my software development skills in both front-end and
                    back-end development.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="i-bg"> </div>
                <img src={image} alt="" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro;
