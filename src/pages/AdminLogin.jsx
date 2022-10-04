import React from 'react';
import AdminCheckForm from "../components/AdminCheckForm/AdminCheckForm";
import {useGetData} from "../hooks/useGetData";
import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";

const AdminLogin = () => {

    const hashPassword = useGetData(`/adminData/admin1/hashPassword`);
    const ss = window.sessionStorage.getItem(`admin`);
    const ls = window.localStorage.getItem(`admin`);

    return (
        <div
            className={'AdminCheck w-100 d-flex justify-content-center align-items-center'}
            style={{height:"100vh"}}
        >
            {
                !hashPassword || (hashPassword !== ss && hashPassword !== ls) ?
                    <AdminCheckForm />:
                    <Link to={'/admin/success'}>
                        <h3 style={{cursor:"pointer"}} className={'m-0'}>
                            <Badge bg={"success"}>
                                You can go to the admin page attention to me
                            </Badge>
                        </h3>
                    </Link>
            }
        </div>
    );
};

export default AdminLogin;