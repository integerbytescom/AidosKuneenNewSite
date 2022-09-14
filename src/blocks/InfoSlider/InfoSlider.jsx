import React, {useState} from 'react';
import './InfoSlider.css';
import './InfoSliderMedia.css';
import {Fade} from "react-awesome-reveal";

const InfoSlider = ({lang}) => {

    const [activeNum,setActiveNum] = useState(1)

    const handleActive = (num) =>{
        setActiveNum(num)
    }

    return (
        <div className={`InfoSlider`}>

            <Fade>
            <header className={`container`}>
                <div className="content">
                    <div
                        className={`block ${activeNum===1?'active':''}`}
                        onClick={() => handleActive(1)}
                    >
                        <span>01</span>
                        <h4>IMesh<br />AidosMesh</h4>
                    </div>
                    <div
                        className={`block ${activeNum===2?'active':''}`}
                        onClick={() => handleActive(2)}
                    >
                        <span>02</span>
                        <h4>ADK vs <br/>Blockchain</h4>
                    </div>
                    <div
                        className={`block ${activeNum===3?'active':''}`}
                        onClick={() => handleActive(3)}
                    >
                        <span>03</span>
                        <h4>Transaction <br/>System</h4>
                    </div>
                </div>
            </header>
            </Fade>

            <Fade>
            <div className="content">
                <div className="container">
                    <img src="/images/info-slider/card.svg" alt=""/>

                    <div className="info">
                        {
                            activeNum === 1?
                                <p>
                                    {
                                        lang==='ru'?
                                            'IMesh — это наш взгляд на новый инновационный распределенный реестр, основанный на DAG (ориентированном ациклическом графе). Несмотря на то, что IMesh не страдает от тех же проблем, что и блокчейн (например, масштабируемость), он по-прежнему основан на тех же основных принципах: это все еще распределенная база данных, это все еще сеть P2P, и она по-прежнему опирается на механизм консенсуса и проверки. Структура Mesh определяется следующей концепцией: каждая транзакция напрямую проверяет две другие транзакции и, следовательно, подтверждает, что они действительны и соответствуют правилам протоколов. Это напрямую влияет на то, как мы достигаем консенсуса: вместо того, чтобы PoW (майнеры) или PoS (стейкеры) отвечали за общий консенсус, вся сеть активных участников принимает непосредственное участие в утверждении транзакций. Таким образом, консенсус в ADK больше не отделен от процесса совершения транзакций: это его неотъемлемая часть, и это то, что позволяет ADK беспрецедентно масштабироваться без каких-либо комиссий за транзакции. Это позволяет ADK работать как автономная децентрализованная и саморегулирующаяся сеть p2p.':lang==='en'?
                                            'IMesh is our take on an innovative new distributed ledger which is based on a DAG (directed acyclic graph). Even though IMesh doesn’t suffer from the same problems as a Blockchain (e.g. scalability) it is still based on the same underlying principles: it’s still a distributed database, it’s still a P2P Network and it still relies on a consensus and validation mechanism. The structure of the Mesh is defined by the following concept: Each transaction directly verifies two other transactions and therefore confirms that they are valid and conform to the protocols rules. This directly influences how we reach consensus: Instead of having PoW (miners) or PoS (stakers) be responsible for the overall consensus the entire network of active participants are directly involved in the approval of transactions. As such, consensus in ADK is no longer decoupled from the transaction making process: it’s an intrinsic part of it, and it’s what enables ADK to scale in an unrivaled fashion without any transaction fees. This makes it so ADK can operate as an autonomous decentralized and self-regulating p2p network.':
                                            'IMesh ist unsere Version eines innovativen neuen verteilten Ledgers, das auf einem DAG (gerichteter azyklischer Graph) basiert. Obwohl IMesh nicht unter den gleichen Problemen wie eine Blockchain leidet (z. B. Skalierbarkeit), basiert es immer noch auf den gleichen zugrunde liegenden Prinzipien: Es ist immer noch eine verteilte Datenbank, es ist immer noch ein P2P-Netzwerk und es verlässt sich immer noch auf einen Konsens- und Validierungsmechanismus. Die Struktur des Mesh ist durch folgendes Konzept definiert: Jede Transaktion verifiziert direkt zwei andere Transaktionen und bestätigt damit, dass sie gültig sind und den Protokollregeln entsprechen. Dies hat direkten Einfluss darauf, wie wir einen Konsens erzielen: Anstatt dass PoW (Miner) oder PoS (Staker) für den Gesamtkonsens verantwortlich sind, ist das gesamte Netzwerk aktiver Teilnehmer direkt an der Genehmigung von Transaktionen beteiligt. Daher ist der Konsens in ADK nicht mehr vom Transaktionsprozess entkoppelt: Er ist ein wesentlicher Bestandteil davon und ermöglicht es ADK, auf konkurrenzlose Weise ohne Transaktionsgebühren zu skalieren. Dadurch kann ADK als autonomes, dezentrales und selbstregulierendes P2P-Netzwerk operieren.'
                                    }
                                </p>:
                                activeNum === 2?
                                    <p>
                                        {
                                            lang==='ru'?
                                                'Давайте сначала посмотрим на масштабируемость, о которой мы уже говорили в предыдущей части. Вероятно, это одно из самых больших преимуществ ADK по сравнению с традиционными блокчейнами 1-го и 2-го поколения. В ADK нет необходимости упорядочивать значения семян или адресов. Поскольку консенсус распараллелен, а не выполняется последовательными интервалами пакетов, как в блоках, сеть может динамически расти и масштабироваться с увеличением количества транзакций. Чем больше транзакций совершается, тем безопаснее и эффективнее становится Mesh. Когда узел синхронизируется, он просто повторяет все транзакции. Значения всех транзакций будут сгруппированы по их адресам, независимо от того, находятся они в своем предыдущем порядке или нет. Когда все транзакции будут обработаны, каждый адрес будет содержать текущий правильный баланс. В одном блоке нет максимального количества транзакций, как в блокчейнах, и, конечно же, не будет споров о размере блока. Нет необходимости сортировать головоломку только из одного угла, часть за частью, если вы можете иметь несколько глаз, которые одновременно и случайным образом смотрят на правильные части, чтобы сформировать головоломку, из нескольких углов. Чем больше глаз, тем быстрее. Aidos не требует майнинга, не имеет блоков и, в отличие от блокчейнов, становится быстрее по мере роста.':lang==='en'?
                                                'Let’s first look at scalability, which we already addressed in the previous part. It’s probably one of the biggest advantages ADK inherits compared to traditional Blockchains of the 1st and 2nd generation. In ADK there is no necessity to order values of seeds or addresses. Since consensus is parallelized, and not done in sequential intervals of batches as in blocks, the network is able to grow and scale dynamically with the number of transactions. The more transactions are made, the more secure and the more efficient the Mesh gets. When a node is synching, it just iterates through all transactions. The values from all transactions will be grouped into their addresses, even if they are in their previous order or not. When the all transactions are processed, every address will contain the current correct balance.There is no max-count of transactions in one block like in Blockchains and there will certainly be no blocksize-debate. There is no need to sort a puzzle just from one corner, piece after piece if you can have multiple eyes looking simultaneously and randomly for the right pieces to form the puzzle, from multiple corners. The more eyes, the faster it gets. Aidos demands no mining, is block-less and contrarily to Blockchains, gets faster the bigger it grows.':
                                                'Schauen wir uns zunächst die Skalierbarkeit an, die wir bereits im vorherigen Teil angesprochen haben. Dies ist wahrscheinlich einer der größten Vorteile, die ADK im Vergleich zu traditionellen Blockchains der 1. und 2. Generation erbt. In ADK besteht keine Notwendigkeit, Werte von Samen oder Adressen zu bestellen. Da der Konsens parallelisiert und nicht in aufeinanderfolgenden Intervallen von Batches wie in Blöcken erfolgt, kann das Netzwerk dynamisch mit der Anzahl der Transaktionen wachsen und skalieren. Je mehr Transaktionen getätigt werden, desto sicherer und effizienter wird das Mesh. Wenn ein Knoten synchronisiert wird, iteriert er einfach durch alle Transaktionen. Die Werte aller Transaktionen werden in ihren Adressen gruppiert, auch wenn sie in ihrer vorherigen Reihenfolge sind oder nicht. Wenn alle Transaktionen verarbeitet sind, enthält jede Adresse den aktuellen korrekten Saldo. Es gibt keine maximale Anzahl von Transaktionen in einem Block wie in Blockchains und es wird sicherlich keine Blockgrößendebatte geben. Es ist nicht nötig, ein Puzzle Stück für Stück nur von einer Ecke aus zu sortieren, wenn Sie mehrere Augen haben können, die gleichzeitig und zufällig von mehreren Ecken aus nach den richtigen Teilen suchen, um das Puzzle zu bilden. Je mehr Augen, desto schneller wird es. Aidos erfordert kein Mining, ist blocklos und wird im Gegensatz zu Blockchains schneller, je größer es wird'
                                        }
                                    </p>:
                                    <p>
                                        {
                                            lang==='ru'?
                                                'Выдача транзакции в ADK состоит из трех простых шагов: 1. Подписание: сначала входные данные транзакции подписываются вашими закрытыми ключами 2. Выбор подсказки: затем используется алгоритм Random Walk Monte Carlo для случайного выбора двух подсказок (т. е. неподтвержденных транзакций). ), на который будет ссылаться ваша транзакция. 3. Доказательство работы. Чтобы ваша транзакция была принята сетью, вам нужно решить криптографическую головоломку, аналогичную Hashcash. После всех вышеперечисленных шагов ваша транзакция транслируется в сеть. После этого кто-то другой просто должен сослаться на вашу транзакцию в процессе выбора чаевых и, следовательно, подтвердить ее. После этого ваша транзакция будет подтверждена. Технические данные: Общая сумма: 25 000 000 Премайн: Нет Майнинг: Нет Технология: IMesh (DAG) Области применения: Финансы, Интернет вещей, Смарт-контракты':lang==='en'?
                                                'The issuing of a transaction in ADK consists of three simple steps: 1. Signing: First the transaction inputs are signed with your private keys 2. Tip Selection: Then a Random Walk Monte Carlo algorithm is used to randomly select two tips (i.e. unconfirmed transactions), which will be referenced by your transaction. 3. Proof of Work: For your transaction to be accepted by the network, you need to do solve a cryptographic puzzle – similar to Hashcash. After all above steps your transaction is broadcast to the network. After that someone else just has to reference your transaction in the tip selection process and therefore validate it. After that your transaction will be confirmed. Technical Data: Total amount: 25.000.000 Premine: No Mining: No Technology: IMesh ( DAG ) Application fields: Finance, Internet of Things, Smart contracts':
                                                'Das Ausstellen einer Transaktion im ADK besteht aus drei einfachen Schritten: 1. Signieren: Zuerst werden die Transaktionseingaben mit Ihren privaten Schlüsseln signiert 2. Tippauswahl: Dann wird ein Random-Walk-Monte-Carlo-Algorithmus verwendet, um zufällig zwei Tipps (d. h. unbestätigte Transaktionen) auszuwählen ), auf die von Ihrer Transaktion verwiesen wird. 3. Arbeitsnachweis: Damit Ihre Transaktion vom Netzwerk akzeptiert wird, müssen Sie ein kryptografisches Rätsel lösen – ähnlich wie bei Hashcash. Nach allen oben genannten Schritten wird Ihre Transaktion an das Netzwerk gesendet. Danach muss nur noch jemand anderes Ihre Transaktion im Tippauswahlprozess referenzieren und somit validieren. Danach wird Ihre Transaktion bestätigt. Technische Daten: Gesamtbetrag: 25.000.000 Premine: Nein Mining: Nein Technologie: IMesh ( DAG ) Anwendungsgebiete: Finance, Internet of Things, Smart Contracts'
                                        }
                                    </p>
                        }
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default InfoSlider;