import React, {useEffect, useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {Slide} from "react-awesome-reveal";
import {getLang} from "../../../functions/getLang";
import axios from "axios";

const TradeApiBlock = () => {

    const lang = getLang();

    //api data
    const dataCoin = useApi('/coins/aidos-kuneen').data;
    const [data,setData] = useState([]);
    const [coinrangoData,setCoinrangoData] = useState('');

    //coin gecko data
    const currentPrce = data['market_data'] && data['market_data']['current_price']['usd'].toLocaleString()+'$';
    const priceChange24h = data['market_data'] && data['market_data']['price_change_percentage_24h']+'%';
    const marketCap = data['market_data'] && data['market_data']['market_cap']['usd'].toLocaleString()+'$';
    const volumeCoin = data['market_data'] && data['market_data']['total_volume']['usd'].toLocaleString()+'$';

    const rangIndOf = str => coinrangoData.indexOf(str)
    //coin rango data
    const currentPriceRangoUsd = coinrangoData.slice(rangIndOf(`[usd] => `) + `[usd] => `.length, rangIndOf(`[usd] => `) + `[usd] => `.length + 5);
    const currentPriceRangoUsdPct = coinrangoData.slice(rangIndOf(`[usd_pct_24] => `) + `[usd_pct_24] => `.length, rangIndOf(`[usd_pct_24] => `) + `[usd_pct_24] => `.length + 5);
    const currentPriceRangoBtc = coinrangoData.slice(rangIndOf(`[btc] => `) + `[btc] => `.length, rangIndOf(`[btc] => `) + `[btc] => `.length + 10);
    const currentRangoMkt = coinrangoData.slice(rangIndOf(`[marketcap] => `) + `[marketcap] => `.length, rangIndOf(`[marketcap] => `) + `[marketcap] => `.length + 15);
    const currentRangoTTVal = coinrangoData.slice(rangIndOf(`[total_value] => `) + `[total_value] => `.length, rangIndOf(`[total_value] => `) + `[total_value] => `.length + 15);

    useEffect(() =>{
        axios.get("https://coinrango.com/api/public/crypto.php?symbols=ADK").then(res => setCoinrangoData(res.data))

        setData(dataCoin)
    },[dataCoin])

    if (coinrangoData){
        return (
            <Slide direction={'left'}>
                <div className="api-info">
                    <img src="/images/general/circle-logo.png" alt=""/>
                    <div>
                        <span className={'price'}>
                            {
                                currentPriceRangoUsd &&
                                <h3 className={"mb-0"}>{currentPriceRangoUsd + '$'}</h3>
                            }
                            {
                                currentPriceRangoBtc &&
                                <h6 className={"text-white fw-lighter"}>{currentPriceRangoBtc}btc</h6>
                            }
                            {
                                currentPriceRangoUsdPct &&
                                <h6 className={currentPriceRangoUsdPct && currentPriceRangoUsdPct.startsWith('-')?'red':''}>
                                    {currentPriceRangoUsdPct && !currentPriceRangoUsdPct.startsWith('-') && '+'}
                                    {(currentPriceRangoUsdPct && currentPriceRangoUsdPct) + '% (24h)'}
                                </h6>
                            }
                        </span>
                        <span className={'volume'}>
                            <h6>{lang==='en'?'Market cap':'Рын. капит'}:<strong>{currentRangoMkt ? (Number(currentRangoMkt).toLocaleString() + '$') : '-'}</strong></h6>
                            <h6>{lang==='en'?'Volume':'Объем'}:<strong>{currentRangoTTVal ? Number(currentRangoTTVal).toLocaleString() + '$' : '-'}</strong></h6>
                        </span>
                    </div>
                </div>
            </Slide>
        );
    }
};

export default TradeApiBlock;
