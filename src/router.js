import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";

const Router = () => {

    return (
        <>
            <Routes>
                <Route path={`/`} element={<Main />} />
                <Route path={`/admin`} element={<Admin />} />
            </Routes>
        </>
    );
};

export default Router;