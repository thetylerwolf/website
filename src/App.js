import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Home from './components/Home'
import About from './components/About'
import ViewPortfolioPiece from './components/ViewPortfolioPiece'

export default class App extends Component {

  render() {

    return (

      <Router>
        <ScrollToTop>
          <main>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/portfolio/:id" component={ ViewPortfolioPiece }/>
          </main>
        </ScrollToTop>
      </Router>

    )

  }

}
