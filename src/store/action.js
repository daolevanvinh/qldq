import axios from 'axios'
const apiConfig = require('../assets/js/apiURL').apiURL

export default {
    AdminLogin({ commit }, admin) {
        const apiUrl = apiConfig.adminLogin
        commit('adminLogin_request')
        return new Promise((resolve, reject) => {
            axios.post(apiUrl, admin, { params: admin })
                .then(function (response) {
                    commit('adminLogin_success')
                    resolve(response)
                })
                .catch(function (err) {
                    commit('adminLogin_error')
                    reject(err)
                })
        })
    }
}