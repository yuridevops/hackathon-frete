import axios from 'axios'

export const AntecipationApi = axios.create({
  baseURL: process.env.REACT_APP_URL_ANTECIPATION,
})
