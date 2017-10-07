import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

export default class PortfolioPiece extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // window.addEventListener('scroll')
  }

  render() {

    return (

        <div className="portfolio-piece" style={{
          position: 'relative',
          marginLeft: (50 * Math.random()) + '%',
          width: 350,
          height: 400,
          backgroundColor:'#888'
        }}>

          <Link to={ '/portfolio/' + this.props.entry.id }>
            {/* <div className="piece-image"><img src="" alt={ entry.title } /></div> */}
            <div className="image-placeholder"></div>

            <div className="piece-title">{ this.props.entry.title }</div>

          </Link>

        </div>

    )

  }

}
