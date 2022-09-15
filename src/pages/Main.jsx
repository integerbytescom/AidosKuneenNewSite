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
import FormContact from "../blocks/FormContact/FormContact";
import {Parallax} from "react-parallax";
import { useMediaQuery } from 'react-responsive'


const Main = () => {
    const media1000 = useMediaQuery({
        query: '(max-width: 1000px)'
    })


    //for language
    const [langState,setLangState] = useState(getLang())

    //for change language
    const handleChangeLang = lang =>{
        setLang(lang)
        setLangState(getLang())
        window.location.reload()
    }

    return (
        <>
            <NavbarTop langState={langState} handleChangeLang={handleChangeLang} />

            <Parallax
                className={'parallax-container'}
                blur={0}
                bgImage={'/images/preview/bg-main.png'}
                strength={media1000?400:700}
                bgImageStyle={{width:media1000?"200%":"100%",height:"100vh",top:media1000?"-5%":"5%"}}
            >
                <Preview lang={langState} />
                <Trade lang={langState} />
            </Parallax>

            <About lang={langState} />
            <InfoSlider lang={langState} />
            <InfoYears lang={langState} />
            <Faq lang={langState} />
            <FormContact lang={langState} />

            <FooterBottom lang={langState} />
        </>
    );
};

export default Main;