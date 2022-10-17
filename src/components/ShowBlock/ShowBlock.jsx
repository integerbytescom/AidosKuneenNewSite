import React from 'react';
import {Alert, Form} from "react-bootstrap";
import {useGetData} from "../../hooks/useGetData";
import {ref as refRlt, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";

const ShowBlock = ({block}) => {

    const hideDB = useGetData(`/pageData/hideBlocks/${block}`);
    // console.log(hideDB,'hide block')

    //set hide in database
    const setHideInDB = () =>{
        return update(refRlt(realtimeDB,`/pageData/hideBlocks/${block}/`),{
            hide:!hideDB.hide,
        })
    }

    if (!hideDB || !Object.values(hideDB).length){
        return (
            <Alert className={'small p-2'}>
                Wait for database response to change block display
            </Alert>
        )
    }

    return (
        <Form.Check
            style={{color:"white"}}
            checked={hideDB ? hideDB.hide : false}
            onChange={setHideInDB}
            type="switch"
            id="custom-switch"
            label="Hide this block"
        />
    );
};

export default ShowBlock;