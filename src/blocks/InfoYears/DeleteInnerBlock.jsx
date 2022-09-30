import React from 'react';
import {Button} from "react-bootstrap";
import {ref, remove} from "firebase/database";
import {realtimeDB} from "../../database/connect";

const DeleteInnerBlock = ({id,url}) => {

    const handleDeleteInnerBlock = e =>{
        e.preventDefault()
        return remove(ref(realtimeDB,url))
    }

    return (
        <Button onClick={handleDeleteInnerBlock} size={"sm"} variant={'outline-danger'}>Delete {id} block</Button>
    );
};

export default DeleteInnerBlock;
