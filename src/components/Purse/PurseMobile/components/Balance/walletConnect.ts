import Web3 from 'web3'
import contract from './bep20'

const web3 = new Web3('https://bsc-dataseed.binance.org/')

export const getUsdt = async (address: string) => {
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
  const contractAddress = '0x55d398326f99059fF775485246999027B3197955' // USDT bscscan contract address
  const contractUsdt = new web3.eth.Contract(contract as any, contractAddress)

  const balance = await contractUsdt.methods.balanceOf(address).call()
  return balance / 10 ** 18
}
async function getLimcBalance(address: string) {
  const contractAddress = '0x078ca3af061603bd5a1Ee2388116DAaCe87244C3' // LIMC contract address
  const contractLimc = new web3.eth.Contract(contract as any, contractAddress)

  const balance = await contractLimc.methods.balanceOf(address).call()
  return balance / 10 ** 18
}
