import React, {useState} from 'react';
import {Alert, Badge, Button, Form} from "react-bootstrap";
import './AdminCheckForm.css';

const AdminCheckForm = ({}) => {

    const dataAdmin = {log:'admin',pas:'cjdsv2233'};
    const [dataForm,setDataForm] = useState({log:'',pas:''});

    const [error,setError] = useState('')

    const handleChangeInput = (value,stateValue) =>{
        const copy = Object.assign({},dataForm)
        copy[stateValue] = value;
        setDataForm(copy)
    }

    const handleSendForm = async (e) =>{
        e.preventDefault()
        if (dataForm.log === dataAdmin.log && dataForm.pas === dataAdmin.pas){
            alert("Welcome!")
        }else {
            setError('Incorrect login or password')
            setDataForm({log:'',pas:''})
        }
    }

    return (
        <Form className={`AdminCheckForm`} onSubmit={e =>handleSendForm(e)} >

            {error && <Alert className={'mb-2'} variant={`danger`}>{error}</Alert>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <Badge>Login</Badge>
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter login"
                    value={dataForm.log}
                    onChange={e => handleChangeInput(e.target.value,'log')}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    <Badge>Password</Badge>
                </Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={dataForm.pas}
                    onChange={e => handleChangeInput(e.target.value,'pas')}
                />
            </Form.Group>

            {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
            {/*    <Form.Check type="checkbox" label="To remember me" />*/}
            {/*</Form.Group>*/}

            <Button variant="primary" size={"sm"} type="submit">
                Enter
            </Button>
        </Form>
    );
};

export default AdminCheckForm;