import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Styles from './styles.module.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import limcoreIcon from '@icons/limcore.svg'
import checkIcon from '@icons/check.svg'
import tchiaIcon from '@icons/tchia.png'
import tflaxIcon from '@icons/tflax.png'
import thddIcon from '@icons/thdd.png'
import tnchainIcon from '@icons/tnchain.png'
import tsilicoinIcon from '@icons/tsilicoin.png'
import tspareIcon from '@icons/tspare.png'
import tfloraIcon from '@icons/tflora.png'
import tgreendogeIcon from '@icons/tgreendoge.png'
import tstaiIcon from '@icons/tstai.png'
import tdogechiaIcon from '@icons/tdogechia.png'
import tappleIcon from '@icons/tapple.png'
import twheatIcon from '@icons/twheat.png'
import tmaizeIcon from '@icons/tmaize.png'
import tchivesIcon from '@icons/tchives.png'
import tkaleIcon from '@icons/tkale.png'
import tavacadoIcon from '@icons/tavacado.png'
import tsocksIcon from '@icons/tsocks.png'
import tcryptodogeIcon from '@icons/tcryptodoge.png'
import ttacoIcon from '@icons/ttaco.png'
import tluckyIcon from '@icons/tlucky.png'

export const CalculatorSlider: React.FC = () => {
  return (
    <div className={Styles.slider}>
      <h3 className={Styles.caption}>
        <img src={limcoreIcon} alt='Иконка' /> 1 LIMC одновременно майнит все токены
      </h3>
      <span className={Styles.description}>Отмеченные токены уже майнятся компанией Limcore</span>
      <span className={Styles.description}>Остальные в процессе интеграции</span>
      <div className={Styles.container}>
        <Swiper spaceBetween={120} slidesPerView={3}>
          <SwiperSlide>
            <div className={Styles.slide}>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tchiaIcon} alt='Иконка' />
                  <span className={Styles.name}>Chia</span>
                </div>
                <span className={Styles.price}>$162.5400</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tflaxIcon} alt='Иконка' />
                  <span className={Styles.name}>Flax</span>
                </div>
                <span className={Styles.price}>$0.0196</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={thddIcon} alt='Иконка' />
                  <span className={Styles.name}>HDDcoin</span>
                </div>
                <span className={Styles.price}>$0.2823</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tnchainIcon} alt='Иконка' />
                  <span className={Styles.name}>N-Chain</span>
                </div>
                <span className={Styles.price}>$0.1326</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tsilicoinIcon} alt='Иконка' />
                  <span className={Styles.name}>Silicoin</span>
                </div>
                <span className={Styles.price}>$0.0717</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.slide}>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tspareIcon} alt='Иконка' />
                  <span className={Styles.name}>Spare</span>
                </div>
                <span className={Styles.price}>$0.3425</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tfloraIcon} alt='Иконка' />
                  <span className={Styles.name}>Flora</span>
                </div>
                <span className={Styles.price}>$0.0196</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tgreendogeIcon} alt='Иконка' />
                  <span className={Styles.name}>GreenDoge</span>
                </div>
                <span className={Styles.price}>$0.2823</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tstaiIcon} alt='Иконка' />
                  <span className={Styles.name}>STAI</span>
                </div>
                <span className={Styles.price}>$0.1326</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tdogechiaIcon} alt='Иконка' />
                  <span className={Styles.name}>DogeChia</span>
                </div>
                <span className={Styles.price}>$0.0717</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.slide}>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tappleIcon} alt='Иконка' />
                  <span className={Styles.name}>Apple</span>
                </div>
                <span className={Styles.price}>$0.3425</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={twheatIcon} alt='Иконка' />
                  <span className={Styles.name}>Wheat</span>
                </div>
                <span className={Styles.price}>$0.0196</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tmaizeIcon} alt='Иконка' />
                  <span className={Styles.name}>Maize</span>
                </div>
                <span className={Styles.price}>$0.2823</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tchivesIcon} alt='Иконка' />
                  <span className={Styles.name}>Chives</span>
                </div>
                <span className={Styles.price}>$0.2823</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tkaleIcon} alt='Иконка' />
                  <span className={Styles.name}>Kale</span>
                </div>
                <span className={Styles.price}>$0.1326</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.slide}>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tavacadoIcon} alt='Иконка' />
                  <span className={Styles.name}>Avocado</span>
                </div>
                <span className={Styles.price}>$0.3425</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tsocksIcon} alt='Иконка' />
                  <span className={Styles.name}>Socks</span>
                </div>
                <span className={Styles.price}>$0.0196</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tcryptodogeIcon} alt='Иконка' />
                  <span className={Styles.name}>CryptoDoge</span>
                </div>
                <span className={Styles.price}>$0.2823</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={ttacoIcon} alt='Иконка' />
                  <span className={Styles.name}>Taco</span>
                </div>
                <span className={Styles.price}>$0.1326</span>
              </div>
              <div className={Styles.token}>
                <div className={Styles.block}>
                  <img src={checkIcon} alt='Иконка' />
                  <img className={Styles.icon} src={tluckyIcon} alt='Иконка' />
                  <span className={Styles.name}>Lucky</span>
                </div>
                <span className={Styles.price}>$0.0717</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
