import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

export default class PortfolioPiece extends Component {

  componentDidMount() {

    this.parallaxInterval = setInterval(() => {
      window.requestAnimationFrame(() => {
        if(!this.refs.container) return
        let rect = this.refs.container.getBoundingClientRect()
        if(rect.y > window.innerHeight || rect.y < -rect.height) {
          return
        }

        let maxDisplacement = 70
        let displacement = maxDisplacement * (rect.top / window.innerHeight)
        displacement = displacement.toFixed(0)

        this.refs.title.style.transform = `translate3d(0,${ displacement }px,0)`

      })
    }, 10)

  }

  componentWillUnmount() {
    clearInterval(this.parallaxInterval)
    this.parallaxInterval = 0
  }

  render() {

    let extLink = this.props.entry.external ? (
      <div className="ext-link">
        <FontAwesome name="external-link" />
      </div>
    ) : undefined

    let contents = (

      <span ref="container">
        <div className="piece-image">
          <img
            className={ `${ this.props.entry.id} ${(this.props.entry.fit ? 'fit' : null) }` }
            src={ `/portfolio/${this.props.entry.id}/${this.props.entry.cover.img}` }
            alt={ this.props.entry.title }
          />
        </div>

        <div
          className="piece-title"
          ref="title"
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

        { extLink }

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
