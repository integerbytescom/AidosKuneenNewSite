import React, {useEffect, useState} from 'react';
import './Trade.css';
import './TradeMedia.css';
import dataCompanies from "./dataCompanies";
import {realtimeDB, storageDB} from "../../database/connect";
import { ref,listAll,getDownloadURL } from "firebase/storage";
import {checkAdmin} from "../../functions/checkAdmin";
import TradeApiBlock from "./TradeApiBlock";
import {Badge, FormControl, Spinner} from "react-bootstrap";
import {numbers} from "../../functions/getLinkForDB";
import {useGetData} from "../../hooks/useGetData";
import {update,ref as refRlt} from "firebase/database";

const Trade = ({lang}) => {

    const admin = checkAdmin();

    //state for images from storageDB
    const [imageList,setImageList] = useState([]);
    // console.log(imageList,'image list from data base with sort');

    //link to images directory in databse
    const imagesRef = blockId => ref(storageDB,`/trade/${blockId}`)

    //data from database
    const dataDB = useGetData(`/pageData/trade/`);
    // console.log(dataDB,'Trade data');

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
                {
                    imageList.length >= Object.values(dataDB).length ?
                        <img
                            src={imageList.find(img => img.id === elem.id).image}
                            alt={elem.link}
                        /> :
                        <Spinner animation={"border"} variant={"success"} />
                }
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

    //for companies block
    const getCompaniesAdmin = () =>{
        return Object.values(dataDB)
            .sort((a,b) => a.id - b.id)
            .map(elem =>(
            <div className={'m-2 mb-4'}>
                <Badge className={'mb-1'}>Block {elem.id + 1}</Badge>
                <FormControl
                    size={"sm"}
                    className={'mb-1'}
                    value={elem.link}
                    onChange={e => setLinkInDB(e.target.value,numbers[elem.id])}
                />
                {/*<FormControl*/}
                {/*    size={"sm"}*/}
                {/*    type="file"*/}
                {/*    onChange={e => uploadImage(e,elem.id - 1)}*/}
                {/*/>*/}
                {
                    imageList.length >= Object.values(dataDB).length ?
                        <img
                            src={imageList.find(img => img.id === elem.id).image}
                            alt={elem.link}
                        />
                        : <Spinner animation={"border"} variant={"success"} />
                }
            </div>
        ))
    }

    const getImagesFromStorage = () => {
        setImageList([])
        for (let elem of dataCompanies){
            listAll(imagesRef(numbers[elem.id - 1])).then(res => {
                res.items.forEach(item => {
                    getDownloadURL(item).then(url => {
                        setImageList(prev => [...prev, {id:(elem.id - 1),image:url}])
                    })
                })
            })
        }
    }


    useEffect(() => {
        getImagesFromStorage()
    },[])

    return (
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
        </div>
    );
};

export default Trade;