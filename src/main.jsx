import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { NextSnkrApp } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProSidebarProvider>
        <BrowserRouter>
          <NextSnkrApp />
        </BrowserRouter>
      </ProSidebarProvider>
    </Provider>
  </React.StrictMode>,
)
