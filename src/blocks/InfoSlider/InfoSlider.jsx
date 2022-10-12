import React, {useState} from 'react';
import './InfoSlider.css';
import './InfoSliderMedia.css';
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {checkAdmin} from "../../functions/checkAdmin";
import {getLinkForDB, numbers} from "../../functions/getLinkForDB";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import AddBlockInfo from "./AddBlockInfo/AddBlockInfo";
import InfoSliderHeader from "./InfoSliderHeader";

const InfoSlider = ({lang}) => {

    //check admin
    const admin = checkAdmin()

    //active num for slider info show
    const [activeNum,setActiveNum] = useState(1)

    //data from database
    const data = useGetData(`/pageData/infoSlider/${lang}`)
    // console.log(data,'InfoSlider')

    //spinner return
    const spinnerLight = () =>{
        return(
            <Spinner animation={"border"} variant={"light"} />
        )
    }

    //set data in db functions
    const setDataInDBNumTitle = (value,url) => {
        return update(ref(realtimeDB,url),{
            titleNum:value
        })
    }
    const setDataInDBTitle = (value,url) => {
        return update(ref(realtimeDB,url),{
            title:value
        })
    }
    const setDataInDBText = (value,url) => {
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
                value={data[blockNum]?data[blockNum].text:''}
                onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(id,'infoSlider'))}
            />
        )
    }

    return (
        <Fade delay={500}>
        <div className={`InfoSlider`}>

            <InfoSliderHeader
                data={data}
                admin={admin}
                activeNum={activeNum}
                setActiveNum={setActiveNum}
                setDataInDBTitle={setDataInDBTitle}
                setDataInDBNumTitle={setDataInDBNumTitle}
            />

            {
                admin && Object.values(data).length?
                <AddBlockInfo data={data} lang={lang} />:false
            }

            <div className="content">
                <div className="container">

                    <img src="/images/info-slider/card.svg" alt="adk card"/>

                    {
                        Object.values(data).length?
                            <div className="info">
                                {
                                    admin?
                                        getAdminTextarea(numbers[activeNum - 1],activeNum - 1):
                                        <p>{data[numbers[activeNum - 1]].text}</p>
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