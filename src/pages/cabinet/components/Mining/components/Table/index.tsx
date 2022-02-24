import React, { useCallback, useState } from 'react'

import styles from './styles.module.scss'
import { Coin } from './mockData'
import { THead } from './components/THead'
import { THeadMobile } from './components/THeadMobile'
import { TCryptoItem } from './components/TCryptoItem'
import { TCryptoItemMobile } from './components/TCryptoItemMobile'
import { ForkModal } from './components/ForkModal'

interface TableProps {
  coins: Coin[]
  clientWidth: number
}

export const Table: React.FC<TableProps> = ({ coins, clientWidth }) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const [modalFork, setModalFork] = useState<Coin>()

  const [selectedCoins, setSelectedCoins] = useState<Coin[]>([])
  const [coinsState] = useState<Coin[]>(coins)

  const onChangeSelectedCoins = () => {
    if (selectedCoins.length > 0) {
      return setSelectedCoins(() => [])
    }
    return setSelectedCoins(() => coinsState)
  }

  const onChangeSelectCoin = (id: number) => {
    return () => {
      const clickedCoin = coinsState.find((coin) => coin.id === id)

      if (selectedCoins.some((selCoin) => selCoin.id === id)) {
        return setSelectedCoins((previous) => previous.filter((selCoin) => selCoin.id !== id))
      }

      return setSelectedCoins((previous) => [...previous, clickedCoin])
    }
  }

  const onClickOpen = useCallback((fork: Coin) => {
    return () => {
      setModalFork(() => fork)
      setModalOpened(() => true)
    }
  }, [])
  const onClickClose = () => {
    setModalOpened(() => false)
  }

  const mobileConditon = clientWidth <= 768
  const headCheckbox = selectedCoins.length === coinsState.length

  const purseConnect = true

  return (
    <div className={styles.table} style={{ borderTop: mobileConditon ? 'none' : '2px solid rgba(17, 32, 34, 1)' }}>
      <ForkModal fork={modalFork} modalOpened={modalOpened} onClickClose={onClickClose} purseConnect={purseConnect} />
      {mobileConditon ? (
        <>
          <THeadMobile checked={headCheckbox} onChangeSelectedCoins={onChangeSelectedCoins} />
          {coinsState.map((coin, idx) => {
            const background = idx % 2 === 0 ? 'rgba(28, 50, 52, 1)' : 'rgba(25, 42, 44, 1)'
            return (
              <React.Fragment key={coin.id}>
                <div className={styles.table__itemMobile} style={{ background }}>
                  <TCryptoItemMobile
                    onClickModalOpen={onClickOpen(coin)}
                    coin={coin}
                    checked={selectedCoins.some((selCoin) => selCoin.id === coin.id)}
                    onChange={onChangeSelectCoin(coin.id)}
                  />
                </div>
              </React.Fragment>
            )
          })}
        </>
      ) : (
        <>
          <THead checked={headCheckbox} onChangeSelectedCoins={onChangeSelectedCoins} />
          {coinsState.map((coin, idx) => {
            const background = idx % 2 === 0 ? 'rgba(28, 50, 52, 1)' : 'rgba(25, 42, 44, 1)'
            return (
              <div className={styles.table__item} style={{ background }} key={coin.id}>
                <TCryptoItem
                  onClickOpenModal={onClickOpen(coin)}
                  coin={coin}
                  checked={selectedCoins.some((selCoin) => selCoin.id === coin.id)}
                  onChange={onChangeSelectCoin(coin.id)}
                />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
