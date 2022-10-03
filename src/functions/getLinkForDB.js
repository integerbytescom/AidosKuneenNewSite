import {getLang} from "./getLang";

export const numbers = [
    'firstBlock','secondBlock','thirdBlock',
    'fourthBlock','fifthBlock','sixthBlock',
    'sevenBlock','eighthBlock','ninthBlock',
    'tenthBlock','eleventhBlock','twelfthBlock',
    'thirteenthBlock','fourteenthBlock','fifteenthBlock',
    'sixteenthBlock','seventeenthBlock','eighteenthBlock',
    'nineteenthBlock','twentiethBlock'
]

export const getLinkForDB = (id,blockPage) =>{

    return `/pageData/${blockPage}/${getLang()}/${numbers[id]}`
}