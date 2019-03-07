import React, { Component } from 'react'

import ScrollWatcher from '../assets/js/ScrollWatcher'
import HeaderNav from './HeaderNav'
import PortfolioPiece from './PortfolioPiece'

// import SparkleBall from '../assets/js/SparkleBall'

import portfolio from '../assets/js/portfolio.js'

import logoPath from '../assets/image/logo.js'
import * as parse from 'parse-svg-path'
// import * as draw from 'draw-svg-path'

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
      showBrand: false,
      show: false,
    }

    // this.sb = new SparkleBall()
  }

  componentDidMount() {
    // this.sb.init( 'home-canvas-wrap' )

    scrollWatcher.init()
      .onScrollStart((e) => this.onScrollStart(e))
      .onScrollEnd((e) => this.onScrollEnd(e))

    this.setState({ show: true })

    // let nameCanvas = this.refs.nameCanvas
    // let ctx = nameCanvas.getContext('2d')
    // nameCanvas.width = nameCanvas.width
    // nameCanvas.height = nameCanvas.height

    // ctx.lineWidth = 1
    // ctx.strokeStyle = '#000000'
    // let path = parse(logoPath)

    // console.log(path)
    // draw(ctx, path)
    // ctx.stroke()

  }

  onScrollStart(e) {
  }

  onScrollEnd(e) {
    // if(window.scrollY > window.innerHeight) {

    //   this.sb.stopAnimation()

    // } else {

    //   this.sb.startAnimation()

    // }

    let enterHeader = window.scrollY > window.innerHeight ? false : true

    this.setState({ showBrand: !enterHeader })
  }


  componentWillUnmount() {
    scrollWatcher.remove()
    this.setState({ show: false })
    // this.sb.remove()
  }

  componentDidUpdate() {

  }

  render() {

    return (
        <div className='home'>

          <HeaderNav
            showBrand={ this.state.showBrand }
            location={ this.props.location }
          />

          <div className="intro-section">

            <div className="intro-copy-wrap">

              <div className="name-wrap">
                {/* <canvas ref="nameCanvas"></canvas> */}
                <img src="logo.png" alt="Tyler Wolf" />
              </div>
              <br/>
              <div className="services-copy">
                Award-Winning, Contract
                <br/>
                Data Viz / UX Designer
              </div>

            </div>

          </div>

          <div className="home-portfolio-wrap">
            <div className="portfolio-title">Portfolio</div>
            { portfolioPieces }

          </div>

        </div>
    )

  }

}