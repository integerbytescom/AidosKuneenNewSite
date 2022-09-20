import React, {useEffect, useState} from 'react';
import './MetamaskModal.css';
import './MetamaskModalMedia.css';
import {useWeb3React} from "@web3-react/core";
import {injected} from "../../functions/connectors";

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

    const {
        active,
        account,
        chainId,
        activate,
        deactivate
    } = useWeb3React()

    const [error,setError] = useState('')

    async function connect() {
        if (window.ethereum){
            try {
                await activate(injected)
                localStorage.setItem('isWalletConnected', true)
            } catch (ex) {
                setError('Connect error!')
            }
        }else {
            setError('Install metamask extension!')
        }
    }

    async function disconnect() {
        if (window.ethereum){
            try {
                deactivate()
                localStorage.setItem('isWalletConnected', false)
            } catch (ex) {
                setError('Disconnect error!')
            }
        }else {
            setError('Install metamask extension!')
        }
    }

    const addADKNetworkAUTO = async () => {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x9d50',
                chainName: 'ADK Mainnet v2.1',
                nativeCurrency: {
                    name: 'ADK',
                    symbol: 'ADK',
                    decimals: 18
                },
                rpcUrls: ['https://api1.mainnet.aidoskuneen.com:9443'],
                blockExplorerUrls: ['https://explorer.mainnet.aidoskuneen.com']
            }]
        })
            .then(res => console.log(res))
            .catch((error) => {
                setError('Network connect error!');
            })
    }

    const [copy,setCopy] = useState(false)
    const handleCopy =() =>{
        setCopy(true)
        navigator.clipboard.writeText(account)
        setTimeout(() => setCopy(false),3000)
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (window.ethereum){
                if (localStorage?.getItem('isWalletConnected') === 'true') {
                    try {
                        await activate(injected)
                        localStorage.setItem('isWalletConnected', true)
                    } catch (ex) {
                        setError('Connect error!')
                    }
                }
            }else {
                setError('Install metamask extension!')
            }
        }
        connectWalletOnPageLoad()
    }, [activate])

    return (
        <div
            className={`MetamaskModal`}
            style={{display:`${show?'block':'none'}`}}
        >
            <div className="bg-container">
                <div className="content">

                    <header>
                        {
                            chainId === 40272?
                                <div className="block">
                                    <img src="/images/general/globe.svg" alt="globe"/>
                                    <span>
                                        <h6>Connect to</h6>
                                        <p className={'small'}>Aidos Network</p>
                                    </span>
                                </div>:''
                        }
                        {
                            active?
                                <div className="block acc">
                                    <p className={'small'}>
                                        {account ?
                                            copy?'Copied': account.slice(0,18)+'...'
                                            :
                                            'Account not connected'
                                        }
                                    </p>
                                    <img onClick={handleCopy}
                                         style={{cursor:"grab"}}
                                         src="/images/general/copy.svg"
                                         alt="copy"
                                    />
                                </div>:''
                        }
                    </header>

                    <div className="block">
                        <div className="text">
                            <div className="circle">1</div>
                            <p>Connect Metamask</p>
                        </div>
                        <button onClick={connect} className={'success'}>
                            {active? <img src="/images/general/success.svg" alt="success"/>:''}
                            Connect
                        </button>

                        {   //disconnect button
                            active?
                                <button onClick={disconnect} className={'success mt-2'}>
                                    Disconnect
                                </button>:''
                        }
                    </div>

                    <p className={'res-mm-conn'}>{error ?? ''}</p>

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
                        <button onClick={addADKNetworkAUTO} className={'add'}>
                            <img src="/images/general/logo.svg" alt=""/>
                            {
                                chainId===40272?
                                    <img style={{height:"12px"}} src="/images/general/success.svg" alt="success"/>:''
                            }
                            Aidos Kuneen
                        </button>
                    </div>

                    {/*<button className={`connect`}>Connect</button>*/}

                </div>
            </div>
        </div>
    );
};

export default MetamaskModal;