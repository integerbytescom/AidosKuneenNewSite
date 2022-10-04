import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import AddBlockInfoModal from "./AddBlockInfoModal";
import {getLastId} from "../../../functions/getLastId";

const AddBlockInfo = ({data,lang}) => {

    const [showModal,setShowModal] = useState(false)

    return (
        <>
            <Button
                size={"sm"}
                variant={"secondary"}
                className={`mx-3`}
                onClick={() => setShowModal(true)}
            >
                Add block
            </Button>

            <AddBlockInfoModal lang={lang} show={showModal} onHide={() => setShowModal(false)} newId={getLastId(data)} />
        </>
    );
};

export default AddBlockInfo;