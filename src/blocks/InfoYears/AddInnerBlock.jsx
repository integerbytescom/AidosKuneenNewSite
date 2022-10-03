import React from 'react';
import {Button} from "react-bootstrap";
import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {numbers} from "../../functions/getLinkForDB";

const AddInnerBlock = ({data,lang,elemID}) => {

    const lastIndex = () =>{
        return Number(Object.keys(data).sort((a,b) => Number(b) - Number(a))[0])
    }
    // console.log(lastIndex());

    // set year in database
    const addNewInnerBlock = e =>{
        e.preventDefault()
        return set(ref(realtimeDB,`/pageData/infoYears/${lang}/${numbers[elemID]}/titles/${lastIndex() + 1}`),{
            title:'',
            text:'',
        })
    }

    return (
        <Button className={'mx-2 mt-1'} onClick={addNewInnerBlock} size={"sm"}>Add inner block</Button>
    );
};

export default AddInnerBlock;
