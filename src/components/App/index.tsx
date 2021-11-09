import React, { useEffect, useState } from 'react'
import useWindowSize from '../../helpers/useWindowSizeHook'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
// import { setIsAuth, checkToken } from '../../pages/auth/redux/auth.slice'
import { checkToken, getTransactions } from '../../pages/auth/redux/auth.slice'

// import { Footer } from '../Footer'
import { FooterMobile } from '../Footer/FooterMobile'
// import { HomePage } from '../../pages/home'
// import { Wrapper } from '../Wrapper'

// import { OrdersPage } from '../../pages/orders'
import { PageNotFount } from '../../pages/not-found'
// import { DevelopingPage } from '../../pages/developing'
// import { AccessDeniedPage } from '../../pages/access-denied'
import { BuyPage } from '../../pages/buy'

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
import { AuthPage } from '../../pages/auth'
// import { AuthMobile } from '../../pages/auth/AuthMobile'

import { Dummy } from '../../components/Dummy'
import { LandingPage } from '../../pages/landing'
import { PurseMobile } from '@components/Purse/PurseMobile'
import { BroadcastsMobile } from '@components/Broadcasts/BroadcastsMobile'
import { ProfileMobile } from '@components/Profile/ProfileMobile'
import { getWalletAdress, getWalletBalance, getLimcPrice, getLimcAmount } from '../Wallet/redux/walletSlice'
import { getUser } from '@app/redux/userSlice'
import { BroadcastsDesktop } from '@components/Broadcasts/BroadcastsDesktop'
// import { api } from '@app/api'

const App = () => {
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()
  // const userRole = useAppSelector((state) => state.user?.userData?.roles[0])
  const user = useAppSelector((state) => state.user.userData)
  // const isAuth = useAppSelector((state) => state.auth.isAuth)
  const isAuth = useAppSelector((state) => state.authNew.isAuth)
  const [isLoading, setIsLoading] = useState(false)
  console.log(user)
  const desktop = width >= 769

  useEffect(() => {
    const tokenObj = { ...JSON.parse(localStorage.getItem('jwtToken')) }

    if (tokenObj.access) {
      setIsLoading(true)

      dispatch(checkToken({ token: tokenObj.access }))
        .then(() => {
          dispatch(getWalletAdress())
          dispatch(getWalletBalance())
          dispatch(getLimcPrice())
          dispatch(getLimcAmount())
          dispatch(getUser())
          dispatch(getTransactions())
          setIsLoading(false)
        })
        .catch((err) => {
          console.log('ERROR ===========+>>>>>>', err)
          setIsLoading(false)
        })
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
        {desktop ? <Header /> : <HeaderMobile />}
        <>
          <main className={desktop ? `${Styles.main}` : `${Styles.main} ${Styles.main_mobile}`}>
            {!isAuth && !isLoading && (
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/my' exact component={PurseMobile} />
                <Route path='/auth' exact component={AuthPage} />
                <Route path='/profile' exact component={ProfileMobile} />
                {/* <Route path='/auth' exact component={AuthMobile} /> */}
                <Route path='/not-found' exact component={PageNotFount} />
                <Route path='*'>
                  <Redirect to='/not-found' />
                </Route>

                {/* <Route path='/' exact component={USER_ROlES.user === userRole?.name ? HomePage : HomePage} />
                <ProtectedRoute allowedUsersTypes={[USER_ROlES.user]} path='/orders' exact component={OrdersPage} /> */}
              </Switch>
            )}
            {isAuth && !isLoading && (
              <Switch>
                {/* <Route path='/' exact component={PurseMobile} /> */}
                <Route path='/' exact component={LandingPage} />
                <Route path='/my' exact component={PurseMobile} />
                <Route path='/chat' exact component={Dummy} />
                {desktop ? (
                  <Route path='/broadcasts' exact component={BroadcastsDesktop} />
                ) : (
                  <Route path='/broadcasts' exact component={BroadcastsMobile} />
                )}
                <Route path='/profile' exact component={ProfileMobile} />
                <Route path='/buy' exact component={BuyPage} />
              </Switch>
            )}
          </main>
        </>
        {isAuth && <FooterMobile />}
      </div>
    </Router>
  )
}

export default App
