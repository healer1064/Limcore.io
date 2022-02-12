import React, { useEffect, useState } from 'react'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { checkToken, refreshToken, setIsAuth, setWalletConnectSoldLimcs } from '../../pages/auth/redux/authSlice'
import { FooterMobile } from '../Footer/FooterMobile'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import Styles from './style.module.scss'
import { Spinner } from '@components/Spinner'
import { Header } from '@components/Header'
import { HeaderMobile } from '@components/Header/components/HeaderMobile'
import { AuthMobile } from '../../pages/auth/AuthMobile'
import { Chat } from '@components/Chat'
import { LandingPage } from '../../pages/landing'
import { Purse } from '@components/Purse'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { getUser } from '@app/redux/userSlice'
import { getSoldLimcs } from '@components/Purse/PurseMobile/components/Balance/walletConnect'
import { getForksPrice } from '@components/Wallet/redux/walletSlice'
import { DataCenterPage } from '../../pages/data-center'
import { Borders } from '@components/Borders'

const App = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const desktop = width >= 769
  const [isLoading, setIsLoading] = useState(true)
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  useEffect(() => {
    const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }
    getSoldLimcs().then((res) => dispatch(setWalletConnectSoldLimcs(res)))
    dispatch(getForksPrice())

    if (tokenObj.access) {
      dispatch(checkToken({ token: tokenObj.access }))
        .then(() => {
          dispatch(setIsAuth(true))
          dispatch(getUser())
          setIsLoading(false)
        })
        .catch(() => {
          dispatch(refreshToken({ refresh: tokenObj.refresh }))
        })
    } else {
      setIsLoading(false)
    }
  }, [isAuth])

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
          {/* <Calculator /> */}
          <main className={desktop ? `${Styles.main}` : `${Styles.main} ${Styles.main_mobile}`}>
            {!isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/data-center' exact component={DataCenterPage} />
                {!desktop && <Route path='/auth' exact component={AuthMobile} />}
                <Route path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
            )}

            {isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/my' exact component={Purse} />
                {!desktop && (
                  <>
                    <Route path='/broadcasts'>
                      <Redirect to='/my' />
                    </Route>
                    <Route path='/chat' exact component={Chat} />
                    <Route path='/profile' exact component={ProfileMobile} />
                  </>
                )}
                <Route path='*'>
                  <Redirect to='/my' />
                </Route>
              </Switch>
            )}
          </main>
          {isAuth && !desktop && window.location.pathname === '/my' && <FooterMobile />}
        </>
      </div>
    </Router>
  )
}

export default App
