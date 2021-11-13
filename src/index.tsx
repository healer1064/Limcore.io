import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import { Provider } from 'react-redux'
import App from './components/App'
import { store } from '@app/redux/store'
import { SnackbarProvider } from 'notistack'
import { SlideNotification } from '@components/Notification'

import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        content={(key, message: any) => <SlideNotification id={key} {...message} />}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
)
