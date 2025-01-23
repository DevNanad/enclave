import axios from "axios"

const BASE_URL = process.env.PLASMO_PUBLIC_API_URL

export default axios.create({
  baseURL: BASE_URL
})
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },

  withCredentials: true
})
