import React from 'react'
import styles from './styles.module.scss'
import { SizeArrow } from '@icons/SizeArrow'
import { DataCenterYellowArrow } from '@icons/DataCenterYellowArrow'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { InfoTableItem } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem'

const data = [
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
  { hardDisk: 'Seagate, MB8000JEQVA', size: 16, quantity: 147, temperature: 65 },
]

export const InfoTable: React.FC = () => {
  return (
    <div className={styles.infoTable}>
      <LoadLine className={styles.infoTable__load__line} classNameBar={styles.infoTable__load__line__bar} width='40%' />
      <div className={styles.infoTable__info}>
        <div className={styles.infoTable__group}>
          <p className={styles.infoTable__group__text}>В работе: 450 TB / 900 TB</p>
          <div className={styles.infoTable__group__logo}>
            BscScan
            <DataCenterYellowArrow />
          </div>
        </div>
        <p className={styles.infoTable__actual__date}>Актуально на 22:52, 03.02.22</p>
      </div>
      <div className={styles.infoTable__navigations}>
        <div className={`${styles.infoTable__navigations__hard__disk} ${styles.infoTable__navigations__text}`}>
          Жесткий диск
        </div>
        <div className={`${styles.infoTable__navigations__size} ${styles.infoTable__navigations__text}`}>
          Объем
          <span className={styles.infoTable__navigations__size__arrow}>
            <SizeArrow />
          </span>
        </div>
        <div className={`${styles.infoTable__navigations__quantity} ${styles.infoTable__navigations__text}`}>
          Количество плотов
        </div>
        <div className={`${styles.infoTable__navigations__temperature} ${styles.infoTable__navigations__text}`}>
          Температура
        </div>
      </div>
      <ul className={styles.infoTable__list}>
        {data && data.map((item, i) => <InfoTableItem index={i} key={item.hardDisk + i} {...item} />)}
      </ul>
      <div className={styles.infoTable__loadMore__group}>
        <div className={styles.infoTable__loadMore__group__info}>Показано 10 из 100 дисков</div>
        <LoadLine
          className={styles.infoTable__loadMore__group__line}
          classNameBar={styles.infoTable__loadMore__group__line__bar}
          width='40%'
        />
        <button className={styles.infoTable__loadMore__group__btn}>Загрузить еще 10 дисков</button>
      </div>
    </div>
  )
}
