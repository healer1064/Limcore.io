import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Footer } from '../Footer'
import { FooterMobile } from '../Footer/FooterMobile'
import { HomePage } from '../../pages/home'
import { Wrapper } from '../Wrapper'

import { OrdersPage } from '../../pages/orders'
import { PageNotFount } from '../../pages/not-found'
import { DevelopingPage } from '../../pages/developing'
import { AccessDeniedPage } from '../../pages/access-denied'
import { BuyPage } from '../../pages/buy'

import { useAppSelector } from '@app/redux/hooks'

import Styles from './style.module.scss'
import { ProtectedRoute } from '@components/Router/protected-route'
// eslint-disable-next-line camelcase
import { USER_ROlES } from '../../global-constants'
import { Spinner } from '@components/Spinner'
import { OrderCatalog } from '../../pages/catalog'
import { Header } from '@components/Header'
import { HeaderMobile } from '@components/Header/HeaderMobile'
import { CabinetPage } from '../../pages/cabinet'

import { LandingPage } from '../../pages/landing'
import { PurseMobile } from '@components/Purse/PurseMobile'
import { BroadcastsMobile } from '@components/Broadcasts/BroadcastsMobile'
import { ProfileMobile } from '@components/Profile/ProfileMobile'

const App = () => {
  const userRole = useAppSelector((state) => state.user?.userData?.roles[0])
  const user = useAppSelector((state) => state.user.userData)

  return (
    <Router>
      <div className={Styles.app_container}>
        <Header />
        {/* <HeaderMobile /> */}
        {user ? (
          <main className={Styles.main}>
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path='/purse' exact component={PurseMobile} />
              <Route path='/chat' exact component={ProfileMobile} />
              <Route path='/broadcasts' exact component={BroadcastsMobile} />
              <Route path='/profile' exact component={ProfileMobile} />
              <Route path='/buy' exact component={BuyPage} />
              <Route path='/not-found' exact component={PageNotFount} />
              <Route path='*'>
                <Redirect to='/not-found' />
              </Route>

              {/* <Route path='/' exact component={USER_ROlES.user === userRole?.name ? HomePage : HomePage} />
                <ProtectedRoute allowedUsersTypes={[USER_ROlES.user]} path='/orders' exact component={OrdersPage} /> */}
            </Switch>
          </main>
        ) : (
          <div className={Styles.spinner_container}>
            <Spinner />
          </div>
        )}
        <Footer />
        {/* <FooterMobile /> */}
      </div>
    </Router>
  )
}

export default App
