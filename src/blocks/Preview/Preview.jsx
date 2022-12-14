import React from 'react';
import './Preview.css';
import './PreviewMedia.css';
import {Fade} from "react-awesome-reveal";
import {useGetData} from "../../hooks/useGetData";
import {Spinner} from "react-bootstrap";
import {checkAdmin} from "../../functions/checkAdmin";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB} from "../../functions/getLinkForDB";
import ShowBlock from "../../components/ShowBlock/ShowBlock";

const Preview = ({lang}) => {

    //for check admin
    const admin = checkAdmin();

    //hide for block
    const hideDB = useGetData(`/pageData/hideBlocks/walletDownload`);

    const data = useGetData(`pageData/walletDownload/${lang}`)
    // console.log(data,'wallet download data')

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
        <div
            className={`Preview`}
            // show/hide block
            hidden={(hideDB.hide && !admin)}
        >

            <div className="container">
                <img src="/images/preview/laptop.png" alt="laptop"/>

                {
                    Object.values(data).length?
                        <div className="content">
                            <h1>
                                {
                                    admin?
                                        <textarea
                                            value={Object.values(data)[0]['title']}
                                            className={'admin-red'}
                                            rows={3}
                                            onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(Object.values(data)[0].id,'walletDownload'))}
                                        />:
                                        Object.values(data)[0]['title']
                                }
                            </h1>

                            <div className="box w-100 d-flex mt-3 justify-content-center">
                                {admin && <ShowBlock block={'walletDownload'} />}
                            </div>

                            <h6>
                                {
                                    admin?
                                        <textarea
                                            value={Object.values(data)[0]['text']}
                                            className={'admin-red w-100'}
                                            rows={2}
                                            onChange={(e) => setDataInDBText(e.target.value,getLinkForDB(Object.values(data)[0].id,'walletDownload'))}
                                        />:
                                        Object.values(data)[0]['text']
                                }
                            </h6>

                            <a target={'_blank'} rel={'noreferrer'} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                                {
                                    lang==='en'?'Download':
                                        lang==='ru'?'??????????????':'Herunterladen'
                                }
                            </a>
                        </div>:
                        <Spinner animation={"border"} variant={"light"} />
                }
            </div>

        </div>
        </Fade>
    );
};

export default Preview;