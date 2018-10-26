import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import '../components/Management.css'
import Modal from '../components/Modal';

class Management extends Component {

    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

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
                                            <span className="detailed-info" id={index.toString()} onClick={this.toggleModal}><i className="fas fa-info location-element-icon"></i></span>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                        현재인원 : <br></br>
                        청결관리 : <br></br>
                        시간관리 : <input type="time"></input>
                </Modal>
            </div>
        )
    }
}

export default Management