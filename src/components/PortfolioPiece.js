import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import '../assets/css/PortfolioPiece.css'

export default class PortfolioPiece extends Component {

  // componentDidMount() {
      // Add paralax here
  // }

  render() {

    let contents = (
        <span>
          <div className="piece-image">
            <img
              className={ `${ this.props.entry.id} ${(this.props.entry.fit ? 'fit' : null) }` }
              src={ `/portfolio/${this.props.entry.id}/${this.props.entry.cover.img}` }
              alt={ this.props.entry.title }
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
            { this.props.entry.external ? '[External]' : null }
            { this.props.entry.description.map((d,i) =>
                <div key={ i }>{ d }</div>
              ) }
          </div>
        </span>
      )

    let linkURL = this.props.entry.external ? this.props.entry.link : '/portfolio/' + this.props.entry.id
    let link

    if( this.props.entry.external ) {
      link = <a href={ linkURL } target="_blank">{ contents }</a>
    } else {
      link = <Link to={ linkURL }>{ contents }</Link>
    }

    return (

        <div className="portfolio-piece">

          { link }

        </div>

    )

  }

}
