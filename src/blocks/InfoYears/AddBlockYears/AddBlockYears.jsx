import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import AddBlockYearsModal from "./AddBlockYearsModal";
import {numbers} from "../../../functions/getLinkForDB";

const AddBlockYears = ({data,lang}) => {

    //get last id from infoYears slider database data
    const getLastId = () =>{
        const objVal = Object.values(data).sort((a,b) => a.id - b.id);
        const lenArr = objVal.length;
        const newId = (objVal[lenArr - 1].id) + 1;
        const newIdStr = numbers[newId]
        return [newId,newIdStr]
    }

    const [showModal,setShowModal] = useState(false)

    return (
        <div className={`AddBlockYears w-100 pb-5 d-flex justify-content-center`}>
            <Button onClick={() => setShowModal(true)}>
                Add block for years slider
            </Button>

            <AddBlockYearsModal
                show={showModal}
                onHide={() => setShowModal(false)}
                getLastId={getLastId}
                lang={lang}
            />
        </div>
    );
};

export default AddBlockYears;
