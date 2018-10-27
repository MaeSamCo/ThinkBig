import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import {PrettyButton, PB} from '../components/PrettyButton'
import '../components/Management.css'
import Modal from '../components/Modal'
import HeaderBar from '../components/header'
import { getFireDB } from '../components/FirebaseInit'
// import { ContextHOC } from '../context/ContextMain'
import { putPlacetoDB } from '../components/FirebaseInit'

class Management extends Component {

    constructor(props) {
        super(props);
        
        this.state = { isAddOpen: false, isDetailedOpen: false, currentIndex: 0, isLoaded: false,
            placeList: {}
         }

    }

    componentDidMount() {
        getFireDB('/place/')
        .on('value',snapshot => {
            this.setState({placeList: snapshot.val()})
           //  this.setState({reservationlist: (Object.values((snapshot.val()).reservationlist))[0]})
        })
        this.setState({isLoaded: true})
    }
    modalon(){
        //this.setState({isDetailedOpen: true, })
    }

    save(){
        const name=document.getElementById("name").value
        const classify=document.getElementById("classify").value
        const maxpeople=document.getElementById("maxpeople").value
        const description=document.getElementById("description").value
        const recommendtime=document.getElementById("recommendtime").value
        const location=document.getElementById("location").value
        putFireDB('place/'+name, name, classify, maxpeople, description, recommendtime, location)
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
                                <div className="manage-location-add" onClick={() => this.setState({isAddOpen: true})}><i className="fas fa-plus"></i></div>
                            </div>

                            <div className="location-list">
                                {
                                    this.state.isLoaded && (
                                    this.state.placeList.map((place,index)=>                      
                                    <div className="location-element">
                                        <div className="location-element-title">
                                            {name}
                                            <span className="detailed-info" onClick={() => this.modalon(place['placename'], place['classify']
                                            , place['maxpeople'], place['description'], place['recommendtime'], place['location'])}><i className="fas fa-info location-element-icon"></i></span>
                                        </div>
                                    </div>))
                                }
                            </div>
                        </div>

                    </div>
                </div>
                {
                    this.state.isAddOpen && (
                    <Modal>
                        <div>
                            <div className="modal-title">장소 추가!</div>
                            <div className="single-content"><label htmlFor="name">장소이름</label><input id="name" type="text"/></div>
                            <div className="single-content"><label htmlFor="classify">장소분류</label><input id="classify" type="text"/></div>
                            <div className="single-content"><label htmlFor="maxpeople">최대인원</label><input id="maxpeople" type="text"/></div>
                            <div className="single-content"><label htmlFor="description">설명</label><input id="description" type="textarea"/></div>명
                            <div className="single-content"><label htmlFor="recommendtime">권장시간</label><input id="recommendtime" type="number"/>분</div>
                            <div className="single-content"><label htmlFor="location">위치</label><input id="location" type="text"/></div>
                            <button onClick={this.save}>추가!!!</button>
                        </div>

                        <span className="close" onClick={() => this.setState({isAddOpen: false})}>&times;</span>
                    </Modal>)
                }

                {
                    this.state.isDetailedOpen && (
                    <Modal>
                        <div>
                            <div className="modal-title">{this.state.fieldName}</div>
                            <div className="single-content">현재인원 : {this.state.fieldPeople}</div>
                            <div className="single-content">청결관리 : {this.state.fieldClean}</div>
                            <div className="single-content">시간관리 : <input type="time"></input></div>
                            <div className="single-content">기온 : {this.state.fieldTemperature}℃</div>
                        </div>

                        <span className="close" onClick={() => this.setState({isDetailedOpen: false})}>&times;</span>
                    </Modal>)
                }
            </div>
        )
    }
}

export default Management