import React, {useState} from 'react';
import './NavbarTop.css';
import './NavbarTopMedia.css';
import {Badge, Navbar, NavDropdown} from "react-bootstrap";
import {getLang} from "../../functions/getLang";
import NavOffCanvas from "./NavOffCanvas/NavOffCanvas";
import {Link} from 'react-scroll';
import {Link as LinkRtDom} from 'react-router-dom';
import {Fade} from "react-awesome-reveal";
import MetamaskModal from "../MetamaskModal/MetamaskModal";
import {useWeb3React} from "@web3-react/core";
import {checkAdmin} from "../../functions/checkAdmin";

const NavbarTop = ({langState,handleChangeLang}) => {

    //for offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for modal metamask show
    const [showMetamask,setShowMetamask] = useState(false)

    const {active, chainId} = useWeb3React()

    // console.log(checkAdmin(),'checkAdmin')

    return (
        <>
        <Fade style={{zIndex:10}} direction={`down`}>
        <Navbar>
            <div className="logo">
                <img src="./images/general/logo.svg" alt=""/>
                <span>
                    Aidos Kuneen
                    {checkAdmin() && <Badge>Admin</Badge>}
                    {checkAdmin() && <LinkRtDom className={'mx-3 text-white fw-bold'} to={'/'}>Back</LinkRtDom>}
                </span>
            </div>

            <nav>
                <Link to='about' spy={true} smooth={true} offset={-200} duration={0}>
                    {
                        langState==='en'?'About us':
                            langState==='ru'?'Про нас':'Über uns'
                    }
                </Link>

                <Link to='trade' spy={true} smooth={true} offset={-100} duration={0}>
                    {
                        langState==='en'?'Exchanges':
                            langState==='ru'?'Обмены':'Austausch'
                    }
                </Link>

                <a rel={'noreferrer'} target={"_blank"} href="https://github.com/AidosKuneen/ADK-V2-Wallet/releases/tag/adk">
                    {
                        langState==='en'?'Wallet':
                            langState==='ru'?'Кошелек':'Geldbörse'
                    }
                </a>

                <Link
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={0}
                >F.A.Q</Link>

                <Link to="form" spy={true} smooth={true} offset={50} duration={0}>
                    {
                        langState==='en'?'Contact us':
                            langState==='ru'?'Контакты':'Kontakte'
                    }
                </Link>
            </nav>

            <div className="right">
                <button
                    className={active && chainId !== 40272?'mmCon':chainId === 40272?'accCon':''}
                    onClick={() => setShowMetamask(!showMetamask)}
                >
                    {
                        active && chainId !== 40272 ? 'Metamask connected':
                            chainId === 40272 ? 'Account connected': 'Connect Metamask'
                    }
                    <img
                        style={{transform:`${showMetamask?'':'rotate(180deg)'}`}}
                        src="./images/general/arrow-white.svg"
                        alt="arrow"
                    />
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
                <img src="./images/general/open-canvas.svg" alt=""/>
            </button>

            {/*offcanvas*/}
            <NavOffCanvas
                show={show}
                handleClose={handleClose}
                handleChangeLang={handleChangeLang}
                langState={langState}
                //mm
                showMetamask={showMetamask}
                setShowMetamask={setShowMetamask}
            />

        </Navbar>
        </Fade>

        <MetamaskModal show={showMetamask} />
        </>
    );
};

export default NavbarTop;