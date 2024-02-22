import CryptoJS from "crypto-js";
import { secretKey  } from "../constant/secretkey";


export const dataDecrypt = (value) => {
    const data =  CryptoJS.AES.decrypt(value, secretKey);
    return JSON.parse(data.toString(CryptoJS.enc.Utf8))
}


export const dataEncrypt = (value) => {
    return  CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
}