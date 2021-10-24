import React, { FC, ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import styles from './List.module.scss'
import { Auth } from '../../constants'
import { useAppSelector } from '../../../../../../app/redux/hooks'
import { authSelector } from '../../../../redux/auth.slice'
import { enumToArray } from '../../helpers/enum.helpers'

type ListProps = { [key: string]: string | boolean } & ComponentPropsWithoutRef<'ul'>

const List: FC<ListProps> = () => {
  const auth = useAppSelector(authSelector)
  return (
    <ul className={styles.list}>
      {enumToArray(Auth).map((step, index, array) => {
        return (
          <li
            key={index}
            className={classNames(styles.listItem, {
              [styles.listItemActive]: array.length - (step + 1) === auth.authStep,
            })}
          >
            {array.length - (step + 1) + 1}
          </li>
        )
      })}
    </ul>
  )
}

export default List
