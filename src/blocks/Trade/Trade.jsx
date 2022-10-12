import React, {useEffect, useState} from 'react';
import './Trade.css';
import './TradeMedia.css';
import dataCompanies from "./dataCompanies";
import {realtimeDB, storageDB} from "../../database/connect";
import { ref,listAll,getDownloadURL,getMetadata,deleteObject } from "firebase/storage";
import {checkAdmin} from "../../functions/checkAdmin";
import TradeApiBlock from "./components/TradeApiBlock";
import {Alert, Badge, Button, FormControl, Spinner} from "react-bootstrap";
import {numbers} from "../../functions/getLinkForDB";
import {useGetData} from "../../hooks/useGetData";
import {update, ref as refRlt, remove} from "firebase/database";
import TradeAddBlockModal from "./components/TradeAddBlock/TradeAddBlockModal";
import {getLastId} from "../../functions/getLastId";

const Trade = () => {

    const admin = checkAdmin();

    const [modalShow, setModalShow] = useState(false);

    //state for images from storageDB
    const [imageList,setImageList] = useState([]);
    // console.log(imageList,'image list from data base with sort');

    //link to images directory in databse
    const imagesRef = blockId => ref(storageDB,`/trade/${blockId}`)

    //data from database
    const dataDB = useGetData(`/pageData/trade/`);
    // console.log(dataDB,'Trade data');

    const getImage = elem =>{
        return (
            imageList.length >= Object.values(dataDB).length ?
                <img
                    style={admin?{maxHeight:30,marginTop:10,marginBottom:10}:{}}
                    src={
                        imageList.find(img => img.id === elem.id)?
                            imageList.find(img => img.id === elem.id).image:
                            <Spinner animation={"border"} variant={"success"} />
                    }
                    alt={elem.link}
                />
            : <Spinner animation={"border"} variant={"success"} />
        )
    }

    //for companies block
    const getCompanies = () =>{
        return Object.values(dataDB).map(elem =>(
            <a
                className={'circle-comp'}
                key={elem.id}
                target={'_blank'}
                href={elem.link}
                rel={'noreferrer'}
            >
                {getImage(elem)}
            </a>
        ))
    }

    //set link in database
    const setLinkInDB = (value,id) =>{
        console.log(id)
        return update(refRlt(realtimeDB,`/pageData/trade/${id}`),{
            link:value,
        })
    }

    const handleDelete = elem =>{
        const imageName = imageList.find(img => img.id === elem.id).name;
        const desertRef = ref(storageDB,`/trade/${numbers[elem.id]}/${imageName}`)
        deleteObject(desertRef)
            .then(
                remove(refRlt(realtimeDB,`/pageData/trade/${numbers[elem.id]}`))
                    .then(() => alert('Image and block were successfully deleted!'))
                    .catch(() => alert('Deletion error, check database!'))
            )
    }

    //for companies block
    const getCompaniesAdmin = () =>{
        return Object.values(dataDB)
            .sort((a,b) => a.id - b.id)
            .map(elem =>(
            <div className={'m-2 mb-4'}>

                <Badge
                    className={'mb-1'}
                    bg={"secondary"}
                >
                    Block {elem.id + 1}
                </Badge>

                <FormControl
                    size={"sm"}
                    className={'mb-1'}
                    value={elem.link}
                    onChange={e => setLinkInDB(e.target.value,numbers[elem.id])}
                    required={true}
                />

                {getImage(elem)}< br/>

                <Button
                    size={"sm"}
                    variant={"outline-danger"}
                    onClick={() => handleDelete(elem)}
                >Delete</Button>
            </div>
        ))
    }

    useEffect(() => {
        //take images from storage in database
        const getImagesFromStorage = () => {
            setImageList([])
            for (let elem of Object.values(dataDB)){
                listAll(imagesRef(numbers[elem.id])).then(res => {
                    res.items.forEach(item => {
                        getDownloadURL(item).then(url => {
                            getMetadata(item).then(name => {
                                setImageList(prev => [...prev, {id:(elem.id),image:url,name:name.name}])
                            })
                        })
                    })
                })
            }
        }
        getImagesFromStorage()
    },[dataDB])

    return (
        <>
            <div id={`trade`} className={`Trade container`}>

                <div className="content">

                    <TradeApiBlock />

                    <div className="companies">
                        {
                            Object.values(dataDB).length?
                                admin?
                                    getCompaniesAdmin():
                                    getCompanies()
                                :
                                <Spinner animation={"border"} variant={"light"} />
                        }
                    </div>
                </div>

                {
                    !(imageList.length >= Object.values(dataDB).length) && admin &&
                    <Alert>If the images didn't load, try reloading the page.</Alert>
                }

            </div>

            {
                admin &&
                <div className={`w-100 d-flex justify-content-center`}>
                    <Button
                        size={"sm"}
                        variant={"outline-success"}
                        onClick={() => setModalShow(true)}
                    >
                        Add block</Button>
                </div>
            }

            <TradeAddBlockModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                lastId={getLastId(Object.values(dataDB).length ? dataDB : dataCompanies)}
            />
        </>
    );
};

export default Trade;