import React, { Component } from 'react'
import {
  Router,
} from 'react-router-dom'
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'

import { RoutesWithRouter as Routes } from './components/Routes'

ReactGA.initialize('UA-37325539-1')
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview( window.location.pathname)

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  console.log(location.pathname)
})

export default class App extends Component {

  render() {
    return (

      <Router history={ history }>
        <Routes />
      </Router>

    )

  }

}
