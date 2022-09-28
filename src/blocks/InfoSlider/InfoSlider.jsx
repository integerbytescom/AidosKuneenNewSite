import React, {useState} from 'react';
import './InfoSlider.css';
import './InfoSliderMedia.css';
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";

const InfoSlider = ({lang}) => {

    //active num for slider info show
    const [activeNum,setActiveNum] = useState(1)

    //data from database
    const data = useGetData(`/pageData/infoSlider/${lang}`)
    console.log(data)

    //spinner return
    const spinnerLight = () =>{
        return(
            <Spinner animation={"border"} variant={"light"} />
        )
    }

    return (
        <Fade delay={500}>
        <div className={`InfoSlider`}>
                
            <header className={`container`}>
                <div className="content">
                    <div
                        className={`block ${activeNum===1?'active':''}`}
                        onClick={() => setActiveNum(1)}
                    >
                        <span>01</span>
                        <h4>IMesh<br />AidosMesh</h4>
                    </div>
                    <div
                        className={`block ${activeNum===2?'active':''}`}
                        onClick={() => setActiveNum(2)}
                    >
                        <span>02</span>
                        <h4>ADK vs <br/>Blockchain</h4>
                    </div>
                    <div
                        className={`block ${activeNum===3?'active':''}`}
                        onClick={() => setActiveNum(3)}
                    >
                        <span>03</span>
                        <h4>Transaction <br/>System</h4>
                    </div>
                </div>
            </header>

            <div className="content">
                <div className="container">

                    <img src="/images/info-slider/card.svg" alt=""/>

                    {
                        Object.values(data).length?
                            <div className="info">
                                {
                                    activeNum === 1? <p>{data['firstBlock'].text}</p>:
                                        activeNum === 2?
                                            <p>{data['secondBlock'].text}</p>:
                                            <p>{data['thirdBlock'].text}</p>
                                }
                            </div>:spinnerLight()
                    }
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default InfoSlider;