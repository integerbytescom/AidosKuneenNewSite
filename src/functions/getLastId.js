import {numbers} from "./getLinkForDB";

//get last id from infoYears slider database data
export const getLastId = (data) =>{
    const objVal = Object.values(data).sort((a,b) => a.id - b.id);
    const lenArr = objVal.length;
    const newId = (objVal[lenArr - 1].id) + 1;
    const newIdStr = numbers[newId]
    return [newId,newIdStr]
}