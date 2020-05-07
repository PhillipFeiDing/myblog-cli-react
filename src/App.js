import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Content from './pages/content'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Route path='/(home|)' exact component={Home}></Route>
          <Route path='/content' exact component={Content}></Route>
        </Fragment>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
