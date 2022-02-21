import React, { useState } from 'react'
import styles from './styles.module.scss'
import { CalculatorCard } from './components/CalculatorCard/CalculatorCard'
import { Disks } from './components/Disks/Disks'
import { Owners } from './components/Owners/CalculatorCard'
import { Emission } from './components/Emission/CalculatorCard'
import clsx from 'clsx'
import useWindowSize from '@helpers/useWindowSizeHook'
import { MobileTab } from './components/MobileTab'
import { Spinner } from '@components/Spinner'
import { MobileNavBar } from './components/MobileNavBar'

export const DataCenter = ({ className }) => {
  const { width } = useWindowSize()
  const desktop = width > 971
  const [view, setView] = useState<'disks' | 'owners' | 'emission'>('disks')
  const [mobileView, setMobileView] = useState<'disks' | 'owners' | 'emission' | 'choice'>('choice')

  return (
    <>
      <section className={clsx(styles.dataCenterContainer, className)}>
        {width === undefined ? (
          <Spinner />
        ) : (
          <div className={styles.wrapper}>
            {!desktop ? (
              <>
                {mobileView === 'choice' ? (
                  <div className={styles.mobile_wrapper}>
                    <h2 className={styles.dataCenterContainer__title_mobile}>DataCenter</h2>
                    <MobileTab
                      onClick={() => setMobileView('disks')}
                      title='Рабочий объем пространства'
                      data='18 900 TB'
                    />
                    <div className={styles.sign_spacer}>+</div>
                    <MobileTab onClick={() => setMobileView('owners')} title='Владельцы с lock up' data='1 000 LIMC' />
                    <div className={styles.sign_spacer}>=</div>
                    <MobileTab
                      onClick={() => setMobileView('emission')}
                      title='Общая эмиссия токена LIMC'
                      data='19 900 LIMC'
                      info
                      infoTitle='Почему формула может не сходиться?'
                      infoData='Обновление эмиссии происходит каждые сутки в 21:00 по МСК, а обновление рабочего объема — в реальном времени. Поэтому, на некоторое время формула может не сходится'
                    />
                  </div>
                ) : (
                  <>
                    <h2 className={styles.dataCenterContainer__title_mobile}>DataCenter</h2>
                    <div className={styles.nav_wrapper}>
                      <MobileNavBar
                        onDisksHandler={() => setMobileView('disks')}
                        onEmissionHandler={() => setMobileView('emission')}
                        onOwnersHandler={() => setMobileView('owners')}
                        mobileView={mobileView}
                        width={width}
                      />
                    </div>
                    <div className={clsx({ [styles.main]: true, [styles.main_mobile]: !desktop })}>
                      {mobileView === 'disks' && <Disks desktop={desktop} />}
                      {mobileView === 'owners' && <Owners desktop={desktop} />}
                      {mobileView === 'emission' && <Emission desktop={desktop} />}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <h2 className={styles.dataCenterContainer__title}>DataCenter</h2>
                <div className={styles.calculator}>
                  <CalculatorCard
                    data='18 900 TB'
                    active={view === 'disks'}
                    onClick={() => {
                      setView('disks')
                    }}
                  >
                    Рабочий объем пространства
                  </CalculatorCard>
                  <span className={styles.calculator__operator}>+</span>
                  <CalculatorCard
                    data='1 000 LIMC'
                    active={view === 'owners'}
                    onClick={() => {
                      setView('owners')
                    }}
                  >
                    Владельцы с lock up
                  </CalculatorCard>
                  <span className={styles.calculator__operator}>=</span>
                  <CalculatorCard
                    data='19 900 limc'
                    tooltip
                    active={view === 'emission'}
                    onClick={() => {
                      setView('emission')
                    }}
                  >
                    Общая эмиссия токена LIMC
                  </CalculatorCard>
                </div>
                <div className={clsx({ [styles.main]: true, [styles.main_mobile]: !desktop })}>
                  {view === 'disks' && <Disks desktop={desktop} />}
                  {view === 'owners' && <Owners desktop={desktop} />}
                  {view === 'emission' && <Emission desktop={desktop} />}
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </>
  )
}
