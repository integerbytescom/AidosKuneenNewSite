import React from 'react';
import Main from "./Main";
import {useGetData} from "../hooks/useGetData";
import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";

const Admin = () => {

    const hashPassword = useGetData(`/adminData/admin1/hashPassword`)
    const ss = window.sessionStorage.getItem(`admin`)

    return (
        <div className={`Admin`}>
            {
                !hashPassword || hashPassword !== ss?
                    <>
                        <Link className={`m-5`} to={'/'}>
                            <Badge style={{fontSize:20}}>Back</Badge>
                        </Link>

                        <h1 className={`w-100 text-center mt-5`} style={{color:'white'}}>No data</h1>
                    </> :
                    <Main />
            }
        </div>
    );
};

export default Admin;