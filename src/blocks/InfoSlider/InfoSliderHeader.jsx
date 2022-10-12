import React from 'react';
import {getLinkForDB} from "../../functions/getLinkForDB";
import DeleteBlockDB from "../../components/DeleteBlockDB/DeleteBlockDB";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";


const InfoSliderHeader = ({activeNum,setActiveNum,setDataInDBNumTitle,setDataInDBTitle,data,admin}) => {

    //for header block with big num
    const getHeaderBlock = (actNum,num,text) => {
        return(
            <SwiperSlide
                key={num}
                className={`block ${activeNum===actNum?'active':''}`}
                onClick={() => setActiveNum(actNum)}
            >
                <span>0{num}</span>
                <h4>
                    {text.slice(0,text.lastIndexOf(' '))}
                    <br />
                    {text.slice(text.lastIndexOf(' '),text.length)}
                </h4>
            </SwiperSlide>
        )
    }
    //for header block for admin
    const getHeaderBlockAdmin = (id,actNum,num,text) => {
        return(
            <SwiperSlide
                key={id}
                className={`block ${activeNum===actNum?'active':''}`}
                onClick={() => setActiveNum(actNum)}
            >
                <input
                    value={num}
                    className={'admin-red mx-2 w-25'}
                    onChange={(e) => setDataInDBNumTitle(e.target.value,getLinkForDB(id,'infoSlider'))}
                />
                <input
                    value={text}
                    className={'admin-red mx-2 mt-2 w-75'}
                    onChange={(e) => setDataInDBTitle(e.target.value,getLinkForDB(id,'infoSlider'))}
                />

                <DeleteBlockDB url={getLinkForDB(id,'infoSlider')} id={id + 1} disable={false} />
            </SwiperSlide>
        )
    }

    return (
        <header className={`container`}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    slidesPerGroup={3}
                    navigation={true}
                    modules={[Navigation]}
                    className="slider-info"
                >
                {
                    Object.values(data).length?
                        Object.values(data)
                            .sort((a,b) => a.id - b.id)
                            .map(elem =>(
                                admin?
                                    getHeaderBlockAdmin(elem.id,elem.id + 1,elem["titleNum"],elem.title):
                                    getHeaderBlock(elem.id + 1,elem["titleNum"],elem.title)
                            )):''
                }
                </Swiper>
        </header>
    );
};

export default InfoSliderHeader;