import React from 'react';
import './About.css';
import './AboutMedia.css';
// import aboutData from "./AboutData";
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {checkAdmin} from "../../functions/checkAdmin";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";

const About = ({lang}) => {

    const admin = checkAdmin()

    //get link
    const getink = (id) =>{
        const block = id===0?'firstBlock':id===1?'secondBlock':'thirdBlock';
        return `/pageData/about/${lang}/${block}`
    }

    //data from database
    const data = useGetData(`/pageData/about/${lang}`)

    //title
    const setDataInDBTitle = (value,url) =>{
        update(ref(realtimeDB,url),{
            title:value
        })
    }

    //text
    const setDataInDBText = (value,url) =>{
        update(ref(realtimeDB,url),{
            text:value
        })
    }

    return (
        <div className={'About'} id={'about'}>

            <Fade delay={500}>
                <img className={'bg-info-years'} src="/images/about/bg.svg" alt=""/>
            </Fade>

            <div className="container">

                <Fade delay={100}>
                    <div className="content">
                        {
                            Object.values(data).length?
                                Object.values(data).map((elem,ids) =>(
                                <div className="block" key={ids}>
                                    <img src={elem.img} alt=""/>
                                    <span>
                                        {
                                            admin?
                                                <input
                                                    value={elem.title}
                                                    onChange={(e) => setDataInDBTitle(e.target.value,getink(ids,'title'))}
                                                />:
                                                <h4>{elem.title}</h4>
                                        }
                                        {
                                            admin?
                                                <textarea
                                                    className={'mt-2 small'}
                                                    value={elem.text}
                                                    rows={10}
                                                    onChange={(e) => setDataInDBText(e.target.value,getink(ids,'text'))}
                                                />:
                                                <p>{elem.text}</p>
                                        }
                                    </span>
                                </div>
                            )):<Spinner animation={"border"} variant={"light"} />
                        }
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;