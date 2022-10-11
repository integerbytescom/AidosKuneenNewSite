import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import AddBlockInfoModal from "./AddBlockInfoModal";
import {getLastId} from "../../../functions/getLastId";

const AddBlockInfo = ({data,lang}) => {

    const [showModal,setShowModal] = useState(false)

    return (
        <div className={'w-75 mt-3 d-flex justify-content-end'}>

            <Button
                size={"sm"}
                variant={"outline-success"}
                className={`mx-3`}
                onClick={() => setShowModal(true)}
            >
                Add block
            </Button>

            <AddBlockInfoModal lang={lang} show={showModal} onHide={() => setShowModal(false)} newId={getLastId(data)} />
        </div>
    );
};

export default AddBlockInfo;