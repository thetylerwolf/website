import React, { Component } from 'react'

import HeaderNav from './HeaderNav'
import PortfolioPages from './PortfolioPages'
import '../assets/css/ViewPortfolioPiece.css'

export default class ViewPortfolioPiece extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: props.match.params.id
    }
  }

  render() {
    return (

      <div className="view-portfolio-piece-wrapper">

        <HeaderNav showBrand={ true } />

        { PortfolioPages[this.state.currentPage] }

      </div>

    )

  }

}

