import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'

class TestPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.actions.showValue()
    }

    render() {
        return (
            <div id="test-page">
                <h1>우와</h1>
            </div>
        )
    }
}

export default ContextHOC(TestPage)