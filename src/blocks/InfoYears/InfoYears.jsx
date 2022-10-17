import React, {useState} from 'react';
import './InfoYears.css';
import './InfoYearsMedia.css';
// import infoYearsData from "./InfoYearsData";
import {Fade} from "react-awesome-reveal";
import {useMediaQuery} from "react-responsive";
import InfoYearsModal from "./InfoYearsModal/InfoYearsModal";
import {checkAdmin} from "../../functions/checkAdmin";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB, numbers} from "../../functions/getLinkForDB";
import AddBlockYears from "./AddBlockYears/AddBlockYears";
import DeleteBlockDB from "../../components/DeleteBlockDB/DeleteBlockDB";
import AddInnerBlock from "./AddInnerBlock";
import ShowBlock from "../../components/ShowBlock/ShowBlock";

const InfoYears = ({lang}) => {

    //check admin status
    const admin = checkAdmin();

    //hide for block
    const hideDB = useGetData(`/pageData/hideBlocks/infoYears`);

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
    const media1500 = useMediaQuery({query: '(min-width: 1500px)'})
    const media1000 = useMediaQuery({query: '(min-width: 1000px) and (max-width: 1499px)'})
    const media600 = useMediaQuery({query: '(min-width: 600px) and (max-width: 999px)'})

    //what elems show in slider
    const [showElem] = useState(
        media1500?4:media1000?3:media600?2:1
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
    //set title in database
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

        <div
            className={`InfoYears`}
            // show/hide block
            hidden={(hideDB.hide && !admin)}
        >

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
                                            className={`admin-red w-50`}
                                            value={elem.year}
                                            onChange={(e) => setDataInDBYear(e.target.value,getLinkForDB(elem.id,'infoYears'))}
                                        />

                                        <div>
                                            {
                                                elem['titles'].map((title,ids) =>(
                                                    <>
                                                        <p className={'admin small m-0 mt-3'}>Inner block {ids + 1}:</p>
                                                        <input
                                                            className={`admin-red my-1 w-100`}
                                                            value={title.title}
                                                            onChange={(e) => setDataInDBTitle(e.target.value,`/pageData/infoYears/${lang}/${numbers[elem.id]}/titles/${ids}`)}
                                                        />
                                                        <input
                                                            className={`admin-red my-1 w-100`}
                                                            value={title.text}
                                                            onChange={(e) => setDataInDBText(e.target.value,`/pageData/infoYears/${lang}/${numbers[elem.id]}/titles/${ids}`)}
                                                        />
                                                        <DeleteBlockDB disable={Object.keys(elem['titles']) <= 1} url={`/pageData/infoYears/${lang}/${numbers[elem.id]}/titles/${ids}`} id={ids + 1} />
                                                    </>
                                                ))
                                            }
                                            <>
                                                <AddInnerBlock data={elem['titles']} lang={lang} elemID={elem.id} />
                                                <DeleteBlockDB disable={false} url={getLinkForDB(elem.id,'infoYears')} />
                                            </>
                                        </div>
                                    </div>:
                                    <div key={elem.id} className="block">
                                        <span>{elem.year}</span>
                                        <div>
                                            {
                                                elem['titles'].map((title,ids) =>(
                                                    <p
                                                        key={ids}
                                                        onClick={() => handleOpenModal({...title,year:elem.year})}
                                                        className={`title`}
                                                    >
                                                        {title.title}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                            }
                            <div className={'line'}/>
                        </>
                    )):
                    <Spinner animation={"border"} variant={"light"} />
                }
            </div>

            <button
                className={'arrow-but'}
                disabled={showElems[1] === Object.values(data).length}
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


            <div className="box w-100 d-flex mb-3 justify-content-center">
                {admin && <ShowBlock block={'infoYears'} />}
            </div>

            {/*add block for admin*/}
            {admin && Object.values(data).length ? <AddBlockYears data={data} lang={lang} /> : false}

            {/*modal*/}
            <InfoYearsModal show={modal} onHide={() => setModal(false)} info={modalInfo} />

        </Fade>
    );
};

export default InfoYears;