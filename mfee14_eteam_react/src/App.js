import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './pages/nav/nav-index'
import Index from './pages/index/index'
import Footer from './pages/footer/footer-index'
import About from './pages/about-us/about-index'

function App() {
  return (
    //路由器
    <>
      <Router>
        <Nav />
        <>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </>
        <Footer />
      </Router>
    </>
  )
}

export default App
