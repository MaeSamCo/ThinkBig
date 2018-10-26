import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'

class TestPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="test-page">
                <h1>
                    {this.props.state.wow}
                </h1>
            </div>
        )
    }
}

export default ContextHOC(TestPage)