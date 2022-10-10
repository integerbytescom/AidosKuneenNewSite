import React, {useEffect, useState} from 'react';
import './Trade.css';
import './TradeMedia.css';
import dataCompanies from "./dataCompanies";
import {Slide} from "react-awesome-reveal";
import {storageDB} from "../../database/connect";
import { ref,listAll,getDownloadURL } from "firebase/storage";
import {checkAdmin} from "../../functions/checkAdmin";
import TradeApiBlock from "./TradeApiBlock";
import {Badge, FormControl} from "react-bootstrap";
import {uploadImage} from "../../functions/uploadImage";
import {numbers} from "../../functions/getLinkForDB";

const Trade = ({lang}) => {

    const admin = checkAdmin();

    //state for images from storageDB
    const [imageList,setImageList] = useState([]);
    console.log(imageList,'image list from data base with sort');

    //link to images directory in databse
    const imagesRef = blockId => ref(storageDB,`/trade/${blockId}`)

    //for companies block
    const getCompanies = (start,end) =>{
        return dataCompanies.slice(start,end).map(elem =>(
            <a
                className={'circle-comp'}
                key={elem.id}
                target={'_blank'}
                href={elem.link}
                rel={'noreferrer'}
            >
                <img src={elem.img} alt=""/>
            </a>
        ))
    }

    //for companies block
    const getCompaniesAdmin = (start,end) =>{
        return dataCompanies.slice(start,end).map(elem =>(
            <div className={'m-2 mb-4'}>
                <Badge className={'mb-1'}>Block {elem.id}</Badge>
                {/*<FormControl size={"sm"} className={'mb-1'} value={elem.img} />*/}
                {/*<FormControl size={"sm"} className={'mb-1'} value={elem.link} />*/}
                <FormControl
                    size={"sm"}
                    type="file"
                    onChange={e => uploadImage(e,elem.id - 1)}
                    disabled={true}
                />
                {
                    imageList.length >= dataCompanies.length ?
                        <img
                            src={imageList.find(img => img.id === elem.id - 1).image}
                            alt=""
                        />
                        : ''
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
                        admin?
                            <Slide direction={'right'}>
                                <div className="block one">
                                    {getCompaniesAdmin(0,3)}
                                </div>
                                <div className="block two">
                                    {getCompaniesAdmin(3,6)}
                                </div>
                                <div className="block three">
                                    {getCompaniesAdmin(6,9)}
                                </div>
                            </Slide>:
                            <Slide direction={'right'}>
                                <div className="block one">
                                    {getCompanies(0,3)}
                                </div>
                                <div className="block two">
                                    {getCompanies(3,6)}
                                </div>
                                <div className="block three">
                                    {getCompanies(6,9)}
                                </div>
                            </Slide>
                    }
                </div>
            </div>
        </div>
    );
};

export default Trade;