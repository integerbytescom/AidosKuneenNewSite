import React,{useState} from 'react';
import Preview from "../blocks/Preview/Preview";
import Trade from "../blocks/Trade/Trade";
import About from "../blocks/About/About";
import InfoSlider from "../blocks/InfoSlider/InfoSlider";
import InfoYears from "../blocks/InfoYears/InfoYears";
import Faq from "../blocks/Faq/Faq";
import NavbarTop from "../components/NavbarTop/NavbarTop";
import {getLang} from "../functions/getLang";
import {setLang} from "../functions/setLang";
import FooterBottom from "../components/FooterBottom/FooterBottom";
// import FormContact from "../blocks/FormContact/FormContact";
import {Parallax} from "react-parallax";
import { useMediaQuery } from 'react-responsive'
import BgVideo from "../blocks/BgVideo/BgVideo";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import Contacts from "../blocks/Contacts/Contacts";


const Main = ({}) => {
    const media1000 = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    //ethereum
    function getLibrary(provider) {
        return new Web3(provider)
    }

    //for language
    const [langState,setLangState] = useState(getLang())

    //for change language
    const handleChangeLang = lang =>{
        setLang(lang)
        setLangState(getLang())
        window.location.reload()
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <NavbarTop langState={langState} handleChangeLang={handleChangeLang} />

            <BgVideo lang={langState} />

            <Trade lang={langState} />

            <About lang={langState} />
            <InfoSlider lang={langState} />
            <InfoYears lang={langState} />
            <Faq lang={langState} />
            {/*<FormContact lang={langState} />*/}

            <Parallax
                className={'parallax-container'}
                blur={0}
                bgImage={'/images/preview/bg-main.png'}
                strength={media1000?400:-200}
                bgImageStyle={{width:media1000?"200%":"100%",height:"110vh",top:media1000?"30%":"15%"}}
            >
                <Preview lang={langState} />
                <Contacts lang={langState} />
                <FooterBottom lang={langState} />
            </Parallax>
        </Web3ReactProvider>
    );
};

export default Main;