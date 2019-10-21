import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TestSorting extends Component {
  constructor (props) {
    super(props)
    this.handleClick = () => null
  }

  render () {
    return (
      <button title={this.props.title} onClick={this.handleClick} />
    )
  }
}

TestSorting.propTypes = {
  title: PropTypes.string
}
