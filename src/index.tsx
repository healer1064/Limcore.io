import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { Provider } from 'react-redux'
import App from './components/App'
import { store } from '@app/redux/store'
import { SnackbarProvider } from 'notistack'
import { SlideNotification } from '@components/Notification'

ReactDOM.render(
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
  </Provider>,
  document.getElementById('root'),
)
