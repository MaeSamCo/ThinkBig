import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import '../components/Management.css'
import Modal from '../components/Modal'
import HeaderBar from '../components/header'

class Management extends Component {

    constructor(props) {
        super(props);
        
        this.state = { isOpen: false, currentIndex: 0,
            jangso_name: ["꽃빛공원", "디미고", "딤이고", "꽃빛공원 농구장","한국디지털미디어고등학교 체육관"],
            jangso: [ ["꽃빛공원", 5, "청결",30], ["디미고",2,"더러움",14], ["딤이고",2,"보통",100]
            , ["꽃빛공원 농구장",2,"더러움",68], ["한국디지털미디어고등학교 체육관",2,"더러움",20]],
            fieldName: "",
            fieldPeople: 0,
            fieldClean: "",
            fieldTemperature: 0
         }
    }
    
    render() {        

        return (
            <div>   
                <HeaderBar />
                <div>
                    <div className="all-manage-box">
                        <div className="manage-location">
                            <div className="manage-location-header">
                                장소 목록
                                <div className="manage-location-add"><i className="fas fa-plus"></i></div>
                            </div>

                            <div className="location-list">
                                {
                                    this.state.jangso_name.map((name,index)=>                      
                                    <div className="location-element">
                                        <div className="location-element-title">
                                            {name}
                                            <span className="detailed-info" onClick={() => this.setState({isOpen: true, fieldName: this.state.jangso_name[index], fieldPeople: this.state.jangso[index][1]
                                            , fieldClean: this.state.jangso[index][2], fieldTemperature: this.state.jangso[index][3]})}><i className="fas fa-info location-element-icon"></i></span>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
                {
                    this.state.isOpen &&(
                    <Modal>
                        <div>
                            <div className="modal-title">{this.state.fieldName}</div>
                            <div className="single-content">현재인원 : {this.state.fieldPeople}</div>
                            <div className="single-content">청결관리 : {this.state.fieldClean}</div>
                            <div className="single-content">시간관리 : <input type="time"></input></div>
                            <div className="single-content">기온 : {this.state.fieldTemperature}℃</div>
                        </div>
                        
                        

                        <span class="close" onClick={() => this.setState({isOpen: false})}>&times;</span>
                    </Modal>)
                }
            </div>
        )
    }
}

export default Management