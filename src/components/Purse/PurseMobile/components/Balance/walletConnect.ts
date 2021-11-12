import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.etherscan.io/api',
  timeout: 30000, // 30 secs
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const myKey = 'RJTBA1MHS67411M7487KD2E3CUAYHGS1FZ'

export const getAccountAssets = async (address) => {
  try {
    const assets = await apiGetAccountAssets(address)
    return assets
  } catch (error) {
    console.error(error)
  }
}

async function apiGetAccountAssets(address: string) {
  const response = await api.get(`?module=account&action=balance&address=${address}&tag=latest&apikey=${myKey}`)
  const { result } = response.data
  return result
}
