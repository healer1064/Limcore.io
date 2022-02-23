import one from './image/one-min.png'
import two from './image/two-min.png'
import three from './image/three-min.png'
import prem from './image/prem-min.png'

import thddIcon from '@icons/thdd.png'
import tsilicoinIcon from '@icons/tsilicoin.png'
import tfloraIcon from '@icons/tflora.png'
import tgreendogeIcon from '@icons/tgreendoge.png'
import tstaiIcon from '@icons/tstai.png'
import tappleIcon from '@icons/tapple.png'
import tmaizeIcon from '@icons/tmaize.png'
import tkaleIcon from '@icons/tkale.png'
import tavacadoIcon from '@icons/tavacado.png'
import tsocksIcon from '@icons/tsocks.png'
import ttacoIcon from '@icons/ttaco.png'
import ttadIcon from '@icons/ttad.png'
import cactusIcon from '@icons/cactusIcon.png'
// import covidIcon from '@icons/covidIcon.png'
// import senoIcon from '@icons/senoIcon.png'
// import chaingreenIcon from '@icons/chaingreen.png'
// import goji from '@icons/gojiIcon.png'

// Список всех форков с их названием, сокращенным именем
//   'Chia' - 'XCH'
//   'Flax' - 'XFX'
//   'N-Chain' - 'NCH'
//   'Socks' - 'SOCK'
//   'Kale' - 'XKA'
//   'Taco' - 'XTX'
//   'staicoin' - 'STAI'
//   'Apple' - 'APPLE'
//   'Goji' - 'GOJ'
//   'Silicoin' - ''
//   'chaingreen' - ''
//   'Maize' - 'XMZ'
//   'Seno' - 'XSE'
//   'Covid' - 'COV'
//   'Cactus' - 'CAC'
//   'HDDcoin' - 'HDD'
//   'FLORA' - 'NCH'
//   'GreenDoge' - 'GDOG'
//   'TAD' - 'TAD'
//   'Avocado' - 'AVO'

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

export const data = [
  {
    color: 'white',
    backgroundImage: thddIcon,
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
    backgroundImage: tsilicoinIcon,
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
    backgroundImage: tfloraIcon,
    name: 'FLORA',
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
    backgroundImage: tgreendogeIcon,
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
    backgroundImage: tstaiIcon,
    name: 'staicoin',
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
    backgroundImage: tappleIcon,
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
    backgroundImage: tmaizeIcon,
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
    backgroundImage: tkaleIcon,
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
    backgroundImage: tavacadoIcon,
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
    backgroundImage: tsocksIcon,
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
    color: 'blue',
    backgroundImage: ttacoIcon,
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
    backgroundImage: ttadIcon,
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
    backgroundImage: cactusIcon,
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
    backgroundImage: cactusIcon,
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
]

export const dataMobile = [
  {
    color: 'white',
    backgroundImage: one,
    name: 'Aboba',
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 100,
      top: 10,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: one,
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 160,
      top: 100,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: one,
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 450,
      top: 100,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: one,
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 230,
      top: 200,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: one,
    imgSize: '11px',
    imgSizeW: '11px',
    diameter: 30,
    margin: 'auto',
    position: {
      left: 450,
      top: 250,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: two,
    imgSize: '28px',
    imgSizeW: '28px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 100,
      top: 150,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'white',
    backgroundImage: three,
    imgSize: '28px',
    imgSizeW: '16px',
    diameter: 50,
    margin: 'auto',
    position: {
      left: 200,
      top: 20,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
  {
    color: 'blue',
    backgroundImage: prem,
    diameter: 50,
    position: {
      left: 50,
      top: 210,
    },
    interval: 1,
    distance: 40,
    step: 40,
  },
]
