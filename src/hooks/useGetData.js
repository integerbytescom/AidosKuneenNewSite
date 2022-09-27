import {realtimeDB} from '../database/connect';
import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";

//for get data from realtime database
export const useGetCategory = (url) =>{

    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            if (dataInner){
                // eslint-disable-next-line
                setData(dataInner)
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data
}