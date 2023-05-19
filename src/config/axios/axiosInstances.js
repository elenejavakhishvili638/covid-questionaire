import axios from 'axios'

export const covidAPI = axios.create({
  baseURL: 'https://covid19.devtest.ge/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})
