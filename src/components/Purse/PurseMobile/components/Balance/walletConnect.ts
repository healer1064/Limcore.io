/* eslint-disable handle-callback-err */
import axios from 'axios'
import Web3 from 'web3'

const walletAddress = '0x36b1ef1e03fb64141fe497bb418bb3c9d7293549' // my wallet

const getLimcBalance = async (address: string) => {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443')
  const tokenAddress = '0xe4b62383c69b33bb0d51f106b72fb38ab49b9480' // USDT token contract
  const tokenInst = new web3.eth.Contract([], tokenAddress)
  console.log(tokenInst)

  tokenInst.options.jsonInterface = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      type: 'function',
    },
    // // decimals
    // {
    //   constant: true,
    //   inputs: [],
    //   name: 'decimals',
    //   outputs: [{ name: '', type: 'uint8' }],
    //   type: 'function',
    // },
  ]

  const balance = await tokenInst.methods.balanceOf(address).call()
  console.log(balance)
  return balance
}
getLimcBalance(walletAddress)

// в функцию balanceOf контракта USDT передают адрес кошелька, который подключили
const api = axios.create({
  baseURL: 'https://api.bscscan.com/api',
  timeout: 30000, // 30 secs
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
const myKey = '2WPRCBSXAY2VH1ZVGZQXK2VDUSJ4GX9XJV' // bcscan api key, мб надо в другом месте хранить

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
  const contactAdress = '0xe4b62383c69b33bb0d51f106b72fb38ab49b9480' // USDT contract address, required

  const response = await api.get(
    `?module=account&action=tokenbalance&contractaddress=${contactAdress}&address=${address}&tag=latest&apikey=${myKey}`,
  )
  const { result } = response.data
  if (Number(result) === 0) {
    return 0
  }

  const resultString = String(result)
  const firstPart = resultString.substr(0, resultString.length - 6)
  const secondPart = resultString.substr(resultString.length - 6).substr(0, 2)
  // беру последние 6 символов пришедшего баланса, из этих шести беру 2
  const entire = `${firstPart},${secondPart}`
  console.log('USDT BALANCE', entire)
  return entire
}

// async function getLimcBalance(address: string) {
//   const contactAdress = '0xae608d06816dd2e2feeb4e2dea9eb807786cdc43' // LIMC contract address, required

//   const response = await api.get(
//     `?module=account&action=tokenbalance&contractaddress=${contactAdress}&address=${address}&tag=latest&apikey=${myKey}`,
//   )
//   const { result } = response.data
//   if (Number(result) === 0) {
//     return 0
//   }

//   console.log('LIMC BALANCE', result)
//   return result
//   // const resultString = String(result)
//   // const firstPart = resultString.substr(0, resultString.length - 18)
//   // const secondPart = resultString.substr(resultString.length - 18).substr(0, 2)
//   // // беру последние 18 символов пришедшего баланса, из этих шести беру 2
//   // const entire = `${firstPart},${secondPart}`
//   // console.log('LIMC BALANCE', entire)
//   // return entire
// }
