import React from 'react';
import {NavDropdown, Offcanvas} from "react-bootstrap";
import './NavOffCanvas.css';
import {getLang} from "../../../functions/getLang";
import {Link} from "react-scroll";
import MetamaskModal from "../../MetamaskModal/MetamaskModal";
import {useWeb3React} from "@web3-react/core";

const NavOffCanvas = ({show,handleClose,langState,handleChangeLang,showMetamask,setShowMetamask}) => {

    const {active, chainId} = useWeb3React()

    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement={'end'} className={'NavOffCanvas'} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

                <div className={'content'}>
                <button
                    onClick={() => setShowMetamask(!showMetamask)}
                    className={active && chainId !== 40272?'mm mmCon':chainId === 40272?'mm accCon':'mm'}
                >
                    {
                        active && chainId !== 40272 ? 'Metamask connected':
                            chainId === 40272 ? 'Account connected': 'Connect Metamask'
                    }
                    <img
                        style={{
                            transform:`${showMetamask?'':'rotate(180deg)'}`,
                            marginLeft:5,
                            transition:".3s",
                            cursor:"inherit"
                        }}
                        src="/images/general/arrow-white.svg"
                        alt="arrow"
                    />
                </button>

                    <div className={`links-container`}>
                        <a rel={'noreferrer'} target={'_blank'} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                            {langState==='en'?'Download':'Скачать'}
                        </a>

                        <Link to='trade' spy={true} smooth={true} offset={-50} onClick={handleClose}>
                            {langState==='en'?'Exchanges':'Обмены'}
                        </Link>

                        <Link to='about' spy={true} smooth={true} offset={-50} onClick={handleClose}>
                            {langState==='en'?'About us':'Про нас'}
                        </Link>

                        <Link to='faq' spy={true} smooth={true} offset={-100} onClick={handleClose}>
                            FAQ
                        </Link>

                        <Link to='contacts' spy={true} smooth={true} onClick={handleClose}>
                            {langState==='en'?'Contacts':'Контакты'}
                        </Link>
                    </div>

                </div>

                <NavDropdown
                    title={langState==='en'?'English':'Русский'}
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
                </NavDropdown>

            </Offcanvas.Body>
        </Offcanvas>

        <MetamaskModal show={showMetamask} />
        </>
    );
};

export default NavOffCanvas;