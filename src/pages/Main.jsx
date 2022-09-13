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


const Main = () => {

    const [langState,setLangState] = useState(getLang())

    const handleChangeLang = lang =>{
        setLang(lang)
        setLangState(getLang())
        window.location.reload()
    }

    return (
        <>
            <NavbarTop langState={langState} handleChangeLang={handleChangeLang} />

            <Preview lang={langState} />
            <Trade lang={langState} />
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