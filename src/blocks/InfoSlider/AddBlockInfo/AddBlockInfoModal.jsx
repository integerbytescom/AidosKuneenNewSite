import React, {useState} from 'react';
import {Badge, Button, Form, FormControl, Modal} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/connect";
import {numbers} from "../../../functions/getLinkForDB";

const AddBlockInfoModal = ({show,onHide,newId,lang}) => {

    //data from form
    const [formData,setFormData] = useState({
        title:'',
        text:'',
    })

    console.log(formData)

    //change inputs
    const handleChange = (elem,value) =>{
        const copy = Object.assign({},formData);
        copy[elem] = value;
        setFormData(copy)
    }

    const addInfoBlock = e =>{
        e.preventDefault()
        return set(ref(realtimeDB,`/pageData/infoSlider/${lang}/${numbers[newId[0]]}`),{
            id:newId[0],
            titleNum:newId[0] + 1,
            title:formData.title,
            text:formData.text,
        })
            .then(onHide())
            .catch(err => alert(err))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h4 className={`m-0`}>
                    <Badge bg={"secondary"}>Add block in info years slider</Badge>
                </h4>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        placeholder={'Enter title'}
                        onChange={e => handleChange('title',e.target.value)}
                    />
                    <FormControl
                        as={"textarea"}
                        rows={5}
                        placeholder={'Enter text'}
                        className={'mt-2'}
                        onChange={e => handleChange('text',e.target.value)}
                    />
                    <Button onClick={addInfoBlock} size={"sm"} variant={"outline-success"} className={'w-100 mt-2'}>
                        Add block
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} size={"sm"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBlockInfoModal;