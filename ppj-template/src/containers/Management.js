import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { PrettyButton, PB } from '../components/PrettyButton'
import '../components/Management.css'
import Modal from '../components/Modal'
import HeaderBar from '../components/header'
import { getFireDB, putPlacetoDB } from '../components/FirebaseInit'
import Footer from '../components/Footer';
// import { ContextHOC } from '../context/ContextMain'

class Management extends Component {
  constructor (props) {
    super(props)

    this.state = { isAddOpen: false,
      isDetailedOpen: false,
      currentIndex: 0,
      isLoaded: false,
      placeList: [],
      currentName: '',
      currentClass: '',
      currentMaxpeople: '',
      currentDescription: '',
      currentRecommendtime: '',
      currentLocation: ''
    }
  }

  componentDidMount () {
    getFireDB('place')
      .on('value', snapshot => {
        this.setState({ placeList: Object.keys(snapshot.val()), placeInfo: snapshot.val() })
      })
    this.setState({ isLoaded: true })
  }

  save () {
    alert("추가되었오")
    const name = document.getElementById('name').value
    const classify = document.getElementById('classify').value
    const maxpeople = document.getElementById('maxpeople').value
    const description = document.getElementById('description').value
    const recommendtime = document.getElementById('recommendtime').value
    const location = document.getElementById('location').value
    const star = document.getElementById('star').value
    putPlacetoDB('place/' + name, name, classify, maxpeople, description, recommendtime, location,star)
  }

  render () {
    return (
      <div>
        <HeaderBar />
        <div>
          <div className='all-manage-box'>
            <div className='manage-location'>
              <div className='manage-location-header'>
                                장소 목록
                <div className='manage-location-add' onClick={() => this.setState({ isAddOpen: true })}><i className='fas fa-plus' /></div>
              </div>

              <div className='location-list'>
                {
                  this.state.isLoaded && (
                    this.state.placeList.map((place, index) =>
                      <div key={index} className='location-element'>
                        <div className='location-element-title'>
                          {place}
                          <span className='detailed-info' onClick={() => this.setState({ isDetailedOpen: true, currentName: place })}><i className='fas fa-info location-element-icon' /></span>
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
                <div className='modal-title'>장소 추가!</div>
                <div className='single-content'><label htmlFor='name'>장소이름</label><input id='name' type='text' /></div>
                <div className='single-content'><label htmlFor='classify'>장소분류</label><input id='classify' type='text' /></div>
                <div className='single-content'><label htmlFor='maxpeople'>최대인원</label><input id='maxpeople' type='text' /></div>
                <div className='single-content'><label htmlFor='description'>설명</label><input id='description' type='textarea' /></div>
                <div className='single-content'><label htmlFor='recommendtime'>권장시간</label><input id='recommendtime' type='number' />분</div>
                <div className='single-content'><label htmlFor='location'>위치</label><input id='location' type='text' /></div>
                <div className='single-content'><label htmlFor='recommendtime'>별점개수</label><input id='star' type='number' max='5' />개</div>
                <div className='addButton' onClick={this.save}>추가!!!</div>
              </div>

              <span className='close' onClick={() => this.setState({ isAddOpen: false })}>&times;</span>
            </Modal>)
        }

        {
          this.state.isDetailedOpen && (console.log(this.state.placeInfo['']),
            <Modal>
            <div>
                <div className='modal-title'><span>{this.state.currentName}</span></div>
                <div className='single-content'>장소분류 : {this.state.placeInfo[this.state.currentName]['classify']}</div>
                <div className='single-content'>현재인원 : {this.state.placeInfo[this.state.currentName]['maxpeople']}</div>
                <div className='single-content'>시간관리 : <input type='time' /></div>
              </div>

            <span className='close' onClick={() => this.setState({ isDetailedOpen: false })}>&times;</span>
          </Modal>)
				}
				<Footer></Footer>
      </div>
    )
  }
}

export default Management
