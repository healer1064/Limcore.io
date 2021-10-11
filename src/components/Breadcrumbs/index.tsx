import React from 'react'
import Styles from './style.module.scss'

import grayArrowRight from '@icons/gray_arrow_right.svg'

import { useLocation, Link } from 'react-router-dom'
import classNames from 'classnames/bind'

export const Breadcrumbs = (props) => {
  const location = useLocation()
  return (
    <div className={Styles.breadcrumbs}>
      {props.breadCrumbs.map((item, index) => {
        return (
          <div key={item.label} className={Styles.breadcrumbs__item}>
            <Link to={item.link} className={Styles.breadcrumbs__link}>
              <span
                className={classNames(
                  { [`${Styles.breadcrumbs__text_active}`]: item.link === location.pathname },
                  `${Styles.breadcrumbs__text}`,
                )}
              >
                {item.label}
              </span>
            </Link>
            {props.breadCrumbs.length - 1 !== index && (
              <div className={Styles.breadcrumbs_arrow_container}>
                <img className={Styles.breadcrumbs_arrow_container__image} src={grayArrowRight} alt='icon' />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
