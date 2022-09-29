import React, {useEffect, useState} from 'react';
import {Alert, Badge, Button, Form} from "react-bootstrap";
import './AdminCheckForm.css';
import { useNavigate } from 'react-router-dom'
import {useGetData} from "../../hooks/useGetData";

export let GLOBAL_HASH = '';

const AdminCheckForm = () => {

    const navigate = useNavigate()

    const dataAdmin = useGetData('/adminData/admin1')
    // console.log(dataAdmin,'dataAdmin')

    //for data form (inputs text)
    const [dataForm,setDataForm] = useState({log:'',pas:''});
    //data form checkbox
    const [checkRemember,setCheckRemember] = useState(false)

    //errors
    const [error,setError] = useState('')

    //change input
    const handleChangeInput = (value,stateValue) =>{
        const copy = Object.assign({},dataForm)
        copy[stateValue] = value;
        setDataForm(copy)
    }

    const handleSendForm = async (e) =>{
        e.preventDefault()
        GLOBAL_HASH = dataAdmin['hashPassword']
        if (dataForm.log === dataAdmin["login"] && dataForm.pas === dataAdmin["password"]){
            if (checkRemember){
                window.localStorage.setItem('admin',dataAdmin['hashPassword'])
            }
            window.sessionStorage.setItem('admin',dataAdmin['hashPassword'])
            navigate('/admin/success')
        }else {
            setError('Incorrect login or password')
            setDataForm({log:'',pas:''})
            setTimeout(() => navigate('/'),2000)
        }
    }

    useEffect(() =>{

    },[dataAdmin])

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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="To remember me"
                    value={checkRemember}
                    onClick={() => setCheckRemember(!checkRemember)}
                />
            </Form.Group>

            <Button variant="primary" size={"sm"} type="submit">
                Enter
            </Button>
        </Form>
    );
};

export default AdminCheckForm;