import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

const tempLink = [
  { id: 0, value: 'Home', link: '/' },
  { id: 1, value: 'Каталог', link: '/catalog' },
  { id: 2, value: 'Заказы', link: '/orders' },
  { id: 3, value: 'Не найдена', link: '/not-found' },
  { id: 4, value: 'Страница в разработке', link: '/agreements' },
]

export const Header = () => {
  return (
    <div className={styles.header}>
      {tempLink?.map((item) => {
        return (
          <Link key={item.id} to={item.link}>
            <span>{item.value}</span>
          </Link>
        )
      })}
    </div>
  )
}
