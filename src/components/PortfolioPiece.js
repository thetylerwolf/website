import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import '../assets/css/PortfolioPiece.css'

export default class PortfolioPiece extends Component {
  componentDidMount() {
    // window.addEventListener('scroll')
  }

  render() {

    return (

        <div className="portfolio-piece">

          <Link to={ '/portfolio/' + this.props.entry.id }>

            <div className="piece-image">
              <img
                src={ `portfolio/${this.props.entry.id}/${this.props.entry.cover.img}` }
                alt={ this.props.entry.title }
                style={{ width: this.props.entry.fit ? '100%' : null }}
              />
            </div>

            <div
              className="piece-title"
              style={{
                color: this.props.entry.lightText ? '#fff' : '#1a1a1a'
              }}
            >
              { this.props.entry.title }
            </div>

            <div
              className="piece-description"
              style={{
                color: this.props.entry.lightText ? '#fff' : '#1a1a1a'
              }}
            >
              { this.props.entry.description.map((d) =>
                  <div>{ d }</div>
                ) }
            </div>

          </Link>

        </div>

    )

  }

}
