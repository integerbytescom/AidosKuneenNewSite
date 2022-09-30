import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {realtimeDB} from "../../database/connect";
import {ref, remove} from "firebase/database";

const DeleteBlockDB = ({url}) => {

    // console.log(url,'delete this block')

    const [confirm,setConfirm] = useState(false)

    //for delete block from db
    const handleDeleteBlock = () =>{
        return remove(ref(realtimeDB,url))
    }

    return (
        <>
            {
                !confirm?
                    <Button
                        onClick={() => setConfirm(true)}
                        variant={"outline-danger"}
                        className={'mt-1'}
                        size={"sm"}
                    >
                        Delete this block
                    </Button>:
                    <Button
                        onClick={handleDeleteBlock}
                        variant={"success"}
                        className={'mt-1'}
                        size={"sm"}
                    >
                        Confirm delete
                    </Button>
            }
        </>
    );
};

export default DeleteBlockDB;
