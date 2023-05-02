const fs = require("fs");
const express = require("express")

let timeLogger = (req, res, next) => {

    let startTime = new Date().getTime();

    next()

    let endTime = new Date().getTime();

    console.log(`${-(startTime - endTime)}ms`)
}


module.exports = { timeLogger }