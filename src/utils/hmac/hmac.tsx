import CryptoJS from "crypto-js";
import moment from "moment";
export const generateSignature = ({ method, url, timeStamp, body }: any) => {
    const APIKey = "loyaltigogogo";

    let bodys = body;
    if (
        (method.toUpperCase() === "POST" && body !== "") ||
        method.toUpperCase() === "PUT"
    ) {
        console.log("masuk 1");
        bodys = JSON.stringify(body);
    } else if (body == "") {
        console.log("masuk 2 bro");
        bodys = "{nothingHereBrooo}";
    } else {
        console.log("masuk 3");
        bodys = "{nothingHereBrooo}";
    }

    const signatureRawData = method + url + timeStamp + bodys;

    const signature = CryptoJS.enc.Utf8.parse(signatureRawData);

    return CryptoJS.HmacSHA256(signature, APIKey).toString();
};


export const saltPassword = (password: string) => {
    const timeStamp = moment().format("yyyyMDDhhmmss");
    const salt = `9ae12b1403d242c53b0ea80137de34856b3495c3c49670aa77c7ec99eadbba6e${timeStamp}`;
    const firstSalt = salt.substring(0, salt.length / 2);
    const twoSalt = salt.substring(salt.length / 2, salt.length);
    const format = `${firstSalt}${password}${twoSalt}`;
    const hashedPassword = CryptoJS.SHA256(format).toString();
    return { hashedPassword, timeStamp };
};


export const makeHeaderAuth = (timeStamp: string, signature: string) => {
    return {
        "X-TimeStamp": timeStamp,
        "X-Loyalti-ChannelSignature": signature,
        "Content-Type": "application/json",
        "X-Source": "com.loyalti.backoffice",
    };
};

export const makeHeader = (
    timeStamp: string,
    signature: string,
    token: string
) => {
    return {
        "X-TimeStamp": timeStamp,
        "X-Loyalti-ChannelSignature": signature,
        "Content-Type": "application/json",
        "X-Source": "com.loyalti.backoffice",
        Authorization: `Bearer ${token}`,
    };
};