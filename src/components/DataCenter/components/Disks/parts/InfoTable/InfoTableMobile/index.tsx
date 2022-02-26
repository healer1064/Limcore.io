import React, { useState } from 'react'
import styles from './styles.module.scss'
import { LoadLine } from '@components/DataCenter/components/Disks/parts/LoadLine'
import { DataCenterYellowArrow } from '@icons/DataCenterYellowArrow'
import { SizeArrow } from '@icons/SizeArrow'
import { InfoTableMobileItem } from '@components/DataCenter/components/Disks/parts/InfoTable/InfoTableMobile/infoTableMobileItem'
import { IItem } from '@components/DataCenter/components/Disks/parts/InfoTable/components/InfoTableItem'
import { ExpandButton } from '@components/DataCenter/components/Owners/parts/OwnersTable/parts/ExpandButton'
import { formatNumerals } from '@helpers/formatNumerals'
import { ProgressBar } from '@components/DataCenter/components/Owners/parts/OwnersTable/parts/ProgressBar'

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

export const InfoTableMobile: React.FC = () => {
  const [rows, setRows] = useState(data.length > 10 ? 10 : data.length)
  const [arr, setArr] = useState([...data.slice(0, rows)])

  return (
    <div className={styles.infoTableMobile}>
      <LoadLine className={styles.infoTableMobile__line} classNameBar={styles.infoTableMobile__line__bar} width='40%' />
      <div className={styles.infoTableMobile__info}>
        <div className={styles.infoTableMobile__group}>
          <p className={styles.infoTableMobile__group__text}>В работе: 450 TB / 900 TB</p>
          <div className={styles.infoTableMobile__group__logo}>
            BscScan
            <DataCenterYellowArrow />
          </div>
        </div>
        <p className={styles.infoTableMobile__actual__date}>Актуально на 22:52, 03.02.22</p>
      </div>
      <div className={styles.infoTableMobile__navigations}>
        <div
          className={`${styles.infoTableMobile__navigations__hard__disk} ${styles.infoTableMobile__navigations__text}`}
        >
          Жесткий диск
        </div>
        <div className={`${styles.infoTableMobile__navigations__size} ${styles.infoTableMobile__navigations__text}`}>
          Объем
          <span className={styles.infoTableMobile__navigations__size__arrow}>
            <SizeArrow />
          </span>
        </div>
      </div>
      <ul className={styles.infoTableMobile__list}>
        {data &&
          data.map((item: IItem, i: number) => <InfoTableMobileItem index={i} key={item.hardDisk + i} item={item} />)}
      </ul>
      <div className={styles.infoTableMobile__loadMore__group}>
        <ProgressBar current={rows} limit={data.length} value='дисков' />
        {rows !== data.length && (
          <div className={styles.button_container}>
            <ExpandButton isMobile data={data} setRows={setRows} rows={rows} arr={arr} setArr={setArr}>
              Загрузить еще {data.length - rows > 10 ? 10 : data.length - rows}
              {formatNumerals(data.length - rows > 10 ? 10 : data.length - rows, [' диск', ' диска', ' дисков'])}
            </ExpandButton>
          </div>
        )}
      </div>
    </div>
  )
}
