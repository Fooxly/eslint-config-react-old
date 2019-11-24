import { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const nope = () => null

class TestSorting extends Component {
  constructor (props) {
    super(props)
    this.handleClick = () => null
  }

  testMethod () {}

  renderButtons () {}

  render () {
    return (
      <button title={this.props.title} onClick={this.handleClick} />
    )
  }
}

TestSorting.propTypes = {
  title: PropTypes.string
}

export default TestSorting

export const TestHandlerNaming = () => {
  const onClick = nope
  const onChange = nope

  return (
    <div>
      <button onClick={onClick} />
      <input onChange={onChange} />
    </div>
  )
}

export const TestExhaustiveDeps = () => {
  const foo = useState('bar')

  useEffect(() => {
    nope(foo)
  }, [foo])

  return null
}
