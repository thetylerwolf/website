import {
  Route,
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'

import PortfolioPiece from './PortfolioPiece.js'

export default class Portfolio extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div>
        <h2>Portfolio</h2>
        <PortfolioPiece />
      </div>

    )

  }

}

