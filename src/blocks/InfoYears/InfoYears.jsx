import React from 'react';
import './InfoYears.css';
import './InfoYearsMedia.css';
import infoYearsData from "./InfoYearsData";

const InfoYears = () => {
    return (
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
    );
};

export default InfoYears;