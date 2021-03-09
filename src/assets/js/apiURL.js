'use strict'
const apiConfig = require('../../API/api.json')
const apiAddress = apiConfig.apiURL

const apiURL = {
    adminLogin: apiAddress + "/adminLogin"
}

exports.apiURL = apiURL
