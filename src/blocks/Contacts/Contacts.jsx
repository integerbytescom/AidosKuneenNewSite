import React from 'react';
import './Contacts.css';
import './ContactsMedia.css';
import {contactsData} from "./ContactsData";
import {useGetData} from "../../hooks/useGetData";
import {checkAdmin} from "../../functions/checkAdmin";
import {Spinner} from "react-bootstrap";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/connect";
import {getLinkForDB} from "../../functions/getLinkForDB";
import ShowBlock from "../../components/ShowBlock/ShowBlock";

const Contacts = ({lang}) => {

    //check admin status
    const admin = checkAdmin();

    //hide for block
    const hideDB = useGetData(`/pageData/hideBlocks/contactsText`);

    //data from database
    const data = useGetData(`/pageData/contactsText/${lang}`)
    // console.log(data,'Contacts text data')

    //set text in database
    const setDataInDBText = (value,url) =>{
        return update(ref(realtimeDB,url),{
            text:value
        })
    }
    //set link in database
    const setDataInDBLink = (value,url) =>{
        return update(ref(realtimeDB,url),{
            link:value
        })
    }
    //set href in database
    const setDataInDBHref = (value,url) =>{
        return update(ref(realtimeDB,url),{
            linkHref:value
        })
    }

    const getInputChange = (text,value,func) =>{
        return (
            <>
                <h5 className={'m-0'}>{text}:</h5>
                <input
                    className={`admin-red w-100 mb-3`}
                    value={data[`firstBlock`][value]}
                    onChange={(e) => func(e.target.value,getLinkForDB(data[`firstBlock`].id,'contactsText'))}
                />
            </>
        )
    }

    return (
        <>
            <div
                className={`Contacts container mb-3`}
                id={'contacts'}
                // show/hide block
                hidden={(hideDB.hide && !admin)}
            >
                {/*form text block with email*/}
                <div className="form-text">
                    {
                        Object.values(data).length?
                            admin?
                                <>
                                    {getInputChange('TEXT','text',setDataInDBText)}
                                    {getInputChange('LINK','link',setDataInDBLink)}
                                    {getInputChange('HREF','linkHref',setDataInDBHref)}
                                </>:
                                <>
                                    <h6>{data[`firstBlock`].text}</h6>
                                    <h3>
                                        <a href={`mailto:${data[`firstBlock`][`linkHref`]}`}>
                                            {data[`firstBlock`][`link`]}
                                        </a>
                                    </h3>
                                </>:
                            <Spinner animation={"border"} variant={"light"} />
                    }
                </div>

                <div className="social-icons-container">
                    {
                        contactsData.map((soc,ids) => (
                            <a
                                key={ids}
                                href={soc.url}
                                target={"_blank"}
                                rel={"noreferrer"}
                                className={'soc-link'}
                            >
                                <img src={soc.image} alt={soc.alt}/>
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className="box w-100 d-flex mt-3 justify-content-center">
                {admin && <ShowBlock block={'contactsText'} />}
            </div>
        </>
    );
};

export default Contacts;