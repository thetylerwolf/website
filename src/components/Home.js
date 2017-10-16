import React, { Component } from 'react'
import ScrollWatcher from '../assets/js/ScrollWatcher'

import HeaderNav from './HeaderNav'
import PortfolioPiece from './PortfolioPiece'

import SparkleBall from '../assets/js/SparkleBall'
import '../assets/css/Home.css'
import portfolio from '../assets/data/portfolio.json'

let scrollWatcher = new ScrollWatcher()

let portfolioPieces = portfolio.entries.map(( entry, i ) => {
  return (
    <div className="piece-row" key={ i }>
      <PortfolioPiece entry={ entry } />
    </div>
  )
})

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      showBrand: false
    }

    this.sb = new SparkleBall()
  }


  componentDidMount() {
    this.sb.init( 'home-canvas-wrap' )

    scrollWatcher.init()
      .onScrollStart((e) => this.onScrollStart(e))
      .onScrollEnd((e) => this.onScrollEnd(e))

  }

  onScrollStart(e) {
  }

  onScrollEnd(e) {
    if(window.scrollY > window.innerHeight) {

      this.sb.stopAnimation()

    } else {

      this.sb.startAnimation()

    }

  }

  componentWillUnmount() {
    scrollWatcher.remove()
    this.sb.remove()
  }

  componentDidUpdate() {

  }

  render() {

    return (

      <div className="home">

        <HeaderNav
          onShow={ () => this.sb.stopAnimation() }
          onHide={ () => {
            if(window.scrollY < window.innerHeight)
              this.sb.startAnimation()
          }}
          showBrand={ this.state.showBrand }
        />

        <div className="intro-section">

          <div id="home-canvas-wrap" />

          <div className="intro-copy-wrap">

            <div className="name-wrap">
              <img src="logo.svg" alt="Tyler Wolf" />
            </div>
            <div className="services-copy">
              Data Viz / UX Design / Creative Developer
            </div>

          </div>
          {/* <canvas id="home-canvas"></canvas> */}

        </div>

        <div className="home-portfolio-wrap">

          { portfolioPieces }

        </div>

      </div>

    )

  }

}