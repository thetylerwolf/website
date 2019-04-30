import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import HeaderNav from './HeaderNav'
import portfolioPages from './PortfolioPages'
import ScrollWatcher from '../assets/js/ScrollWatcher'

let scrollWatcher = new ScrollWatcher()

export default class ViewPortfolioPiece extends Component {
  constructor(props) {
    super(props)

    console.log(portfolioPages, props.match.params.id)
    this.state = portfolioPages[ props.match.params.id ]
  }

  componentDidMount() {
    scrollWatcher.init()
      .onScrollEnd((e) => this.setHeaderTextColor(e))
  }

  componentWillReceiveProps(nextProps) {
    this.setState( portfolioPages[ nextProps.match.params.id ] )
  }

  setHeaderTextColor(e) {

    let enterHeader = window.scrollY > window.innerHeight - 30 ? false : true

    if(enterHeader) {
      this.setState({ lightText: portfolioPages[ this.props.match.params.id ].lightText })
    } else {
      this.setState({ lightText: false })
    }
  }

  componentWillUnmount() {
    scrollWatcher.remove()
  }

  render() {

    return (

      <div className="view-portfolio-piece-wrapper">

        <HeaderNav
          showBrand={ true }
          light={ this.state.lightText }
        />

        <div className="side-link previous-link-wrap">
          <Link to={ '/portfolio/' + this.state.previous } className="previous-link">
            <FontAwesomeIcon icon={ faLongArrowAltLeft } />
            <div className="link-text">{ portfolioPages[ this.state.previous ].name }</div>
          </Link>
        </div>

        { this.state.page }

        <div className="side-link next-link-wrap">
          <Link to={ '/portfolio/' + this.state.next } className="next-link">
            <FontAwesomeIcon icon={ faLongArrowAltRight } />
            <div className="link-text">{ portfolioPages[ this.state.next ].name }</div>
          </Link>
        </div>

      </div>

    )

  }

}

