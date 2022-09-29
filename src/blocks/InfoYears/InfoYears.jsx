import React, {useState} from 'react';
import './InfoYears.css';
import './InfoYearsMedia.css';
import infoYearsData from "./InfoYearsData";
import {Fade} from "react-awesome-reveal";
import {useMediaQuery} from "react-responsive";
import {getLang} from "../../functions/getLang";
import InfoYearsModal from "./InfoYearsModal/InfoYearsModal";
import {checkAdmin} from "../../functions/checkAdmin";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB} from "../../functions/getLinkForDB";

const InfoYears = ({lang}) => {

    //check admin status
    const admin = checkAdmin();

    //modal
    const [modal,setModal] = useState(false)
    const [modalInfo,setModalInfo] = useState({})
    const handleOpenModal = elem =>{
        setModalInfo({...elem});
        setModal(true)
    }

    //data from database
    const data = useGetData(`/pageData/infoYears/${lang}`)
    // console.log(data,'infoYears data')

    //media query
    const media1400 = useMediaQuery({query: '(min-width: 1400px)'})
    const media1000 = useMediaQuery({query: '(min-width: 1000px) and (max-width: 1399px)'})
    const media600 = useMediaQuery({query: '(min-width: 600px) and (max-width: 999px)'})

    //what elems show in slider
    const [showElem] = useState(
        media1400?4:media1000?3:media600?2:1
    )
    const [showElems,setShowElems] = useState([0, showElem])

    //change show elems
    const handleChangeShowElems = (elem,value) =>{
        const copy = Object.assign([],showElems)
        copy[elem] = value;
        if (elem === 0){
            copy[1] = copy[1] - 1
        }else {
            copy[0] = copy[0] + 1
        }
        setShowElems(copy)
    }

    //for button that open modal with button about year
    const getButMoreInfo = (elem) =>{
        return (
            <button onClick={() => handleOpenModal(elem)} className={`more`}>
                {
                    getLang() === 'ru'?'Подробнее':
                        getLang()==='en'?'More info': 'Mehr'
                }
            </button>
        )
    }


    //set year in database
    const setDataInDBYear = (value,url) =>{
        return update(ref(realtimeDB,url),{
            year:value
        })
    }
    //set title in database
    const setDataInDBTitle = (value,url) =>{
        return update(ref(realtimeDB,url),{
            title:value
        })
    }
    //set text in database
    const setDataInDBText = (value,url) =>{
        return update(ref(realtimeDB,url),{
            text:value
        })
    }

    return (
        <Fade delay={500}>

        <Fade delay={1000}>
            <img className={'bg-info-years'} src="/images/about/bg.svg" alt=""/>
        </Fade>


        <div className={`InfoYears`}>

            <button
                className={'arrow-but'}
                disabled={showElems[0] === 0}
                onClick={() => handleChangeShowElems(0,showElems[0] - 1)}
            >
                <img
                    height={20}
                    style={{transform:" rotate(180deg)",cursor:"pointer"}}
                    src="/images/general/arrow-right.svg"
                    alt="left"
                />
            </button>

            <div className={'slider'}>
                {
                    Object.values(data).length?
                        Object.values(data)
                            .sort((a,b) => a.id - b.id)//сортировка по годам
                            .slice(showElems[0],showElems[1]).map(elem =>(
                        <>
                            {
                                admin?
                                    <div key={elem.id} className="block">
                                        <input
                                            className={`admin-red`}
                                            value={elem.year}
                                            onChange={(e) => setDataInDBYear(e.target.value,getLinkForDB(elem.id,'infoYears'))}
                                        />

                                        <div>
                                            <input
                                                className={`admin-red my-2`}
                                                value={elem.title}
                                                onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(elem.id,'infoYears'))}
                                            />

                                            <textarea
                                                className={`admin-red mb-2 w-100`}
                                                value={elem.text}
                                                rows={5}
                                                onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(elem.id,'infoYears'))}
                                            />
                                            {getButMoreInfo(elem)}
                                        </div>
                                    </div>:
                                    <div key={elem.id} className="block">
                                        <span>{elem.year}</span>
                                        <div>
                                            <p className={`title ${elem.active?'active':''}`}>{elem.title}</p>
                                            <p>{elem.text}</p>
                                            {getButMoreInfo(elem)}
                                        </div>
                                    </div>
                            }
                            <div className={'line'}/>
                            {/*{elem.delLine ?? <div className={'line'}/>}*/}
                        </>
                    )):
                    <Spinner animation={"border"} variant={"light"} />
                }
            </div>

            <button
                className={'arrow-but'}
                disabled={showElems[1] === infoYearsData.length}
                onClick={() => handleChangeShowElems(1,showElems[1] + 1)}
            >
                <img
                    height={20}
                    style={{cursor:"pointer"}}
                    src="/images/general/arrow-right.svg"
                    alt="left"
                />
            </button>
        </div>

            {/*modal*/}
            <InfoYearsModal show={modal} onHide={() => setModal(false)} info={modalInfo} />

        </Fade>
    );
};

export default InfoYears;