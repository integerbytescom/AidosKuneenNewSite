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
import {getLinkForDB} from "../../functions/getLinkForDB";

const About = ({lang}) => {

    //check admin
    const admin = checkAdmin()

    //data from database
    const data = useGetData(`/pageData/about/${lang}`)

    //set title in database
    const setDataInDBTitle = (value,url) =>{
        return update(ref(realtimeDB,url),{
            title:value
        })
    }
    //set text in database
    const setDataInDBText = (value,url) =>{
        return update(ref(realtimeDB,url),{
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
                                Object.values(data).map(elem =>(
                                <div className="block" key={elem.id}>
                                    <img src={elem.img} alt=""/>
                                    <span>
                                        {
                                            admin?
                                                <input
                                                    className={`admin-red`}
                                                    value={elem.title}
                                                    onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(elem.id,'about'))}
                                                />:
                                                <h4>{elem.title}</h4>
                                        }
                                        {
                                            admin?
                                                <textarea
                                                    className={'admin-red mt-2 small'}
                                                    value={elem.text}
                                                    rows={10}
                                                    onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(elem.id,'about'))}
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