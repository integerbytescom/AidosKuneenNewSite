import React from 'react';
import './About.css';
import './AboutMedia.css';
import aboutData from "./AboutData";
import {Fade} from "react-awesome-reveal";

const About = ({lang}) => {
    return (
        <div className={'About'} id={'about'}>

            <Fade delay={500}>
                <img className={'bg-info-years'} src="/images/about/bg.svg" alt=""/>
            </Fade>

            <div className="container">
                {/*<h1>*/}
                {/*    {*/}
                {/*        lang==='ru'?'Про нас':*/}
                {/*            lang==='en'?'About us':'Über uns'*/}
                {/*    }*/}
                {/*</h1>*/}

                <Fade delay={100}>
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
                </Fade>
            </div>
        </div>
    );
};

export default About;