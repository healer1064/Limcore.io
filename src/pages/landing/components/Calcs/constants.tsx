import chia from '@icons/forks/chia.png'
import flax from '@icons/forks/flax.png'
import nchain from '@icons/forks/nchain.png'
import socks from '@icons/forks/socks.png'
import kale from '@icons/forks/kale.png'
import taco from '@icons/forks/taco.png'
import stai from '@icons/forks/stai.png'
import apple from '@icons/forks/apple.png'
import goji from '@icons/forks/goji.png'
import silicoin from '@icons/forks/silicoin.png'
import chaingreen from '@icons/forks/chaingreen.png'
import maize from '@icons/forks/maize.png'
import covid from '@icons/forks/covid.png'
import seno from '@icons/forks/seno.png'
import cactus from '@icons/forks/cactus.png'
import hddcoin from '@icons/forks/hddcoin.png'
import flora from '@icons/forks/flora.png'
import greendoge from '@icons/forks/greendoge.png'
import tad from '@icons/forks/tad.png'
import avocado from '@icons/forks/avocado.png'

// Список всех форков с их названием, сокращенным именем
//   'Chia' - 'XCH'
//   'Flax' - 'XFX'
//   'N-Chain' - 'NCH'
//   'Socks' - 'SOCK'
//   'Kale' - 'XKA'
//   'Taco' - 'XTX'
//   'Stai' - 'STAI'
//   'Apple' - 'APPLE'
//   'Goji' - 'XGJ'
//   'Silicoin' - 'SIT'
//   'chaingreen' - 'CGN'
//   'Maize' - 'XMZ'
//   'Seno' - 'XSE'
//   'Covid' - 'COV'
//   'Cactus' - 'CAC'
//   'HDDCoin' - 'HDD'
//   'Flora' - 'XFL'
//   'GreenDoge' - 'GDOG'
//   'TAD' - 'TAD'
//   'Avocado' - 'AVO'

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export const data = [
  {
    color: 'white',
    backgroundImage: hddcoin,
    name: 'HDDCoin',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 50,
      top: 50,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: silicoin,
    name: 'Silicoin',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 550,
      top: 250,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: flora,
    name: 'Flora',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 500,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: greendoge,
    name: 'GreenDoge',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 300,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: stai,
    name: 'Stai',
    imgSize: '11px',
    imgSizeW: '11px',
    margin: 'auto',
    diameter: 30,
    position: {
      left: 200,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: apple,
    name: 'Apple',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 450,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: maize,
    name: 'Maize',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 50,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: kale,
    name: 'Kale',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 600,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: avocado,
    name: 'Avocado',
    imgSize: '28px',
    imgSizeW: '28px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 450,
      top: 0,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: socks,
    name: 'Socks',
    imgSize: '28px',
    imgSizeW: '16px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 200,
      top: 20,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: taco,
    name: 'Taco',
    diameter: 50,
    position: {
      left: 500,
      top: 250,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: tad,
    name: 'TAD',
    diameter: 50,
    position: {
      left: 450,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: cactus,
    name: 'Cactus',
    diameter: 50,
    position: {
      left: 100,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: chia,
    name: 'Chia',
    diameter: 50,
    position: {
      left: 0,
      top: 0,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: flax,
    name: 'Flax',
    diameter: 50,
    position: {
      left: 700,
      top: 700,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: nchain,
    name: 'N-Chain',
    diameter: 50,
    position: {
      left: 350,
      top: 350,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: goji,
    name: 'Goji',
    diameter: 50,
    position: {
      left: 700,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: chaingreen,
    name: 'Chaingreen',
    diameter: 50,
    position: {
      left: 50,
      top: 550,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: covid,
    name: 'Covid',
    diameter: 50,
    position: {
      left: 20,
      top: 20,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: seno,
    name: 'Seno',
    diameter: 50,
    position: {
      left: 50,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
]

export const dataMobile = [
  {
    color: 'white',
    backgroundImage: hddcoin,
    name: 'HDDCoin',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 50,
      top: 50,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: silicoin,
    name: 'Silicoin',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 550,
      top: 250,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: flora,
    name: 'Flora',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 500,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: greendoge,
    name: 'GreenDoge',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 300,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: stai,
    name: 'Stai',
    imgSize: '11px',
    imgSizeW: '11px',
    margin: 'auto',
    diameter: 30,
    position: {
      left: 200,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: apple,
    name: 'Apple',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 450,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: maize,
    name: 'Maize',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 50,
      top: 300,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: kale,
    name: 'Kale',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 600,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: avocado,
    name: 'Avocado',
    imgSize: '28px',
    imgSizeW: '28px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 450,
      top: 0,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: socks,
    name: 'Socks',
    imgSize: '28px',
    imgSizeW: '16px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 200,
      top: 20,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: taco,
    name: 'Taco',
    diameter: 50,
    position: {
      left: 500,
      top: 250,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: tad,
    name: 'TAD',
    diameter: 50,
    position: {
      left: 50,
      top: 210,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: cactus,
    name: 'Cactus',
    diameter: 50,
    position: {
      left: 200,
      top: 20,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: chia,
    name: 'Chia',
    diameter: 50,
    position: {
      left: 100,
      top: 150,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: flax,
    name: 'Flax',
    diameter: 50,
    position: {
      left: 700,
      top: 700,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: nchain,
    name: 'N-Chain',
    diameter: 50,
    position: {
      left: 450,
      top: 250,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: goji,
    name: 'Goji',
    diameter: 50,
    position: {
      left: 230,
      top: 200,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: chaingreen,
    name: 'Chaingreen',
    diameter: 50,
    position: {
      left: 450,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: covid,
    name: 'Covid',
    diameter: 50,
    position: {
      left: 160,
      top: 100,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
  {
    color: 'white',
    backgroundImage: seno,
    name: 'Seno',
    diameter: 50,
    position: {
      left: 100,
      top: 10,
    },
    interval: 1,
    distance: getRandomNumber(100, 200),
    step: getRandomNumber(20, 60),
  },
]
