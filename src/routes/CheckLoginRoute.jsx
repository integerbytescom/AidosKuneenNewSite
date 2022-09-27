import React from "react";
import {Navigate} from 'react-router-dom';

const CheckLoginRoute = () => {
    const user = window.sessionStorage.getItem('admin')
    if (!user) {
        return <Navigate to="/" />;
    }
    return <Navigate to="/admin/success" />;
};

export default CheckLoginRoute;