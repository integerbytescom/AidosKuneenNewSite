import React, {useState} from 'react';
import {getLang} from "../functions/getLang";
import {Link} from "react-router-dom";

const Admin = () => {

    const [lang] = useState(getLang)

    return (
        <div className={`Admin container pt-5 pb-5`}>
            <Link to={`/`}>Back</Link>
            <h4 className={`mt-2`} style={{color:'#FFF'}}>
                {
                    lang==='en'?'Admin Page':
                        lang==='ru'?'Страница администратора':'Administrator Seite'
                }
            </h4>
        </div>
    );
};

export default Admin;