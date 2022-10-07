import React, {useState} from 'react';
import {Alert, Badge, Button, Form, FormControl, Modal} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/connect";

const FaqAddBlockModal = ({show,onHide,lang,getLastId}) => {

    //data from form
    const [dataForm,setDataForm] = useState({title:'',text:''})

    //for res after send form
    const [res,setRes] = useState('')

    //for change form inputs
    const handleChangeForm = (value,input) =>{
        const copy = Object.assign({}, dataForm)
        copy[input] = value
        setDataForm(copy)
    }

    //set year in database
    const addNewBlock = e =>{
        e.preventDefault()
        set(ref(realtimeDB,`/pageData/accordionFAQ/${lang}/${getLastId[1]}`),{
            id: getLastId[0],
            title:dataForm.title,
            text:dataForm.text,
        })
            .then(onHide)
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
                <h3>
                    <Badge bg={"secondary"}>
                        Еnter information for the new block
                    </Badge>
                </h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={addNewBlock}>
                    <FormControl
                        required={true}
                        placeholder={'Enter title'}
                        onChange={e => handleChangeForm(e.target.value,'title')}
                    />
                    <FormControl
                        required={true}
                        as={"textarea"}
                        rows={"4"}
                        className={'mt-2'}
                        placeholder={'Enter text'}
                        onChange={e => handleChangeForm(e.target.value,'text')}
                    />
                    <Button size={"sm"} variant={"outline-success"} className={'mt-2 w-100'} type={"submit"}>Add</Button>
                </Form>
            </Modal.Body>

            {res && <Alert variant={"danger"}>{res}</Alert> }

            <Modal.Footer>
                <Button onClick={onHide} size={"sm"} variant={"secondary"}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FaqAddBlockModal;
