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

export const getUsdt = async (address) => {
  try {
    const assets = await getUsdtBalance(address)
    return assets
  } catch (error) {
    console.log(error)
  }
}
export const getLimc = async (address) => {
  try {
    const assets = await getLimcBalance(address)
    return assets
  } catch (error) {
    console.log(error)
  }
}

async function getUsdtBalance(address: string) {
  const contactAdress = '0xdac17f958d2ee523a2206206994597c13d831ec7' // USDT contract address, required

  const response = await api.get(
    `?module=account&action=tokenbalance&contractaddress=${contactAdress}&address=${address}&tag=latest&apikey=${myKey}`,
  )
  const { result } = response.data
  const resultString = String(result)
  const firstPart = resultString.substr(0, resultString.length - 6)
  const secondPart = resultString.substr(resultString.length - 6).substr(0, 2)
  // беру последние 6 символов пришедшего баланса, из этих шести беру 2
  const entire = `${firstPart},${secondPart}`
  console.log('USDT BALANCE', entire)
  return entire
}

async function getLimcBalance(address: string) {
  const contactAdress = '0x3cba6Aa21eF433347c27864035f711A9FD4A3eEd' // LIMC contract address, required

  const response = await api.get(
    `?module=account&action=tokenbalance&contractaddress=${contactAdress}&address=${address}&tag=latest&apikey=${myKey}`,
  )
  const { result } = response.data
  console.log('LIMC BALANCE', result)
  return result
  // const resultString = String(result)
  // const firstPart = resultString.substr(0, resultString.length - 18)
  // const secondPart = resultString.substr(resultString.length - 18).substr(0, 2)
  // // беру последние 18 символов пришедшего баланса, из этих шести беру 2
  // const entire = `${firstPart},${secondPart}`
  // console.log('LIMC BALANCE', entire)
  // return entire
}
