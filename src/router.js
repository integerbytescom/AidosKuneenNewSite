import React, {useEffect} from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import {getLang} from "./functions/getLang";
import {setLang} from "./functions/setLang";

const Router = () => {

    useEffect(() =>{
        //check language and if its false set en
        if(!getLang()){
            setLang('en')
        }
    },[])

    return (
        <>
            <Routes>
                <Route exact path={`/`} element={<Main />} />
                <Route path={`/admin`} element={<AdminLogin />} />
                <Route path={`/admin/success`} element={<Admin />} />
            </Routes>
        </>
    );
};

export default Router;