import React from 'react';
import {Modal} from "react-bootstrap";
import './InfoYearsModal.css';

const InfoYearsModal = ({show,onHide,info}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            className={`InfoYearsModal`}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {info.year}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <hr/>
                <h5>{info.title}</h5>
                <p>{info.text}</p>
            </Modal.Body>
        </Modal>
    );
};

export default InfoYearsModal;