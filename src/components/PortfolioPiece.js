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
          marginLeft: 100,
        }}>

          <Link to={ '/portfolio/' + this.props.entry.id }>
            <div className="piece-image">
              <img
                src={ `portfolio/${this.props.entry.id}/${this.props.entry.cover.img}` }
                alt={ this.props.entry.title }
                height={ 300 }
                style={ this.props.entry.cover.style }
              />
            </div>
            {/* <div className="image-placeholder"></div> */}

            <div className="piece-title">{ this.props.entry.title }</div>

          </Link>

        </div>

    )

  }

}
