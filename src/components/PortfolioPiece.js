import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

export default class PortfolioPiece extends Component {

  componentDidMount() {

    // this.parallaxInterval = setInterval(() => {
    //   window.requestAnimationFrame(() => {
    //     if(!this.refs.container) return
    //     let rect = this.refs.container.getBoundingClientRect()
    //     if(rect.y > window.innerHeight || rect.y < -rect.height) {
    //       return
    //     }

    //     let maxDisplacement = 35
    //     let displacement = maxDisplacement * (rect.top / window.innerHeight)
    //     displacement = displacement.toFixed(0)

    //     this.refs.title.style.transform = `translate3d(0,${ displacement }px,0)`

    //   })
    // }, 10)

  }

  componentWillUnmount() {
    clearInterval(this.parallaxInterval)
    this.parallaxInterval = 0
  }

  render() {

    let extLink = this.props.entry.external ? (
      <FontAwesomeIcon className="ext-link" size="xs" icon={ faExternalLinkAlt } />
    ) : undefined

    let contents = (

      <span>
        <div className="piece-image" ref="container">
          <img
            className={ `${ this.props.entry.id}` }
            src={ `/portfolio/${this.props.entry.id}/${this.props.entry.cover.img}` }
            alt={ this.props.entry.title }
          />
        </div>

        <div
          className="piece-title"
          ref="title"
        >
          { this.props.entry.title } { extLink }
        </div>

        <div
          className="piece-description"
        >
          {/* { this.props.entry.external ? '[External]' : null } */}
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
