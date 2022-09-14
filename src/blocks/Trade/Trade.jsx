import React, {useEffect, useState} from 'react';
import './Trade.css';
import './TradeMedia.css';
import dataCompanies from "./dataCompanies";
import {useApi} from "../../hooks/useApi";
import {Slide} from "react-awesome-reveal";

const Trade = ({lang}) => {

    //for companies block
    const getCompanies = (start,end) =>{
        return dataCompanies.slice(start,end).map(elem =>(
            <a
                className={'circle-comp'}
                key={elem.id}
                target={'_blank'}
                href={elem.link}
                rel={'noreferrer'}
            >
                <img src={elem.img} alt=""/>
            </a>
        ))
    }

    //api data
    const dataCoin = useApi('/coins/aidos-kuneen').data;
    const [data,setData] = useState([])
    // console.log(data)

    const currentPrce = data['market_data']?data['market_data']['current_price']['usd'].toLocaleString()+'$':'';
    const priceChange24h = data['market_data']?data['market_data']['price_change_percentage_24h']+'%':'';
    const marketCap = data['market_data']?data['market_data']['market_cap']['usd'].toLocaleString()+'$':'';
    const volumeCoin = data['market_data']?data['market_data']['total_volume']['usd'].toLocaleString()+'$':'';

    useEffect(() =>{
        setData(dataCoin)
    },[dataCoin])


    return (
        <div id={`trade`} className={`Trade container`}>

            <h1>
                {
                    lang==='en'?'Exсhanges':
                        lang==='ru'?'Обмены':'Austausch'
                }
            </h1>

            <div className="content">
                <Slide direction={'left'}>
                <div className="api-info">
                    <img src="/images/trade/logoAidos.svg" alt=""/>
                    <div>
                        <span className={'price'}>
                            <h3>{currentPrce}</h3>
                            <h6
                                className={priceChange24h.startsWith('-')?'red':''}
                            >
                                {priceChange24h}
                            </h6>
                        </span>
                        <span className={'volume'}>
                            <h6>Market cap:<strong>{marketCap}</strong></h6>
                            <h6>Volume:<strong>{volumeCoin}</strong></h6>
                        </span>
                    </div>
                </div>
                </Slide>

                <div className="companies">
                    <Slide direction={'right'}>
                        <div className="block one">
                            {getCompanies(0,3)}
                        </div>
                        <div className="block two">
                            {getCompanies(3,6)}
                        </div>
                        <div className="block three">
                            {getCompanies(6,9)}
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Trade;