import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import '../components/Management.css'
import Modal from '../components/Modal';

    // The gray background
    const backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };

    // The modal "window"
    const modalStyle = {
        
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 400,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
        justifyContent: 'space-between',
        fontFamily: '나눔고딕',
        fontSize: '16px'
    };

    /* The Close Button */
    const close = {
        color: '#aaaaaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
    }
class Management extends Component {

<<<<<<< HEAD
    showAlert() {
    }
=======
    constructor(props) {
        super(props);
        
        this.state = { isOpen: false, currentIndex: 0,
            jangso: {name: ["꽃빛공원", "디미고", "딤이고","한국디지털미디어고등학교 체육관", "우와"],
            people: [5,3,1,4,6],
            clean: ["청결","더러움","보통","보통","보통"],
            temperatue: [30, 12,60,100,20]}
         }
    }
    

    toggleModal = (index) => {
        this.setState({
            isOpen: !this.state.isOpen,
            currentIndex: index}
        );
        // </div><div className="single-content">현재인원 : {this.state.jangso['people'][0]}</div>
        // <div className="single-content">청결관리 : {this.state.jangso['clean'][0]}</div>
        // <div className="single-content">시간관리 : <input type="time"></input></div>
        // <div className="single-content">기온 : {this.state.jangso['temperatue'][0]}℃</div>)
        //ReactDOM.render(<div className="modal-title">{this.state.jangso['name'][currentIndex]}</div>, document.getElementById('modal'))
    }

>>>>>>> cd16e78779507fd0254676f49e47804bac3c1bba
    render() {        

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
                                    this.state.jangso['name'].map((name,index)=>                      
                                    <div className="location-element">
                                        <div className="location-element-title">
                                            {name}
                                            <span className="detailed-info" id={index.toString()} onClick={() => this.toggleModal(index)}><i className="fas fa-info location-element-icon"></i></span>
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
                    <div className="backdrop" style={backdropStyle}>
                        <div className="modal" style={modalStyle}>
                            <div></div>
                            <span className="close" onClick={this.props.onClose} style={close}>&times;</span>
                            {/* <div className="footer">
                            
                            <button onClick={this.props.onClose}>
                            Close
                            </button>
                        </div> */}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Management