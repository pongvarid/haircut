import Axios from "axios"

const VUE_APP_API_URL = "http://192.168.1.25:2829/api/"

const axios = Axios.create({
    baseURL : VUE_APP_API_URL,
    timeout : 10000,
})

export default axios
