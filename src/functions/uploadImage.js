import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../database/connect";
import {numbers} from "./getLinkForDB";

export const uploadImage = async (e,blockId) => {
    let file = e.target.files[0];


    let fileRef = ref(storageDB,`/trade/${numbers[blockId]}/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef,file);

    uploadTask.on('state_changed',(snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload file in ' + blockId + ' is ' + progress + ' % done')
    })
}