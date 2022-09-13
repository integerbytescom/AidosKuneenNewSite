import React, {useState} from 'react';
import './NavbarTop.css';
import './NavbarTopMedia.css';
import {Navbar, NavDropdown} from "react-bootstrap";
import {getLang} from "../../functions/getLang";
import NavOffCanvas from "./NavOffCanvas/NavOffCanvas";

const NavbarTop = ({langState,handleChangeLang}) => {

    console.log(`lang:${getLang()}`)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar>
            <div className="logo">
                <img src="/images/general/logo.svg" alt=""/>
                <span>Aidos Kuneen</span>
            </div>

            <nav>
                <a rel={'noreferrer'} target={"_blank"} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                    {
                        langState==='en'?'Download':
                            langState==='ru'?'Скачать':'Herunterladen'
                    }
                </a>

                <a href="#trade">
                    {
                        langState==='en'?'Exchanges':
                            langState==='ru'?'Обмены':'Austausch'
                    }
                </a>

                <a href="#about">
                    {
                        langState==='en'?'About us':
                            langState==='ru'?'Про нас':'Über uns'
                    }
                </a>

                <a href="#faq">F.A.Q</a>

                <a href="#form">
                    {
                        langState==='en'?'Contacts':
                            langState==='ru'?'Контакты':'Kontakte'
                    }
                </a>
            </nav>

            <div className="right">
                <button>
                    {
                        langState==='en'?'Connect Metamask':
                            langState==='ru'?'Подключить Metamask':'Einstecken Metamask'
                    }
                </button>

                <div className="vert-line" />
                <NavDropdown
                    title={langState==='en'?
                        'English':langState==='ru'
                            ?'Русский':'Deutsch'
                    }
                    drop={"down"}
                    id="basic-nav-dropdown"
                >
                    {
                        getLang()==='en'?'':
                            <NavDropdown.Item onClick={() => handleChangeLang('en')}>English</NavDropdown.Item>
                    }
                    {
                        getLang()==='ru'?'':
                            <NavDropdown.Item onClick={() => handleChangeLang('ru')}>Русский</NavDropdown.Item>
                    }
                    {
                        getLang()==='de'?'':
                            <NavDropdown.Item onClick={() => handleChangeLang('de')}>Deutsch</NavDropdown.Item>
                    }
                </NavDropdown>

            </div>

            <button className={'open-canvas'} onClick={handleShow}>
                <img src="/images/general/open-canvas.svg" alt=""/>
            </button>

            {/*offcanvas*/}
            <NavOffCanvas
                show={show}
                handleClose={handleClose}
                handleChangeLang={handleChangeLang}
                langState={langState}
            />

        </Navbar>
    );
};

export default NavbarTop;