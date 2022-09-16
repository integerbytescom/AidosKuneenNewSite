import React from 'react';
import {NavDropdown, Offcanvas} from "react-bootstrap";
import './NavOffCanvas.css';
import {getLang} from "../../../functions/getLang";
import {Link} from "react-scroll";

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
                        <a rel={'noreferrer'} target={'_blank'} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                            {
                                langState==='en'?'Download':
                                    langState==='ru'?'Скачать':'Herunterladen'
                            }
                        </a>

                        <Link to='trade' spy={true} smooth={true} offset={-50} onClick={handleClose}>
                            {
                                langState==='en'?'Exchanges':
                                    langState==='ru'?'Обмены':'Austausch'
                            }
                        </Link>

                        <Link to='about' spy={true} smooth={true} offset={-50} onClick={handleClose}>
                            {
                                langState==='en'?'About us':
                                    langState==='ru'?'Про нас':'Über uns'
                            }
                        </Link>

                        <Link to='faq' spy={true} smooth={true} offset={-100} onClick={handleClose}>
                            F.A.Q
                        </Link>

                        <Link to='form' spy={true} smooth={true} onClick={handleClose}>
                            {
                                langState==='en'?'Contacts':
                                    langState==='ru'?'Контакты':'Kontakte'
                            }
                        </Link>
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