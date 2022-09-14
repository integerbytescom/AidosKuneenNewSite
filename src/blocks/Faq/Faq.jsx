import React from 'react';
import './Faq.css';
import './FaqMedia.css';
import {Accordion} from "react-bootstrap";
import faqData from "./FaqData";
import {Fade} from "react-awesome-reveal";

const Faq = () => {
    return (
        <div className={`Faq container`}>

            <Fade>
            <Accordion id={'faq'} defaultActiveKey="1" flush>
                {
                    faqData.map(elem =>(
                        <Accordion.Item eventKey={elem.id} key={elem.id}>
                            <Accordion.Header>
                                {elem.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                {elem.text}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
            </Fade>

        </div>
    );
};

export default Faq;