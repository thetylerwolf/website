import React, { Component } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

import Home from './Home'
import About from './About'
import ViewPortfolioPiece from './ViewPortfolioPiece'

export class Routes extends Component {

  scrollToTop() {
    if (this.props.history.action !== 'POP') {
      window.scrollTo(0, 0)
    }
  }

  render() {

    return (
          <main>
            <TransitionGroup>
              <CSSTransition
                key={ this.props.location.key }
                mountOnEnter={ true }
                unmountOnExit={ true }
                timeout={ 300 }
                classNames="page-level"
                onExited={ () => this.scrollToTop() }
              >
                <Switch location={ this.props.location }>
                  <Route exact path="/" component={ Home }/>
                  <Route path="/about" component={ About }/>
                  <Route path="/portfolio/:id" component={ ViewPortfolioPiece }/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>

    )

  }

}

const RoutesWithRouter = withRouter(Routes)

export { RoutesWithRouter }
