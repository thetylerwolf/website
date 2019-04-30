import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ScrollWatcher from '../assets/js/ScrollWatcher'
import HeaderNav from './HeaderNav'
import PortfolioPiece from './PortfolioPiece'

import portfolio from '../assets/js/portfolio.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

let scrollWatcher = new ScrollWatcher()

let portfolioPieces = portfolio.entries.map(( entry, i ) => {
  return (
    <Col lg={4} md={6} sm={12} className="piece-wrap" key={ i }>
      <PortfolioPiece entry={ entry } />
    </Col>
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
                {/* <img src="logo.png" alt="Tyler Wolf" /> */}
                <div>I'm <span className="name-text">Tyler Wolf</span></div>
                <div>I make data visualizations and design products.</div>
                <div>My portfolio is below <FontAwesomeIcon icon={ faChevronDown } size="xs"/>. You can learn more about me <Link to="/about">here</Link>.</div>
              </div>
              <br/>
              {/*
              <div className="services-copy">
                Award-Winning, Contract
                <br/>
                Data Viz / UX Designer
              </div>
            */}

            </div>

          </div>

          <div className="home-portfolio-wrap">
            <div className="portfolio-title">Portfolio</div>
            <Grid>
              <Row>
                { portfolioPieces }
              </Row>
            </Grid>
          </div>

        </div>
    )

  }

}