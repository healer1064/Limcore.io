import React, { useEffect, useState } from 'react'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'
import { Spinner } from '@components/Spinner'
import { Header } from '@components/Header'
import { HeaderMobile } from '@components/Header/components/HeaderMobile'
import { Chat } from '@components/Chat'
import { LandingPage } from '../../pages/landing'
import { getForksPrice } from '@components/Wallet/redux/walletSlice'
import { DataCenterPage } from '../../pages/data-center'
import { Borders } from '@components/Borders'
import { CabinetPage } from '../../pages/cabinet'
import { FooterShorted } from '@components/Footer/FooterShorted'

const App = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const desktop = width >= 769
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  useEffect(() => {
    dispatch(getForksPrice())
  }, [])

  return (
    <Router>
      <div className={Styles.app_container}>
        {isLoading && (
          <div className={Styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
        {desktop && !isLoading ? <Header /> : <HeaderMobile />}
        <Borders />
        <>
          <main className={desktop ? `${Styles.main}` : `${Styles.main} ${Styles.main_mobile}`}>
            {!isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/data-center' exact component={DataCenterPage} />
                <Route path='/my' component={CabinetPage} />
                <Route path='/chat'>
                  <Redirect to='/my' />
                </Route>
                <Route path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
            )}

            {isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/my' exact component={CabinetPage} />
                {!desktop && (
                  <>
                    <Route path='/broadcasts'>
                      <Redirect to='/my' />
                    </Route>
                    <Route path='/chat' exact component={Chat} />
                  </>
                )}
                <Route path='*'>
                  <Redirect to='/my' />
                </Route>
              </Switch>
            )}
          </main>
          {!isAuth && window.location.pathname === '/my' && <FooterShorted />}
          {/* {isAuth && !desktop && window.location.pathname === '/my' && <FooterMobile />} */}
        </>
      </div>
    </Router>
  )
}

export default App
