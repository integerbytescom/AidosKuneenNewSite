import React from 'react';
import './Faq.css';
import './FaqMedia.css';
import {Accordion, Spinner} from "react-bootstrap";
// import faqData from "./FaqData";
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {checkAdmin} from "../../functions/checkAdmin";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB} from "../../functions/getLinkForDB";

const Faq = ({lang}) => {

    const admin = checkAdmin();

    const data = useGetData(`pageData/accordionFAQ/${lang}`)
    // console.log(data,'accordionFAQ data')

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
        <div className={`Faq container`}>

            {/*<h1>FAQ</h1>*/}

            <Fade>
            <Accordion id={'faq'} defaultActiveKey="1" flush>
                {
                    Object.values(data).length?
                        Object.values(data).map((elem) =>(
                        <Accordion.Item eventKey={elem.id} key={elem.id}>
                            <Accordion.Header>
                                {
                                    admin?
                                        <input
                                            value={elem.title}
                                            className={'admin-red w-100 mx-3'}
                                            onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(elem.id,'accordionFAQ'))}
                                        />:
                                        elem.title
                                }
                            </Accordion.Header>
                            <Accordion.Body>
                                {
                                    admin?
                                        <textarea
                                            rows={4}
                                            value={elem.text}
                                            className={'admin-red w-75 mx-3'}
                                            onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(elem.id,'accordionFAQ'))}
                                        />:
                                        elem.text
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )):
                    <Spinner animation={"border"} variant={"light"} />
                }
            </Accordion>
            </Fade>

        </div>
    );
};

export default Faq;