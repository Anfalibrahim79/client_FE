import { config } from '../../config'
import axios from 'axios'

export const getAddress = async () => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.get(`${config.api_host}/api/delivery-addresses?limit=`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export const getLocation = async () => {
  return await axios.get(`https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`);
}

export const createAddress = async data => {
  const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

  return await axios.post(`${config.api_host}/api/delivery-addresses`, data, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}