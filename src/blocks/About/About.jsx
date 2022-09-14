import React from 'react';
import './About.css';
import './AboutMedia.css';
import aboutData from "./AboutData";
import {Slide} from "react-awesome-reveal";

const About = ({lang}) => {
    return (
        <div className={'About'} id={'about'}>

            <div className="container">
                <h1>
                    {
                        lang==='ru'?'Про нас':
                            lang==='en'?'About us':'Über uns'
                    }
                </h1>
                <Slide direction={'up'}>
                    <div className="content">
                        {
                            aboutData.map(elem =>(
                                <div className="block" key={elem.id}>
                                    <img src={elem.img} alt=""/>
                                    <span>
                                        <h4>{elem.title}</h4>
                                        <p>{elem.text}</p>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default About;