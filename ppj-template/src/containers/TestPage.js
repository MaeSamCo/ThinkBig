import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import PrettyButton from '../components/PrettyButton'

class TestPage extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.actions.showValue()
  }

  render () {
    return (
      <div id='test-page'>
        <h1>우와</h1>
        <PrettyButton>전호빈</PrettyButton>
      </div>
    )
  }
}

export default ContextHOC(TestPage)
