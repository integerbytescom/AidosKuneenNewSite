import React, {useState} from 'react';
import './Faq.css';
import './FaqMedia.css';
import {Accordion, Button, Spinner} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {checkAdmin} from "../../functions/checkAdmin";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB} from "../../functions/getLinkForDB";
import FaqAddBlockModal from "./FaqAddBlockModal";
import {getLastId} from "../../functions/getLastId";
import DeleteBlockDB from "../../components/DeleteBlockDB/DeleteBlockDB";
// import faqData from "./FaqData";

const Faq = ({lang}) => {

    const admin = checkAdmin();

    //show more state
    const [showMore,setShowMore] = useState(false);

    const data = useGetData(`/pageData/accordionFAQ/${lang}`)
    // console.log(data,'accordionFAQ data')

    //for modal add block
    const [show, setShow] = useState(false);

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
                        Object.values(data)
                            .sort((a,b) => a.id - b.id)
                            .filter(a => a.id < (showMore?Object.values(data).length : 5))
                            .map((elem) =>(
                        <Accordion.Item eventKey={elem.id} key={elem.id}>
                            <Accordion.Header>
                                {admin && <DeleteBlockDB url={getLinkForDB(elem.id,'accordionFAQ')} /> }
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

            {/*"show more accordion items"*/}
            {
                (Object.values(data).length) > 5 ?
                <div className="w-100 d-flex justify-content-center mt-4">
                    <Button
                        style={{background:'#0084F9',borderRadius:'.2em',padding:'.3em 3em'}}
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore?'Close':'Show more'}
                    </Button>
                </div>:''
            }

            {/*if admin===true show button add block*/}
            {
                admin &&
                <Button
                    onClick={() => setShow(true)}
                    size={"sm"}
                    variant={"outline-success"}
                    className={'mt-3'}
                >
                    Add block
                </Button>
            }

            </Fade>

            {
                Object.values(data).length &&
                <FaqAddBlockModal
                    show={show}
                    onHide={() => setShow(false)}
                    lang={lang}
                    getLastId={getLastId(data)}
                />
            }

        </div>
    );
};

export default Faq;