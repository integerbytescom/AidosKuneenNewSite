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

    //for header block with big num
    const getHeaderBlock = (actNum,num,text) => {
        return(
            <div
                className={`block ${activeNum===actNum?'active':''}`}
                onClick={() => setActiveNum(actNum)}
            >
                <span>0{num}</span>
                <h4>
                    {text.slice(0,text.lastIndexOf(' '))}
                    <br />
                    {text.slice(text.lastIndexOf(' '),text.length)}
                </h4>
            </div>
        )
    }
    //for header block for admin
    const getHeaderBlockAdmin = (id,actNum,num,text) => {
        return(
            <div
                className={`block ${activeNum===actNum?'active':''}`}
                onClick={() => setActiveNum(actNum)}
            >
                <input
                    value={num}
                    className={'admin-red mx-2 w-25'}
                    onChange={(e) => setDataInDBNumTitle(e.target.value,getLinkForDB(id,'infoSlider'))}
                />
                <input
                    value={text}
                    className={'admin-red mx-2 mt-2 w-75'}
                    onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(id,'infoSlider'))}
                />
            </div>
        )
    }
    //for get textarea for admin
    const getAdminTextarea = (blockNum,id) =>{
        return(
            <textarea
                rows={11}
                className={`admin-red w-100`}
                value={data[blockNum].text}
                onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(id,'infoSlider'))}
            />
        )
    }

    return (
        <Fade delay={500}>
        <div className={`InfoSlider`}>
                
            <header className={`container`}>
                <div className="content">
                    {
                        Object.values(data).length?
                            Object.values(data)
                                .sort((a,b) => a.id - b.id)
                                .map(elem =>(
                                admin?
                                    getHeaderBlockAdmin(elem.id,elem.id + 1,elem["titleNum"],elem.title):
                                    getHeaderBlock(elem.id + 1,elem["titleNum"],elem.title)
                            )):''
                    }
                </div>
            </header>

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