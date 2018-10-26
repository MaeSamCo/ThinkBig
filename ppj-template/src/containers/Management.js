import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import '../components/Management.css'

class Management extends Component {

    showAlert() {

    }

ss
    render() {        
        const jangso= ["꽃빛공원", "디미고", "딤이고","한국디지털미디어고등학교 체육관", "우와"];
        return (
            <div>   

                <div className="upper-bar">
                    <div className="upper-bar-header">
                        <a href="#">Management Page</a>
                        <div className="upper-bar-right">관리자 <i className="fas fa-angle-down"></i></div>
                    </div>
                </div>
                <dialog className="detailed-box">
                    <p>여러분 안녕하세요!</p>
                </dialog>
                <div>
                    <div className="all-manage-box">
                        <div className="manage-location">
                            <div className="manage-location-header">
                                장소 목록
                                <div className="manage-location-add"><i className="fas fa-plus"></i></div>
                            </div>

                            <div className="location-list">
                                {
                                    jangso.map((name,index)=>                      
                                    <div className="location-element">
                                        <div className="location-element-title">
                                            {name}
                                            <span className="detailed-info" id={index} onClick={this.showAlert}><i className="fas fa-info location-element-icon"></i></span>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        현재인원 : <br></br>
                        청결관리 : <br></br>
                        시간관리 : <input type="date" readOnly></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Management