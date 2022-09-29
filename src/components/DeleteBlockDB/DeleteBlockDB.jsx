import React from 'react';
import {Button} from "react-bootstrap";
import {realtimeDB} from "../../database/connect";
import {ref, remove} from "firebase/database";

const DeleteBlockDB = ({url}) => {

    // console.log(url,'delete this block')

    const handleDeleteBlock = () =>{
        return remove(ref(realtimeDB,url))
    }

    return (
        <>
            <Button
                onClick={handleDeleteBlock}
                variant={"outline-danger"}
                className={'mx-3'}
            >
                Delete
            </Button>
        </>
    );
};

export default DeleteBlockDB;
