import React from 'react';
import './MetamaskModal.css';

const MetamaskModal = ({show}) => {

    const handleShowInfo = () =>{
        alert(
            `1. Open Metamask \n` +
            '2. Networks: Add custom RPC \n'+
            '3. Network Name: ADK Mainnet \n'+
            '4. RPC URL: https://api1.mainnet.aidoskuneen.com:9443 \n'+
            '5. Alternative RPC URL: http://162.55.164.222.9545 \n'+
            '6. Chain ID: 40272 \n'+
            '7. Currency Symbol: ADK'
        )
    }

    const connectMetamask = async () =>{
        let value = await window.ethereum.request({ method: 'eth_requestAccounts' })
        alert(value)
    }

    return (
        <div
            className={`MetamaskModal`}
            style={{display:`${show?'block':'none'}`}}
        >
            <div className="bg-container">
                <div className="content">

                    <div className="block">
                        <div className="text">
                            <div className="circle">1</div>
                            <p>Connect Metamask</p>
                        </div>
                        <button onClick={connectMetamask}>Connect</button>
                    </div>

                    <div className="block">
                        <div className="text">
                            <div className="circle">2</div>
                            <p>Add Network</p>
                            <img
                                className={'info'}
                                src="/images/general/info.svg"
                                alt="info"
                                onClick={handleShowInfo}
                            />
                        </div>
                        <button className={'add'}>
                            <img src="/images/general/logo.svg" alt=""/>
                            Aidos Kuneen
                        </button>
                    </div>

                    <button className={`connect`}>Connect</button>

                </div>
            </div>
        </div>
    );
};

export default MetamaskModal;