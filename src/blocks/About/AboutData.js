import {getLang} from "../../functions/getLang";

const aboutData = [
    {
        id:1,
        img:'/images/about/lock.svg',
        title:
            getLang()==='ru'?'Квантовая безопасность':
                getLang()==='en'?'Quantum Security':
                    'Quantensicherheit',

        text:
            getLang()==='ru'?
            'Суперкомпьютеры — это самые мощные на сегодняшний день компьютеры с классической архитектурой. С другой стороны, квантовые компьютеры до сих пор только теоретизировались, и было построено несколько крошечных прототипов.':getLang()==='en'?
            'Supercomputers are today\'s most powerful computers, with a classic architecture. Quantum computers, on the other hand, have only been theorized so far and some tiny prototypes have been built':
            'Supercomputer sind die leistungsstärksten Computer von heute, mit einer klassischen Architektur. Quantencomputer hingegen wurden bisher nur theoretisiert und einige winzige Prototypen gebaut'
    },
    {
        id:2,
        img:'/images/about/eye.svg',
        title:
            getLang()==='ru'?'100% Анонимность':
                getLang()==='en'?'100% Anonymous':
                    '100% Anonymität',
        text:
            getLang()==='ru'?
            'Система транзакций Aidos основана на направленной сетке с I2P в качестве основного сетевого уровня, защищая своих пользователей от раскрытия их личности.':getLang()==='en'?
            'The Aidos transaction system is based on a directed mesh with I2P as underlying network layer, protecting its users from having their identities revealed':
            'Das Transaktionssystem von Aidos basiert auf einem gerichteten Gitter mit I2P als Hauptnetzwerkschicht, das seine Benutzer davor schützt, ihre Identität preiszugeben.',
    },
    {
        id:3,
        img:'/images/about/lock.svg',
        title:
            getLang()==='ru'? 'Без цепей:':
                getLang()==='en'?'No chains':
                    'Ohne Ketten',
        text:getLang()==='ru'?
            'Aidos Kuneen основан на IMesh, новом инновационном распределенном реестре, основанном на DAG (ориентированном ациклическом графе), в котором каждая транзакция непосредственно проверяет две другие транзакции.':getLang()==='en'?
            'Aidos Kuneen is based on IMesh, an innovative new distributed ledger which is based on a DAG (directed acyclic graph), in which every transaction directly verifies two other':
            'Aidos Kuneen basiert auf IMesh, einem neuen innovativen Distributed Ledger auf Basis von DAG (Directed Acyclic Graph), bei dem jede Transaktion direkt zwei andere Transaktionen validiert.',
    },
];

export default aboutData;