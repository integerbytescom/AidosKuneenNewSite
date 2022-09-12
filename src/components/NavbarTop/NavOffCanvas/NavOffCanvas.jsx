import React from 'react';
import {NavDropdown, Offcanvas} from "react-bootstrap";
import './NavOffCanvas.css';
import {getLang} from "../../../functions/getLang";

const NavOffCanvas = ({show,handleClose,langState,handleChangeLang}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'} className={'NavOffCanvas'} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

                <div className={'content'}>
                <button className={'mm'}>
                    {
                        langState==='en'?'Connect Metamask':
                            langState==='ru'?'Подключить Metamask':'Einstecken Metamask'
                    }
                </button>

                <div className={`links-container`}>
                    <a href="/">
                        {
                            langState==='en'?'Download':
                                langState==='ru'?'Скачать':'Herunterladen'
                        }
                    </a>

                    <a href="/">
                        {
                            langState==='en'?'Exchanges':
                                langState==='ru'?'Обмены':'Austausch'
                        }
                    </a>

                    <a href="/">
                        {
                            langState==='en'?'About us':
                                langState==='ru'?'Про нас':'Über uns'
                        }
                    </a>

                    <a href="/">F.A.Q</a>

                    <a href="/">
                        {
                            langState==='en'?'Contacts':
                                langState==='ru'?'Контакты':'Kontakte'
                        }
                    </a>
                </div>
                </div>

                <NavDropdown
                    title={langState==='en'?
                        'English':langState==='ru'
                            ?'Русский':'Deutsch'
                    }
                    drop={"up"}
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

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavOffCanvas;