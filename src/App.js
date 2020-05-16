import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import SidePanel from './common/sidePanel'
import Home from './pages/home'
import Detail from './pages/detail'
import Footer from './common/footer'
import store from './store'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Fragment>
          <Route path='/(|home|index)' exact component={SidePanel} />
          <Route path='/(|home|index)' exact component={Home} />
          <Route path='/(|home|index)' exact component={Footer} />

          <Route path='/detail/:id' component={SidePanel} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/detail/:id' component={Footer} />
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
