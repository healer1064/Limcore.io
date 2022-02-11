import { ExternalLink } from '@components/ExternalLink'
import { OwnersCounter } from '@components/OwnersCounter'
import { OwnersTable } from '@components/OwnersTable'
import { ReactComponent as SearchIcon } from '@icons/searchGlass.svg'
import React from 'react'
import styles from './styles.module.scss'

const data = {
  owners: 400,
  data: [
    {
      rating: '1',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '3',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '3',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '1',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
    {
      rating: '2',
      adress: '0xea0A6E3c511bbD10f4519EcE37Dc24887e11b55d',
      tokens: '102 LIMC',
      days: '80',
      info: [
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
        { dates: '22 февраля, 2021', size: '120 TB', graphs: { current: 6, limit: 60 } },
      ],
    },
  ],
}

export const Owners = () => {
  return (
    <>
      <div className={styles.owners_container}>
        <OwnersCounter number={data.owners} />
        <div className={styles.text_wrapper}>
          <p className={styles.owners_heading}>Владельцы</p>
          <p className={styles.owners_description}>С lock up периодом</p>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.table__header}>
          <p className={styles.table__wallets_number}>Всего кошельков: {data.owners}</p>
          <div className={styles.dot} />
          <ExternalLink link='*' text='BscScan' />
          {/* TODO make a search component */}
          <button type='button' className={styles.search_button}>
            <SearchIcon />
          </button>
          {/* TODO make a search component */}
        </div>
        <div className={styles.table__container}>
          <OwnersTable data={data.data} />
        </div>
      </div>
    </>
  )
}
