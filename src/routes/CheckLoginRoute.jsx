import React from "react";
import {Navigate} from 'react-router-dom';

const CheckLoginRoute = ({elem}) => {
    const user = window.sessionStorage.getItem('admin')
    if (!user) {
        return <Navigate to="/" />;
    }
    return elem;
};

export default CheckLoginRoute;