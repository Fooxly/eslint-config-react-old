import React, { useState, useEffect, Component } from 'react'

export class TestSorting1 extends Component {
  renderFooter () {}

  handleClick () {}

  render () {
    return null
  }
}

export class TestSorting2 extends Component {
  handleClick () {}

  renderFooter () {}

  render () {
    return null
  }

  constructor (props) {
    super(props)
    this.test = null
  }
}

const nope = () => null

export const TestHooks = () => {
  const [name, setName] = useState('test')

  if (name !== '') {
    useEffect(() => {
      nope(name)
    }, [])
  }

  return <input onChange={setName} />
}
