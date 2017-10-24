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
import Legacy from './Legacy'

export class Routes extends Component {

  scrollToTop() {
    if (this.props.history.action !== 'POP') {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {
    if(this.props.location.hash) {
      this.props.history.push(`/legacy/${ this.props.location.hash }`)
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
                  <Route path="/" exact component={ Home }/>
                  <Route path="/home" exact component={ Home }/>
                  <Route path="/about" component={ About }/>
                  <Route path="/portfolio/:id" component={ ViewPortfolioPiece }/>
                  <Route path="/legacy" component={ Legacy } />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>

    )

  }

}

const RoutesWithRouter = withRouter(Routes)

export { RoutesWithRouter }
