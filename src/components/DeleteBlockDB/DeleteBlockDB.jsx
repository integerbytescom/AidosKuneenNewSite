import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {realtimeDB} from "../../database/connect";
import {ref, remove} from "firebase/database";

const DeleteBlockDB = ({url,id = false,disable}) => {

    // console.log(url,'delete this block')

    const [confirm,setConfirm] = useState(false)

    //for delete block from db
    const handleDeleteBlock = () =>{
        return remove(ref(realtimeDB,url))
    }


    return (
        <>

            {
                disable?
                <p>You can't remove the last inner block from a block.</p>:
                !confirm?
                    <Button
                        disabled={disable}
                        onClick={() => setConfirm(true)}
                        variant={"danger"}
                        className={'mt-1'}
                        size={"sm"}
                    >
                        Delete {id?id:'this'} block
                        {/*<img*/}
                        {/*    width={20}*/}
                        {/*    src="/images/general/x.svg"*/}
                        {/*    alt="x"*/}
                        {/*    style={{cursor:"pointer"}}*/}
                        {/*/>*/}
                    </Button>
                    :
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
