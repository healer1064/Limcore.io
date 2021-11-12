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

// const api = axios.create({
//   baseURL: 'https://ethereum-api.xyz',
//   timeout: 30000, // 30 secs
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })

// export const getAccountAssets = async (address, chainId) => {
//   try {
//     const assets = await apiGetAccountAssets(address, chainId)
//     return assets
//   } catch (error) {
//     console.error(error)
//   }
// }

// async function apiGetAccountAssets(address: string, chainId: number) {
//   const response = await api.get(`/account-assets?address=${address}&chainId=${chainId}`)
//   console.log(response)
//   const { result } = response.data
//   return result
// }

// const api = axios.create({
//   baseURL: 'https://api.bscscan.com/api',
//   timeout: 30000, // 30 secs
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })
// // const api = axios.create({
// //   baseURL: 'https://ethereum-api.xyz',
// //   timeout: 30000, // 30 secs
// //   headers: {
// //     Accept: 'application/json',
// //     'Content-Type': 'application/json',
// //   },
// // })

// export const getAccountAssets = async (chainId) => {
//   try {
//     // const assets = await apiGetAccountAssets(address, chainId)
//     // const assets = await apiGetAccountAssets(chainId)
//     const assets = await apiGetAccountAssets()
//     return assets
//   } catch (error) {
//     console.error(error)
//   }
// }

// const myToken = '2WPRCBSXAY2VH1ZVGZQXK2VDUSJ4GX9XJV'

// async function apiGetAccountAssets() {
//   // async function apiGetAccountAssets(address: string, chainId: number) {
//   // async function apiGetAccountAssets(chainId: number) {
//   // const response = await api.get(`/account-assets?address=${address}&chainId=${chainId}`)
//   // console.log(response.data)
//   // const address = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B' // ethirium
//   const target = '0xa9a6c929a2b6e538fe1d2151ad76f751dcb312ae'
//   const address = '0x36928500Bc1dCd7af6a2B4008875CC336b927D57' // usdt address

//   const fromApi1 = '0xdac17f958d2ee523a2206206994597c13d831ec7'
//   const fromApi2 = '0xe04f27eb70e025b78871a2ad7eabe85e61212761'

//   // const response = await api.get(`?module=stats&action=tokensupply&contractaddress=${address}&apikey=${myToken}`)
//   const response = await api.get(
//     `?module=account&action=tokenbalance&contractaddress=${fromApi1}&address=${fromApi2}&tag=latest&apikey=${myToken}`,
//   )
//   console.log(response)
//   const { result } = response.data
//   return result
// }
