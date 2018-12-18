import Axios from "axios"


const VUE_APP_API_URL = "http://10.94.34.36:8089"


const axios = Axios.create({
    baseURL : VUE_APP_API_URL,
    timeout : 10000,
})

export default axios
