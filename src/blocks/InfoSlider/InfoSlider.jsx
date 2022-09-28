import React, {useState} from 'react';
import './InfoSlider.css';
import './InfoSliderMedia.css';
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {checkAdmin} from "../../functions/checkAdmin";
import {getLinkForDB} from "../../functions/getLinkForDB";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";

const InfoSlider = ({lang}) => {

    //check admin
    const admin = checkAdmin()

    //active num for slider info show
    const [activeNum,setActiveNum] = useState(1)

    //data from database
    const data = useGetData(`/pageData/infoSlider/${lang}`)

    //spinner return
    const spinnerLight = () =>{
        return(
            <Spinner animation={"border"} variant={"light"} />
        )
    }

    //for header block with big num
    const getHeaderBlock = (actNum,num,textPr,textAft) => {
        return(
            <div
                className={`block ${activeNum===actNum?'active':''}`}
                onClick={() => setActiveNum(actNum)}
            >
                <span>{num}</span>
                <h4>{textPr}<br />{textAft}</h4>
            </div>
        )
    }

    const setDataInDB = (value,url) => {
        return update(ref(realtimeDB,url),{
            text:value
        })
    }

    //for get textarea for admin
    const getAdminTextarea = (blockNum,id) =>{
        return(
            <textarea
                rows={11}
                className={`admin-red w-100`}
                value={data[blockNum].text}
                onChange={(e) => setDataInDB(e.target.value,getLinkForDB(id,'infoSlider'))}
            />
        )
    }

    return (
        <Fade delay={500}>
        <div className={`InfoSlider`}>
                
            <header className={`container`}>
                <div className="content">
                    {getHeaderBlock(1,'01','IMesh','AidosMesh')}
                    {getHeaderBlock(2,'02','ADK vs ','Blockchain')}
                    {getHeaderBlock(3,'03','Transaction ','System')}
                </div>
            </header>

            <div className="content">
                <div className="container">

                    <img src="/images/info-slider/card.svg" alt=""/>

                    {
                        Object.values(data).length?
                            <div className="info">
                                {
                                    activeNum === 1?
                                        <>{
                                                admin?
                                                    getAdminTextarea('firstBlock',0) :
                                                    <p>{data['firstBlock'].text}</p>
                                        }</>:
                                        activeNum === 2?
                                            <>{
                                                    admin?
                                                        getAdminTextarea('secondBlock',1):
                                                        <p>{data['secondBlock'].text}</p>
                                            }</>:
                                            <>{
                                                    admin?
                                                        getAdminTextarea('thirdBlock',2):
                                                        <p>{data['thirdBlock'].text}</p>
                                            }</>
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