import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import ReactGA from 'react-ga'

import { RoutesWithRouter as Routes } from './components/Routes'

ReactGA.initialize('UA-37325539-1')

export default class App extends Component {

  render() {
    return (

      <Router onUpdate={ logPageView }>
        <Routes />
      </Router>

    )

  }

}

function logPageView() {
    var path = /\/.*(?=\?)/.exec(window.location.hash)[0]
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
}
