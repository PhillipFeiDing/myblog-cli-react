import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import SidePanel from './common/sidePanel'
import Home from './pages/home'
import Detail from './pages/detail'
import Footer from './common/footer'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Route path='/(|home|index|detail)' exact component={SidePanel}></Route>
          <Route path='/(|home|index)' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/(|home|index|detail)' exact component={Footer}></Route>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
