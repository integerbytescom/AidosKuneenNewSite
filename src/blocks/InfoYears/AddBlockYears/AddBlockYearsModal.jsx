import React, {useState} from 'react';
import {Alert, Badge, Button, Form, FormControl, Modal} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/connect";

const AddBlockYearsModal = ({show,onHide,getLastId,lang}) => {

    //for data from form
    const [dataFormYear,setDataFormYear] = useState('')

    //for message after form
    const [res,setRes] = useState('')

    //set year in database
    const addNewBlock = e =>{
        e.preventDefault()
        set(ref(realtimeDB,`/pageData/infoYears/${lang}/${getLastId[1]}`),{
            id: getLastId[0],
            year: dataFormYear,
            titles:{
                0:{title:'',text:''}
            }
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
                <Form onSubmit={addNewBlock}>
                    <FormControl
                        className={'my-1 w-100'}
                        placeholder="Enter year"
                        onChange={e => setDataFormYear(e.target.value)}
                    />

                    <Button variant="outline-success" type="submit" className={'w-100'} size={"sm"}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            {/*result sub form*/}
            {res && <Alert className={'mx-3'} variant={"secondary"}>{res}</Alert>}

            <Modal.Footer>
                <Button onClick={onHide} variant={"secondary"} size={"sm"}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBlockYearsModal;
