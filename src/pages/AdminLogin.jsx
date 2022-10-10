import React from 'react';
import AdminCheckForm from "../components/AdminCheckForm/AdminCheckForm";
import {useGetData} from "../hooks/useGetData";
import {useNavigate} from "react-router-dom";


const AdminLogin = () => {

    let navigate = useNavigate();

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
                    navigate("/admin/success")
            }
        </div>
    );
};

export default AdminLogin;