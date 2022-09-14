import React from 'react';
import './InfoYears.css';
import './InfoYearsMedia.css';
import infoYearsData from "./InfoYearsData";
import {Fade} from "react-awesome-reveal";

const InfoYears = () => {
    return (
        <Fade delay={500}>

        <Fade delay={1000}>
            <img className={'bg-info-years'} src="/images/about/bg.svg" alt=""/>
        </Fade>


        <div className={`InfoYears`}>
            {
                infoYearsData.map(elem =>(
                    <>
                        <div key={elem.id} className="block">
                            <span>{elem.year}</span>
                            <div>
                                <p className={`title ${elem.active?'active':''}`}>{elem.title}</p>
                                <p>{elem.text}</p>
                            </div>
                        </div>
                        <div className={'line'}/>
                    </>
                ))
            }
        </div>
        </Fade>
    );
};

export default InfoYears;