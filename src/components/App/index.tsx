import React, { useEffect, useState } from 'react'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom'
// import { getTransactions } from '../../pages/auth/redux/auth.slice'
import { checkToken, setIsAuth, setWalletConnectSoldLimcs } from '../../pages/auth/redux/authSlice'

// import { Footer } from '../Footer'
import { FooterMobile } from '../Footer/FooterMobile'
// import { HomePage } from '../../pages/home'
// import { Wrapper } from '../Wrapper'

// import { OrdersPage } from '../../pages/orders'
// import { PageNotFount } from '../../pages/not-found'
// import { DevelopingPage } from '../../pages/developing'
// import { AccessDeniedPage } from '../../pages/access-denied'

import { useAppDispatch, useAppSelector } from '@app/redux/hooks'

import Styles from './style.module.scss'
// import { ProtectedRoute } from '@components/Router/protected-route'
// eslint-disable-next-line camelcase
// import { USER_ROlES } from '../../global-constants'
import { Spinner } from '@components/Spinner'
// import { OrderCatalog } from '../../pages/catalog'
import { Header } from '@components/Header'
import { HeaderMobile } from '@components/Header/HeaderMobile/index'
// import { CabinetPage } from '../../pages/cabinet'
import { AuthMobile } from '../../pages/auth/AuthMobile'

import { Dummy } from '../../components/Dummy'
import { LandingPage } from '../../pages/landing'
import { Purse } from '@components/Purse'
import { BroadcastsMobile } from '@components/Broadcasts/BroadcastsMobile'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { getUser } from '@app/redux/userSlice'
// import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
import { getSoldLimcs } from '@components/Purse/PurseMobile/components/Balance/walletConnect'
import { getForksPrice } from '@components/Wallet/redux/walletSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  const desktop = width >= 769
  const [isLoading, setIsLoading] = useState(true)
  // const userRole = useAppSelector((state) => state.user?.userData?.roles[0])
  // const user = useAppSelector((state) => state.user.userData)
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
          // dispatch(getTransactions())
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
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
        <>
          <main className={desktop ? `${Styles.main}` : `${Styles.main} ${Styles.main_mobile}`}>
            {!isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
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
                    <Route path='/broadcasts' exact component={BroadcastsMobile} />
                    <Route path='/chat' exact component={Dummy} />
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
