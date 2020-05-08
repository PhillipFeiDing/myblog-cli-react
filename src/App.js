import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import SidePanel from './common/sidePanel'
import Home from './pages/home'
import Content from './pages/content'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <SidePanel />
        <BrowserRouter>
          <Fragment>
            <Route path='/(|home|index)' exact component={Home}></Route>
            <Route path='/content' exact component={Content}></Route>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    </Provider>
  )
}

export default App;
