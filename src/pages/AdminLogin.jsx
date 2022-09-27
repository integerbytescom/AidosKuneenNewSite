import React from 'react';
import AdminCheckForm from "../components/AdminCheckForm/AdminCheckForm";

const AdminLogin = () => {
    return (
        <div
            className={'AdminCheck w-100 d-flex justify-content-center align-items-center'}
            style={{height:"100vh"}}
        >
            <AdminCheckForm />
        </div>
    );
};

export default AdminLogin;