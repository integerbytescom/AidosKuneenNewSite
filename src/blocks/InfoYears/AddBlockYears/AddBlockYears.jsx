import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import AddBlockYearsModal from "./AddBlockYearsModal";
import {getLastId} from "../../../functions/getLastId";

const AddBlockYears = ({data,lang}) => {

    const [showModal,setShowModal] = useState(false)

    return (
        <div className={`AddBlockYears w-100 pb-5 d-flex justify-content-center`}>
            <Button onClick={() => setShowModal(true)} size={"sm"} variant={"secondary"}>
                Add block for years slider
            </Button>

            <AddBlockYearsModal
                show={showModal}
                onHide={() => setShowModal(false)}
                getLastId={getLastId(data)}
                lang={lang}
            />
        </div>
    );
};

export default AddBlockYears;
