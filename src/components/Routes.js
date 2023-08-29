import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ViewPortfolioPiece from "./ViewPortfolioPiece";
import Legacy from "./Legacy";

export class Routes extends Component {
  scrollToTop() {
    if (this.props.history.action !== "POP") {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <main>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={300}
            classNames="page-level"
            onExited={() => this.scrollToTop()}
          >
            <Switch location={this.props.location}>
              <Route
                path="/"
                exact
                render={({ location }) => {
                  const { hash } = location;
                  if (hash === "#/portfolio/corrdisp") {
                    window.location = "/corrdisp/index.html";
                  } else {
                    return <Home />;
                  }
                }}
              />
              <Route path="/home" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/portfolio/:id" component={ViewPortfolioPiece} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    );
  }
}

const RoutesWithRouter = withRouter(Routes);

export { RoutesWithRouter };
