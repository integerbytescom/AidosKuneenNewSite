import {getLang} from "../../functions/getLang";

const faqData = [
    {
        id:1,
        title:getLang()==='ru'?
            'Я хочу ламбо! Как мне его получить?':getLang()==='en'?
            'I want a lambo! How do I get one?':
            'Ich will ein Lambo! Wie bekomme ich einen?'
        ,
        text:getLang()==='ru'?
            'Работай усердно и плати налоги! Помимо шуток, не ожидайте, что инвестирование в криптовалюту сделает вас богатым за одну ночь! Разумно инвестируйте только теми деньгами, которые вы можете позволить себе потерять!':getLang()==='en'?
            'Work hard and pay your tax! Jokes aside, don’t expect that investing in cryptocurrency will make you rich over night! Invest wisely only with the money you can afford to lose!':
            'Arbeite hart und zahle deine Steuern! Spaß beiseite, erwarten Sie nicht, dass die Investition in Kryptowährung Sie über Nacht reich machen wird! Investieren Sie nur mit dem Geld, dessen Verlust Sie sich leisten können!'
    },
    {
        id:2,
        title:getLang()==='ru'?
            'Могу я взять интервью у мистера Бадоэра?':getLang()==='en'?
            'May I interview Mr. Badoer?':
            'Darf ich Herrn Badoer interviewen?',
        text:getLang()==='ru'?
            'Ага, почему бы и нет! Уверены, он будет очень рад! Однако ждите много сумасшедших и веселых ответов! Удачи с этим!':getLang()==='en'?
            'Yea, why not! We are sure he will be very excited! However, expect a lot of crazy and hilarious answers! Good luck with it!':
            'Ja, warum nicht! Wir sind sicher, er wird sich riesig freuen! Erwarten Sie jedoch viele verrückte und urkomische Antworten! Viel Glück damit!'
    },
    {
        id:3,
        title:getLang()==='ru'?
            'Когда был основан Aidos Kuneen и каков оборот?':getLang()==='en'?
            'When was Aidos Kuneen founded and what is the circulating supply?':
            'Wann wurde Aidos Kuneen gegründet und was ist das zirkulierende Angebot?',
        text:getLang()==='ru'?
            'Aidos Kuneen была основана 6 июня 2016 года Рикардо Бадоэром. Оборотная масса составляет 25 миллионов ADK.':getLang()==='en'?
            'Aidos Kuneen was founded on June 6th, 2016, by Ricardo Badoer. The circulating supply amounts to 25 million ADK.':
            'Aidos Kuneen wurde am 6. Juni 2016 von Ricardo Badoer gegründet. Das Umlaufangebot beläuft sich auf 25 Millionen ADK.'
    },
    {
        id:4,
        title:getLang()==='ru'?
            'Где я могу купить Aidos Kuneen?':getLang()==='en'?
            'Where can I purchase Aidos Kuneen?':
            'Wo kann ich Aidos Kuneen kaufen?',
        text:getLang()==='ru'?
            'Вы можете приобрести ADK на нашем сайте или на доступных международных биржах. Для получения дополнительной информации посетите раздел «Обмены» на нашем веб-сайте.':getLang()==='en'?
            'You can purchase ADK on our website or in available international exchanges. For more information, visit the “Exchanges” section on our web site.':
            'Sie können ADK auf unserer Website oder in verfügbaren internationalen Börsen kaufen. Weitere Informationen finden Sie im Abschnitt „Exchanges“ auf unserer Website.'
    },
    {
        id:5,
        title:getLang()==='ru'?
            'Как перевести ADK с биржи на кошелек? Сколько времени нужно для подтверждения транзакции?':getLang()==='en'?
            'How do I transfer ADK from the exchange to my wallet? How long does it take for a transaction to be confirmed?':
            'Wie übertrage ich ADK von der Börse auf mein Wallet? Wie lange dauert es, bis eine Transaktion bestätigt wird?',
        text:getLang()==='ru'?
            'Войдите в свой настольный кошелек ADK и зарегистрируйте новый адрес. После успешной регистрации адреса скопируйте его и используйте для вывода ADK с любого обмена, на котором указан ADK. Подтверждение займет не более 20 минут. Если вы не получили перевод в течение 24 часов, обратитесь в службу поддержки.':getLang()==='en'?
            'Login to your ADK desktop wallet and register a new address. After successful registration of the address, copy it and use it to withdraw ADK from any exchange where ADK is listed. Confirmations should take less than 20 minutes. If you have not received your transfer within 24 hours, please contact support.':
            'Melden Sie sich bei Ihrem ADK-Desktop-Wallet an und registrieren Sie eine neue Adresse. Kopieren Sie die Adresse nach erfolgreicher Registrierung und verwenden Sie sie, um ADK von jeder Börse abzuheben, an der ADK gelistet ist. Bestätigungen sollten weniger als 20 Minuten dauern. Wenn Sie Ihre Überweisung nicht innerhalb von 24 Stunden erhalten haben, wenden Sie sich bitte an den Support.'
    },
]

export default faqData;