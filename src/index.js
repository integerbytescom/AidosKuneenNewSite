import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router";
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </HashRouter>
);
