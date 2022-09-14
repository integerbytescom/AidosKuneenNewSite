import React from 'react';
import './Preview.css';
import './PreviewMedia.css';
import {Fade} from "react-awesome-reveal";

const Preview = ({lang}) => {
    return (
        <Fade>
        <div className={`Preview`}>
            <img className={`wave`} src="/images/preview/waves-black.svg" alt=""/>

            <div className="container">
                <img src="/images/preview/laptop.svg" alt=""/>

                <div className="content">
                    <h1>
                        {
                            lang==='en'?'A trusted and secure cryptocurrency exchange':
                                lang==='ru'?'Надежная и безопасная биржа криптовалют':
                                    'Zuverlässiger und sicherer Austausch von Kryptowährungen'
                        }
                    </h1>
                    <h6>
                        {
                            lang==='en'?'Aidos Market is the leading cryptocurrency exchange to trade ADK,FCC':
                                lang==='ru'?'Aidos Market — ведущая криптовалютная биржа для торговли ADK, FCC.':
                                    'Aidos Market ist die führende Kryptowährungsbörse für den ADK- und FCC-Handel.'
                        }
                    </h6>

                    <a target={'_blank'} rel={'noreferrer'} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                        {
                            lang==='en'?'Download':
                                lang==='ru'?'Скачать':'Herunterladen'
                        }
                    </a>
                </div>
            </div>

        </div>
        </Fade>
    );
};

export default Preview;