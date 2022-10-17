import React, {useEffect, useState} from 'react';
import {useApi} from "../../../hooks/useApi";
import {Slide} from "react-awesome-reveal";
import {getLang} from "../../../functions/getLang";

const TradeApiBlock = () => {

    const lang = getLang();

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
                            <h6>{lang==='en'?'Market cap':'Рын. капит'}:<strong>{marketCap}</strong></h6>
                            <h6>{lang==='en'?'Volume':'Объем'}:<strong>{volumeCoin}</strong></h6>
                        </span>
                </div>
            </div>
        </Slide>
    );
};

export default TradeApiBlock;
