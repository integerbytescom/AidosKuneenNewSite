import React from "react";
import {Navigate} from 'react-router-dom';
import {GLOBAL_HASH} from "../components/AdminCheckForm/AdminCheckForm";

const CheckLoginRoute = ({elem}) => {
    const user = window.sessionStorage.getItem('admin');
    if (!user || user !== GLOBAL_HASH) {
        return <Navigate to="/" />;
    }
    return elem;
};

export default CheckLoginRoute;