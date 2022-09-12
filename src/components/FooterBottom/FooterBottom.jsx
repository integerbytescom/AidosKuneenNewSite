import React from 'react';
import './FooterBottom.css';
import './FooterBottomMedia.css';

const FooterBottom = ({lang}) => {
    return (
        <div className={`FooterBottom container`}>

            {/*from navbar top*/}
            <div className="logo">
                <img src="/images/general/logo.svg" alt=""/>
                <span>Aidos Kuneen</span>
            </div>

            <p>
                © 2020 Aidos Kuneen.
                {
                    lang==='ru'?' Все права защищены':
                        lang==='en'?' All rights reserved':
                            ' Alle Rechte vorbehalten'
                }
            </p>

        </div>
    );
};

export default FooterBottom;