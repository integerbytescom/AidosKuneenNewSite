import {getLang} from "./getLang";

export const getLinkForDB = (id,blockPage) =>{
    const block = id===0?'firstBlock'
        :id===1?'secondBlock'
            :id===2?'thirdBlock'
                :id===3?'fourthBlock'
                    :id===4?'fifthBlock'
                        :id===5?'sixthBlock':'seventhBlock';
    return `/pageData/${blockPage}/${getLang()}/${block}`
}