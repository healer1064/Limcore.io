import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SizeArrow } from '@icons/SizeArrow'
import { DataCenterYellowArrow } from '@icons/DataCenterYellowArrow'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { IItem, InfoTableItem } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem'
import { ProgressBar } from '@components/DataCenter/components/Owners/parts/OwnersTable/parts/ProgressBar'
import { ExpandButton } from '@components/DataCenter/components/Owners/parts/OwnersTable/parts/ExpandButton'
import { formatNumerals } from '@helpers/formatNumerals'

const data = [
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HPP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HHP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
  {
    hardDisk: 'Seagate, MB8000JEQVA',
    size: 16,
    quantity: 147,
    temperature: 65,
    Vendor: 'HP',
    Product: 'MB8000JEQVA',
    UserCapacity: '8,001,563,222,016 bytes [8.00TB]',
    RotationRate: 7200,
    FormFactor: 3.5,
  },
]

export const InfoTable: React.FC = () => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])

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
        {data && data.map((item: IItem, i: number) => <InfoTableItem index={i} key={item.hardDisk + i} item={item} />)}
      </ul>
      <div className={styles.infoTable__loadMore__group}>
        <ProgressBar current={rows} limit={data.length} value='дисков' />
        {rows !== data.length && (
          <div className={styles.button_container}>
            <ExpandButton data={data} setRows={setRows} rows={rows} arr={arr} setArr={setArr}>
              Загрузить еще {data.length - rows > 10 ? 10 : data.length - rows}
              {formatNumerals(data.length - rows > 10 ? 10 : data.length - rows, [' диск', ' диска', ' дисков'])}
            </ExpandButton>
          </div>
        )}
      </div>
    </div>
  )
}
