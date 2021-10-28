import React, { useRef } from 'react'
import Styles from './styles.module.scss'
import roadMapDone from '@icons/roadMapDone.svg'
import roadMapInProgress from '@icons/roadMapInProgress.svg'
import scrollButtonLeft from '@icons/arrow-right-blue.svg'
import scrollButtonRight from '@icons/arrow-left-blue.svg'

export const RoadMapDesktop = () => {
  const roadmapRef = useRef<HTMLDivElement>(null)
  const scrollLeft = () => {
    roadmapRef.current.scrollLeft += 300
  }
  const scrollRight = () => {
    roadmapRef.current.scrollLeft -= 300
  }

  return (
    <>
      <button className={`${Styles.scrollButton} ${Styles.scrollButtonLeft}`} type='button' onClick={scrollLeft}>
        <img className={Styles.scrollIcon} src={scrollButtonLeft} />
      </button>
      <button className={`${Styles.scrollButton} ${Styles.scrollButtonRight}`} type='button' onClick={scrollRight}>
        <img className={Styles.scrollIcon} src={scrollButtonRight} />
      </button>
      <div className={Styles.roadMap} ref={roadmapRef}>
        <div className={Styles.line} />
        <div className={`${Styles.item} ${Styles.test}`}>
          <p className={Styles.itemDate}>31.05.2021</p>
          <h4 className={Styles.itemTitle}>Сборка тестовой стойки для майнинга</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalTest}`} />
          <img className={Styles.icon} src={roadMapDone} alt='Иконка' />
        </div>
        <div className={`${Styles.item_down} ${Styles.cabinet1}`}>
          <img className={Styles.icon_down} src={roadMapDone} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalCabinet1}`} />
          <p className={Styles.itemDate}>24.06.2021</p>
          <h4 className={Styles.itemTitle}>Запуск личного кабинета v0.1</h4>
        </div>
        <div className={`${Styles.item} ${Styles.avans}`}>
          <img className={Styles.icon} src={roadMapDone} alt='Иконка' />
          <p className={Styles.itemDate}>10.07.2021</p>
          <h4 className={Styles.itemTitle}>
            Подписание и авансирование договора о покупке земельного участка и здания
          </h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalAvans}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.elec}`}>
          <div className={`${Styles.vertikal} ${Styles.vertikalElec}`} />
          <p className={Styles.itemDate}>22.07.2021</p>
          <h4 className={Styles.itemTitle}>Прокладка первых электрических сетей</h4>
          <img className={Styles.icon_down} src={roadMapDone} alt='Иконка' />
        </div>
        <div className={`${Styles.item} ${Styles.reg}`}>
          <img className={Styles.icon} src={roadMapDone} alt='Иконка' />
          <p className={Styles.itemDate}>03.08.2021</p>
          <h4 className={Styles.itemTitle}>Завершение регистрации здания и земельного участка</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalReg}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.token}`}>
          <div className={`${Styles.vertikal} ${Styles.vertikalToken}`} />
          <p className={Styles.itemDate}>15.10.2021</p>
          <h4 className={Styles.itemTitle}>Создание Limcore Token</h4>
          <img className={Styles.icon_down} src={roadMapDone} alt='Иконка' />
        </div>
        <div className={`${Styles.item} ${Styles.zapusk}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>01.11.2021</p>
          <h4 className={Styles.itemTitle}>Запуск Российского юридического лица</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalZapusk}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.swiss}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalSwiss}`} />
          <p className={Styles.itemDate}>В процессе</p>
          <h4 className={Styles.itemTitle}>Регистрация Швейцарского юридического лица</h4>
        </div>
        <div className={`${Styles.item} ${Styles.cabinet2}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>27.10.2021</p>
          <h4 className={Styles.itemTitle}>Запуск личного кабинета v0.2</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalCabinet2}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.round1}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalRound1}`} />
          <p className={Styles.itemDate}>27.10 - 30.12.2021</p>
          <h4 className={Styles.itemTitle}>Старт Round №1 1 LIMC = $95 / 80,000 LIMC</h4>
        </div>
        <div className={`${Styles.item} ${Styles.blockchain}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>26.10 - 27.10.2021</p>
          <h4 className={Styles.itemTitle}>Blockchain Life. Diamond Sponsor</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalBlockchain}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.chia}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalChia}`} />
          <p className={Styles.itemDate}>конец декабря 2021</p>
          <h4 className={Styles.itemTitle}>Chia Network IPO</h4>
        </div>
        <div className={`${Styles.item} ${Styles.start}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>10.01 – 25.02.2022</p>
          <h4 className={Styles.itemTitle}>Старт Round №2 1 LIMC = min $110 / 120,000 LIMC</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalStart}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.list}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalList}`} />
          <p className={Styles.itemDate}>25.01.2022</p>
          <h4 className={Styles.itemTitle}>Листинг LIMC на биржах HITBTC + BitGlobal</h4>
        </div>
        <div className={`${Styles.item} ${Styles.remont}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>25.02.2022</p>
          <h4 className={Styles.itemTitle}>Завершение ремонта ЦОД в г. Можайск</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalRemont}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.round3}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalRound3}`} />
          <p className={Styles.itemDate}>2022</p>
          <h4 className={Styles.itemTitle}>Старт Round №3</h4>
        </div>
        <div className={`${Styles.item} ${Styles.round4}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>2022</p>
          <h4 className={Styles.itemTitle}>Старт Round №4</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalRound4}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.round5}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalRound5}`} />
          <p className={Styles.itemDate}>2022</p>
          <h4 className={Styles.itemTitle}>Старт Round №5</h4>
        </div>
        <div className={`${Styles.item} ${Styles.mvp}`}>
          <img className={Styles.icon} src={roadMapInProgress} alt='Иконка' />
          <p className={Styles.itemDate}>2023 – 2024</p>
          <h4 className={Styles.itemTitle}>Проектирование и создание MVP собственного ленточного накопителя</h4>
          <div className={`${Styles.vertikal} ${Styles.vertikalMvp}`} />
        </div>
        <div className={`${Styles.item_down} ${Styles.seriya}`}>
          <img className={Styles.icon_down} src={roadMapInProgress} alt='Иконка' />
          <div className={`${Styles.vertikal} ${Styles.vertikalSeriya}`} />
          <p className={Styles.itemDate}>2025 – 2026</p>
          <h4 className={Styles.itemTitle}>Запуск серийного производства ленточного накопителя данных</h4>
        </div>
      </div>
    </>
  )
}
