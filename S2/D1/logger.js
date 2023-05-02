const fs = require("fs");
const express = require("express")
const IP = require('ip');
const { default: axios } = require("axios");
let URL;
const sendAPIRequest = async (ipAddress) => {
    const apiResponse = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
    return apiResponse;
}

const logger = async (req, res, next) => {

    const ipAddress = IP.address();
    const ipAddressInformation = await sendAPIRequest(ipAddress);
    // console.log(ipAddressInformation)
    fs.appendFileSync("./logs.txt", `${req.url} Method : ${req.method} IP Address IS ${ipAddress} And Your City is ${ipAddressInformation} Time Is ${new Date()} \n`)

    next()

}


module.exports = { logger }