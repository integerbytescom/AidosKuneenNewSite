import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import CheckLoginRoute from "./routes/CheckLoginRoute";

const Router = () => {

    return (
        <>
            <Routes>
                <Route path={`/`} element={<Main />} />
                <Route path={`/admin`} element={<AdminLogin />} />
                <Route path={`/admin/success`} element={<CheckLoginRoute elem={<Admin />} />} />
            </Routes>
        </>
    );
};

export default Router;