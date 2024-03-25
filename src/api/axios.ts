import axios from 'axios'


export const axiosApi = axios.create({
    baseURL: "http://192.168.1.110:8000/core/"
})

