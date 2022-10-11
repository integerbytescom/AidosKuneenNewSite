import React, {useState} from 'react';
import {Badge, Button, Form, FormControl, Modal} from "react-bootstrap";
import {uploadImage} from "../../../../functions/uploadImage";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../../database/connect";

const TradeAddBlockModal = ({show,onHide,lastId}) => {

    const [dataForm,setDataForm] = useState({
        link:'',
        image:'',
    });

    // console.log(dataForm)

    //for change form inputs
    const handleChangeForm = (value,input) =>{
        const copy = Object.assign({}, dataForm)
        copy[input] = value
        setDataForm(copy)
    }

    const handleAddBlock = e => {
        e.preventDefault();
        set(ref(realtimeDB,`/pageData/trade/${lastId[1]}`),{
            id: lastId[0],
            link:dataForm.link,
        })
        .then(uploadImage(dataForm.image,lastId[0]))
        .then(setDataForm({link: '', image: ''}))
        .then(onHide)
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

                <Form onSubmit={handleAddBlock}>
                    <FormControl
                        placeholder={"Enter link"}
                        className={'mb-1'}
                        size={"sm"}
                        value={dataForm.link}
                        onChange={e => handleChangeForm(e.target.value,'link')}
                    />

                    <FormControl
                        className={'mb-1'}
                        size={"sm"}
                        type="file"
                        onChange={e => handleChangeForm(e.target.files[0],'image')}
                    />
                    <Button size={"sm"} type={"submit"}>Add block</Button>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TradeAddBlockModal;
