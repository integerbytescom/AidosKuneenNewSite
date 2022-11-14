import React, {useEffect, useState} from 'react';
import {Slide} from "react-awesome-reveal";
import {getLang} from "../../../functions/getLang";
import axios from "axios";

const TradeApiBlock = () => {

    const lang = getLang();

    const [data,setData] = useState([]);


    useEffect(() =>{
        axios.get("https://coinrango.com/api/public/crypto.php?symbols=ADK").then(res => setData(res.data[0]['market']))
    },[])

    if (Object.values(data).length){
        return (
            <Slide direction={'left'}>
                <div className="api-info">
                    <img src="/images/general/circle-logo.png" alt=""/>
                    <div>
                        <span className={'price'}>
                            {
                                data['usd'] &&
                                <h3 className={"mb-0"}>{data['usd'] ? Number(data['usd']).toLocaleString() + '$' : "-"}</h3>
                            }
                            {
                                data['btc'] &&
                                <h6 className={"text-white fw-lighter"}>{data['btc']}btc</h6>
                            }
                            {
                                data['usd_pct_24'] &&
                                <h6 className={data['usd_pct_24'] && data['usd_pct_24'].startsWith('-')?'red':''}>
                                    {data['usd_pct_24'] && !data['usd_pct_24'].startsWith('-') && '+'}
                                    {(data['usd_pct_24'] && data['usd_pct_24']) + '% (24h)'}
                                </h6>
                            }
                        </span>
                        <span className={'volume'}>
                            <h6>{lang==='en'?'Market cap':'Рын. капит'}:<strong>{data['marketcap'] ? (Number(data['marketcap']).toLocaleString() + '$') : '-'}</strong></h6>
                            <h6>{lang==='en'?'Volume':'Объем'}:<strong>{data['total_value'] ? Number(data['total_value']).toLocaleString() + '$' : '-'}</strong></h6>
                        </span>
                    </div>
                </div>
            </Slide>
        );
    }
};

export default TradeApiBlock;
