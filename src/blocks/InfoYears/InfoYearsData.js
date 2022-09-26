import {getLang} from "../../functions/getLang";

const infoYearsData = [
    {
        id:1,
        year:2016,
        title:
            getLang()==='ru'?`Основан`:
                getLang()==='en'?`Founded`:
                    'Gegründet',
        active:true,
        text:getLang()==='ru'?
            'Команда Aidos Kuneen была основана Рикардо Бадоером.':getLang()==='en'?
            'The Aidos Kuneen teem has been founded by Ricardo Badoer':
            'Das Team Aidos Kuneen wurde von Ricardo Badoer gegründet'
    },
    {
        id:2,
        year:2017,
        title:`bitcoinrush.io`,
        active:false,
        text:getLang()==='ru'?
            'Подписано партнерство с MonsterByte. Айдос Кунин будет принят на Bitcoinrush.io':getLang()==='en'?
            'Partnership with MonsterByte has been signed. Aidos Kuneen is going to be accepted on Bitcoinrush.io':
            'Die Partnerschaft mit MonsterByte wurde unterzeichnet. Aidos Kuneen wird auf Bitcoinrush.io akzeptiert'
    },
    {
        id:3,
        year:2018,
        title:getLang()==='ru'?
            `Собственная банковская сеть`:getLang()==='en'?
            `Own Banking Network`:
            `Eigenes Bankennetzwerk`,
        active:false,
        text:getLang()==='ru'?
            'Цель состоит в том, чтобы захватить более мелкие банки и объединить их в один международный банк, предлагающий оффшорные услуги.':getLang()==='en'?
            'The goal is to take over smaller banks and merge them into one  International Bank offering Offshore Services':
            'Ziel ist es, kleinere Banken zu übernehmen und sie zu einer internationalen Bank zusammenzuführen, die Offshore-Dienstleistungen anbietet'
    },
    {
        id:4,
        year:2019,
        title:`ADK ETF in Kenya`,
        active:false,
        text:getLang()==='ru'?
            'Aidos Kuneen станет первым крипто-ETF на NSE (Кения). ETF будет зарегистрирован группой Badoer ADK ETF.':getLang()==='en'?
            'Aidos Kuneen will be first ever crypto Based ETF on NSE (Kenya), The ETF will be listed by Badoer group ADK ETF':
            'Aidos Kuneen wird der erste kryptobasierte ETF auf NSE (Kenia) sein. Der ETF wird von der Badoer-Gruppe ADK ETF notiert'
    },
    {
        id:5,
        year:2020,
        title:`ALTX EAST AFRICA`,
        active:false,
        text:''
    },
    {
        id:6,
        year:2021,
        title:`ADK in 2021`,
        active:false,
        text:'',
    },
    {
        id:7,
        year:2022,
        title:`ADK in 2022`,
        active:false,
        text:'',
        delLine:true,
    },
];

export default infoYearsData;