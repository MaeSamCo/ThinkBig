import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import './JeYunPage.css'

class JeYunPage extends Component {

    render() {
        return (
            <div id="je-yun-page">
                <h1>Management Page</h1>

                <div className="manage-box">
                    현재인원 : <br></br>
                    청결관리 : <br></br>
                    시간관리 : <input type="date" readOnly></input>
                </div>
            </div>
            
        )
    }
}

export default JeYunPage