import React, { Component } from 'react'
import PPJModal from '../components/PpjModal'

class PyeongJinPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
      fieldName: ''
    }
  
  }

  render () {
    return (
      <div id='pyeong-jin-page'>
        <h1>PyeongJin</h1>
        <button onClick={() => {this.setState({isModalVisible: true, fieldName: '모달'})}}>
          모달아 보여랏
        </button>
        <button onClick={() => {this.setState({isModalVisible: true, fieldName: '박평진'})}}>
          평진아 보여랏
        </button>
        {
          this.state.isModalVisible && (
            <PPJModal>
              <button onClick={() => {this.setState({isModalVisible: false})}}></button>
              <h1>{this.state.fieldName}</h1>
            </PPJModal>
          )
        }
      </div>
    )
  }
}

export default PyeongJinPage
