import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use((request) => {
  if (localStorage.getItem('Access Token')) {
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${localStorage.getItem('Access Token')}`
    }
  }
  return request
})

export default api
