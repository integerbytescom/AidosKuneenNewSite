import React, {useState} from 'react';
import './MetamaskModal.css';
import './MetamaskModalMedia.css';

const MetamaskModal = ({show}) => {

    //for info button (img)
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

    const [mmConnectRes,setMMConnectRes] = useState('');

    //for connect mm
    const connectMetamask = () => {
        // Asking if metamask is already present or not
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => setMMConnectRes('Adress start with: ' + res))
                .catch(() => setMMConnectRes('Connecting error. Try again later.'))
        } else {
            setMMConnectRes("Error! Install metamask extension!");
        }
    };

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

                    <p className={'res-mm-conn'}>
                        {mmConnectRes?mmConnectRes:''}
                    </p>

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