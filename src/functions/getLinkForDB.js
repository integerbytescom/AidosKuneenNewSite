import {getLang} from "./getLang";

export const numbers = [
    'firstBlock','secondBlock','thirdBlock',
    'fourthBlock','fifthBlock','sixthBlock',
    'seventhBlock','eighthBlock','ninthBlock',
    'tenthBlock','eleventhBlock','twelfthBlock',
    'thirteenthBlock','fourteenthBlock','fifteenthBlock',
    'sixteenthBlock','seventeenthBlock','eighteenthBlock',
    'nineteenthBlock','twentiethBlock','twentyFirstBlock',
    'twentySecondBlock','twentyThirdBlock','twentyFourthBlock',
    'twentyFifthBlock','twentySixthBlock','twentySeventhBlock',
    'twentyEightBlock','twentyNinthBlock','thirtyBlock',
    'thirtyFirstBlock','thirtySecondBlock','thirtyThirdBlock',
    'thirtyFourthBlock','thirtyFifthBlock','thirtySixthBlock',
    'thirtySeventhBlock','thirtyEightBlock','thirtyNinthBlock',
    'fortiethBlock','fortiethFirstBlock','fortiethSecondBlock',
]

export const getLinkForDB = (id,blockPage) =>{
    return `/pageData/${blockPage}/${getLang()}/${numbers[id]}`
}