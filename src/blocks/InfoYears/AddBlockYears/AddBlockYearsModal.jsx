import React, {useState} from 'react';
import {Alert, Badge, Button, Form, Modal} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/connect";

const AddBlockYearsModal = ({show,onHide,getLastId,lang}) => {

    //for data from form
    const [dataForm,setDataForm] = useState({
        title: '',
        text: '',
        year: '',
    })

    //for message after form
    const [res,setRes] = useState('')

    const handleChangeInput = (value,inp) => {
        const copy = Object.assign({},dataForm)
        copy[inp] = value;
        setDataForm(copy)
    }

    //set year in database
    const addNewBlock = e =>{
        e.preventDefault()
        set(ref(realtimeDB,`/pageData/infoYears/${lang}/${getLastId()[1]}`),{
            id: getLastId()[0],
            year: dataForm.year,
            title: dataForm.title,
            text: dataForm.text,
        })
        .then(() =>setRes('Block has been added'))
        .catch(err => setRes('Error: ' + err.message))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Badge bg={"secondary"}>
                    <h5 className={"m-0"}>Enter info for the block you want to add</h5>
                </Badge>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={addNewBlock} className={`border p-3 border`}>
                    <input
                        className={'admin-red light my-1 p-3 w-100'}
                        placeholder="Enter year"
                        onChange={e => handleChangeInput(e.target.value,'year')}
                    />

                    <input
                        className={'admin-red light my-1 p-3 w-100'}
                        placeholder="Enter title"
                        onChange={e => handleChangeInput(e.target.value,'title')}
                    />

                    <textarea
                        className={'admin-red light my-1 p-3 w-100'}
                        placeholder="Enter text"
                        onChange={e => handleChangeInput(e.target.value,'text')}
                        rows={4}
                    />

                    <Button variant="outline-success" type="submit" className={'w-100'}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            {/*result sub form*/}
            {res && <Alert className={'mx-3'} variant={"secondary"}>{res}</Alert>}

            <Modal.Footer>
                <Button onClick={onHide} variant={"secondary"}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBlockYearsModal;
