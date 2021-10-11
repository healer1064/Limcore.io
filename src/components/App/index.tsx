import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Footer } from '../Footer'
import { HomePage } from '../../pages/home'
import { Wrapper } from '../Wrapper'

import { OrdersPage } from '../../pages/orders'
import { PageNotFount } from '../../pages/not-found'
import { DevelopingPage } from '../../pages/developing'
import { AccessDeniedPage } from '../../pages/access-denied'

import { useAppSelector } from '@app/redux/hooks'

import Styles from './style.module.scss'
import { ProtectedRoute } from '@components/Router/protected-route'
// eslint-disable-next-line camelcase
import { USER_ROlES } from '../../global-constants'
import { Spinner } from '@components/Spinner'
import { OrderCatalog } from '../../pages/catalog'
import { Header } from '@components/Header'

const App = () => {
  const userRole = useAppSelector((state) => state.user?.userData?.roles[0])
  const user = useAppSelector((state) => state.user.userData)

  return (
    <Router>
      <div className={Styles.app_container}>
        <Header />
        {user ? (
          <section>
            <Wrapper>
              <Switch>
                <Route path='/' exact component={USER_ROlES.user === userRole?.name ? HomePage : HomePage} />
                <ProtectedRoute allowedUsersTypes={[USER_ROlES.user]} path='/orders' exact component={OrdersPage} />
                <Route path='/not-found' exact component={PageNotFount} />
                <Route path='/reports' exact component={DevelopingPage} />
                <Route path='/agreements' exact component={DevelopingPage} />
                <Route path='/access-denied' exact component={AccessDeniedPage} />
                <Route path='/catalog' exact component={OrderCatalog} />
                <Route path='*'>
                  <Redirect to='/not-found' />
                </Route>
              </Switch>
            </Wrapper>
            <Footer />
          </section>
        ) : (
          <div className={Styles.spinner_container}>
            <Spinner />
          </div>
        )}
      </div>
    </Router>
  )
}

export default App
